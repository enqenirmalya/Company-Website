# e-Neermalya Website - Developer Documentation

A modern, responsive website for e-Neermalya built with React, TypeScript, and Tailwind CSS.

---

## 📁 Project Structure Overview

```
src/
├── assets/                    # All images and media files
│   ├── clients/              # Client logos
│   │   ├── apna-bank.png
│   │   ├── bmc.png
│   │   ├── efficient-plastech.png
│   │   ├── nic.jpg
│   │   └── rsm.jpeg
│   ├── team/                 # Team member photos
│   │   ├── rajesh-dolas.png
│   │   ├── ritu-kolte.png
│   │   └── samir-kolte.png
│   ├── hero-bg.jpg           # Hero section background
│   ├── logo.png              # Company logo
│   ├── make-in-india.png     # Make in India badge
│   └── one-earth.jpg         # One Earth image
│
├── components/               # All website sections & UI components
│   ├── ui/                   # Reusable UI components (buttons, forms, etc.)
│   ├── Navbar.tsx            # ⭐ Top navigation bar
│   ├── Hero.tsx              # ⭐ Hero/Banner section (first thing visitors see)
│   ├── Services.tsx          # ⭐ Services cards section
│   ├── About.tsx             # ⭐ About us section
│   ├── Process.tsx           # ⭐ How it works / Process steps
│   ├── Team.tsx              # ⭐ Team members section
│   ├── Clients.tsx           # ⭐ Our Clients logos marquee
│   ├── News.tsx              # ⭐ News/Updates section
│   ├── FAQ.tsx               # ⭐ Frequently Asked Questions
│   ├── Contact.tsx           # ⭐ Contact form section
│   └── Footer.tsx            # ⭐ Footer with links & info
│
├── pages/
│   ├── Index.tsx             # 🏠 HOMEPAGE - Controls which sections appear
│   └── NotFound.tsx          # 404 error page
│
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions
├── index.css                 # 🎨 Global styles & theme colors
├── App.tsx                   # Main app router
└── main.tsx                  # App entry point
```

---

## 🏠 Homepage Structure

The homepage (`src/pages/Index.tsx`) controls which sections appear and in what order:

```tsx
<Navbar />      ← Navigation bar at top
<Hero />        ← Hero banner section
<Services />    ← Service cards
<About />       ← About us section
<Process />     ← Process/How it works
<Team />        ← Team members
<Clients />     ← Client logos
<News />        ← News articles
<FAQ />         ← FAQ accordion
<Contact />     ← Contact form
<Footer />      ← Footer
```

**To reorder sections:** Simply change the order of components in `src/pages/Index.tsx`

**To hide a section:** Comment out or delete the component line (e.g., `{/* <News /> */}`)

---

## 📝 Common Edits Guide

### 1. Adding a New Client Logo

**File to edit:** `src/components/Clients.tsx`

**Step 1:** Add the logo image to `src/assets/clients/` folder

**Step 2:** Import the image at the top of the file:
```tsx
import newClientLogo from '@/assets/clients/new-client.png';
```

**Step 3:** Add to the `clients` array (around line 10-16):
```tsx
const clients = [
  { name: 'RSM International', logo: rsmLogo },
  { name: 'BMC Mumbai', logo: bmcLogo },
  // ... existing clients
  { name: 'New Client Name', logo: newClientLogo },  // ← Add here
];
```

---

### 2. Adding a New Service

**File to edit:** `src/components/Services.tsx`

**Find the `services` array (around line 7-44) and add:**
```tsx
{
  icon: YourIcon,  // Import from lucide-react
  title: 'New Service Title',
  description: 'Description of the service...',
  color: 'from-blue-500 to-cyan-500',  // Gradient colors
},
```

**Available icons:** Import from `lucide-react` - see https://lucide.dev/icons

---

### 3. Adding a New Team Member

**File to edit:** `src/components/Team.tsx`

