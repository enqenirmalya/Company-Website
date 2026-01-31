export type LinkPreview = {
  url: string;
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
};

type MicrolinkResponse = {
  status: "success" | "error";
  data?: {
    url?: string;
    title?: string;
    description?: string;
    siteName?: string;
    publisher?: string;
    image?: { url?: string } | string;
    logo?: { url?: string } | string;
  };
  message?: string;
  code?: string;
};

const CACHE_PREFIX = "linkPreview:";
const DEFAULT_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

/**
 * Normalizes user-provided URLs so that:
 * - "example.com/page" becomes "https://example.com/page"
 * - "http(s)://..." stays unchanged
 *
 * This prevents the browser from treating URLs as relative paths on localhost,
 * which can lead to React Router's NotFound page.
 */
export function normalizeLinkUrl(inputUrl: string): string {
  const trimmed = inputUrl.trim();
  if (!trimmed) return trimmed;

  // Already absolute?
  try {
    // eslint-disable-next-line no-new
    new URL(trimmed);
    return trimmed;
  } catch {
    // continue
  }

  // Protocol-relative (e.g. //example.com)
  if (trimmed.startsWith("//")) return `https:${trimmed}`;

  return `https://${trimmed}`;
}

function safeUrlToHostname(url: string): string | undefined {
  try {
    return new URL(url).hostname;
  } catch {
    return undefined;
  }
}

function pickImageUrl(
  value: { url?: string } | string | undefined,
): string | undefined {
  if (!value) return undefined;
  if (typeof value === "string") return value;
  return value.url;
}

function normalizePreview(url: string, json: MicrolinkResponse): LinkPreview {
  const hostname = safeUrlToHostname(url);
  const data = json.data ?? {};

  const siteName =
    data.siteName?.trim() ||
    data.publisher?.trim() ||
    (hostname ? hostname.replace(/^www\./, "") : undefined);

  return {
    url: data.url || url,
    title: data.title?.trim() || hostname,
    description: data.description?.trim(),
    image: pickImageUrl(data.image) || pickImageUrl(data.logo),
    siteName,
  };
}

function getCacheKey(url: string) {
  return `${CACHE_PREFIX}${url}`;
}

export function getFallbackLinkPreview(url: string): LinkPreview {
  const normalizedUrl = normalizeLinkUrl(url);
  const hostname = safeUrlToHostname(normalizedUrl);
  return {
    url: normalizedUrl,
    title: hostname || normalizedUrl,
    description: undefined,
    image: undefined,
    siteName: hostname ? hostname.replace(/^www\./, "") : undefined,
  };
}

export async function getLinkPreview(
  url: string,
  opts?: { ttlMs?: number },
): Promise<LinkPreview> {
  const trimmedUrl = normalizeLinkUrl(url);
  const ttlMs = opts?.ttlMs ?? DEFAULT_TTL_MS;
  const cacheKey = getCacheKey(trimmedUrl);

  // Best-effort localStorage cache. If it fails (privacy mode, quota, etc.), we still fetch.
  try {
    const raw = localStorage.getItem(cacheKey);
    if (raw) {
      const cached = JSON.parse(raw) as { expiresAt: number; data: LinkPreview };
      if (cached?.expiresAt && cached.expiresAt > Date.now() && cached.data) {
        return cached.data;
      }
    }
  } catch {
    // ignore cache errors
  }

  const endpoint = new URL("https://api.microlink.io/");
  endpoint.searchParams.set("url", trimmedUrl);
  endpoint.searchParams.set("palette", "true");
  endpoint.searchParams.set("screenshot", "false");
  endpoint.searchParams.set("meta", "true");

  const res = await fetch(endpoint.toString());
  if (!res.ok) {
    throw new Error(`Link preview request failed (${res.status})`);
  }

  const json = (await res.json()) as MicrolinkResponse;
  if (json.status !== "success") {
    throw new Error(json.message || "Link preview request failed");
  }

  const normalized = normalizePreview(trimmedUrl, json);

  try {
    localStorage.setItem(
      cacheKey,
      JSON.stringify({ expiresAt: Date.now() + ttlMs, data: normalized }),
    );
  } catch {
    // ignore cache errors
  }

  return normalized;
}
