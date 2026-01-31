import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { getFallbackLinkPreview, getLinkPreview } from '@/lib/linkPreview';

type ArticleSource = {
  id: number;
  url: string;
  category: string;
};

const articles: ArticleSource[] = [
  {
    id: 1,
    category: 'Education',
    url: 'https://www.epa.gov/recycle/electronics-donation-and-recycling',
  },
  {
    id: 2,
    category: 'Environment',
    url: 'https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)',
  },
  {
    id: 3,
    category: 'Guide',
    url: 'https://www.deskbird.com/blog/e-waste',
  },
  {
    id: 4,
    category: 'Recycling',
    url: 'https://earth.org/what-is-e-waste-recycling/',
  },
  {
    id: 5,
    category: 'Awareness',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11325305/',
  },
  {
    id: 6,
    category: 'Health',
    url: 'https://microjournal.researchfloor.org/impact-of-e-waste-on-human-health-and-environment/',
  },
];

const ArticleCard = ({ article, index }: { article: ArticleSource; index: number }) => {
  const query = useQuery({
    queryKey: ['link-preview', article.url],
    queryFn: () => getLinkPreview(article.url),
    staleTime: 7 * 24 * 60 * 60 * 1000,
    gcTime: 7 * 24 * 60 * 60 * 1000,
    retry: 1,
  });

  const preview = query.data ?? getFallbackLinkPreview(article.url);
  const isReady = !!query.data || query.isError;

  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300 cursor-pointer block"
    >
      {/* Image */}
      <div className="relative h-32 bg-muted overflow-hidden"> {/*change*/}
        {!isReady ? (
          <Skeleton className="h-full w-full" />
        ) : preview.image ? (
          <img
            src={preview.image}
            alt={preview.title || preview.siteName || 'Article preview'}
            className="h-full w-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-primary/20 via-muted to-background" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      <div className="p-4"> {/*change*/}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
            {article.category}
          </span>
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>

        <h2 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2"> {/*change*/}
          {!isReady ? <Skeleton className="h-6 w-11/12" /> : preview.title}
        </h2>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {!isReady ? (
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-10/12" />
              <Skeleton className="h-4 w-8/12" />
            </div>
          ) : query.isError ? (
            'Preview unavailable. Click to open the article.'
          ) : (
            preview.description || 'Click to open the article.'
          )}
        </p>

        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground pt-4 border-t border-border">
          <div className="flex items-center gap-1">
            <Globe className="h-3 w-3" />
            {preview.siteName || new URL(article.url).hostname.replace(/^www\./, '')}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

const Articles = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary py-14 pt-12"> {/*change*/}
        <div className="container-custom">
          <Link to="/">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className= "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4"> {/*change*/}
              E-Waste Awareness Articles
            </h1>
            <p className="text-primary-foreground/80 text-base max-w-xl"> {/*change*/}
              Learn about the importance of proper e-waste management and how you can contribute to a cleaner, greener future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> {/*change */}
            {articles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Articles;