**Step 1:** Add photo to `src/assets/team/` folder

**Step 2:** Import and add to array:
```tsx
import newMember from '@/assets/team/new-member.png';

const teamMembers = [
  // ... existing members
  {
    name: 'New Person Name',
    role: 'Job Title',
    image: newMember,
    bio: 'Brief biography...',
  },
];
```

---

### 4. Adding a New FAQ

**File to edit:** `src/components/FAQ.tsx`

**Find the `faqs` array and add:**
```tsx
{
  question: 'Your new question here?',
  answer: 'The answer to the question...',
},
```

---

### 5. Adding a News Article

**File to edit:** `src/components/News.tsx`

**Find the `newsItems` array and add:**
```tsx
{
  date: 'January 15, 2026',
  title: 'Your News Title',
  excerpt: 'Brief summary of the news article...',
},
```

---

### 6. Changing Contact Information

**Files to edit:**
- `src/components/Contact.tsx` - Contact form section
- `src/components/Footer.tsx` - Footer contact details

**Look for:** Email addresses, phone numbers, and address text

---

### 7. Changing Navigation Links

**File to edit:** `src/components/Navbar.tsx`

**Find the `navLinks` array (around line 7-14):**
```tsx
const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About Us' },
  // Add or modify links here
];
```

---

### 8. Changing Colors & Theme

**File to edit:** `src/index.css`

**Look for:** CSS variables under `:root` - these control the color scheme:
```css
--primary: 142 76% 36%;      /* Main green color */
--secondary: 142 70% 20%;    /* Darker green */
--accent: 142 65% 95%;       /* Light accent */
```

---

### 9. Changing the Logo

**Step 1:** Replace `src/assets/logo.png` with your new logo

**Step 2:** The logo is used in:
- `src/components/Navbar.tsx` (header)
- `src/components/Footer.tsx` (footer)

---

### 10. Changing Hero Section Text

**File to edit:** `src/components/Hero.tsx`

**Look for:**
- Main heading text
- Subheading/description text
- Button labels

---

## 🚀 How to Run the Project

### Prerequisites
- Node.js (version 18 or higher)
- npm or bun package manager

### Steps

```bash
# 1. Clone the repository
git clone <your-git-url>

# 2. Navigate to project folder
cd <project-folder>

# 3. Install dependencies
npm install
# or
bun install

# 4. Start development server
npm run dev
# or
bun dev

# 5. Open in browser
# Visit: http://localhost:5173
```

---

## 📋 Quick Reference Table

| What to Change | File Location |
|----------------|---------------|
| Homepage layout | `src/pages/Index.tsx` |
| Navigation bar | `src/components/Navbar.tsx` |
| Hero banner | `src/components/Hero.tsx` |
| Services | `src/components/Services.tsx` |
| About section | `src/components/About.tsx` |
| Process steps | `src/components/Process.tsx` |
| Team members | `src/components/Team.tsx` |
| Client logos | `src/components/Clients.tsx` |
| News articles | `src/components/News.tsx` |
| FAQ questions | `src/components/FAQ.tsx` |
| Contact form | `src/components/Contact.tsx` |
| Footer | `src/components/Footer.tsx` |
| Theme colors | `src/index.css` |
| Company logo | `src/assets/logo.png` |
| Client logos | `src/assets/clients/` folder |
| Team photos | `src/assets/team/` folder |

---

## 🛠️ Technologies Used

- **React** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **shadcn/ui** - UI component library

---

## 💡 Tips

1. **Always save your files** after making changes
2. **The dev server auto-reloads** - you'll see changes immediately
3. **Use VS Code** for the best editing experience
4. **Keep image file sizes small** for better loading speed
5. **Test on mobile** after making changes

---

## 🆘 Need Help?

If you break something, you can always:
1. Press `Ctrl+Z` to undo changes
2. Use Git to revert to a previous version
3. Check the browser console (F12) for errors

---

*Last updated: January 2026*
