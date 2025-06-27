# Cloud Flex Product Listing App

A modern, responsive product listing interface built with Next.js, React, and Tailwind CSS. This application showcases a clean, user-friendly design with an off-white and orange color scheme.

## 🚀 Features

### Core Functionality
- **Responsive Product Listing**: Grid layout that adapts from 1 column on mobile to 4 columns on desktop
- **Dynamic Product Details**: Individual product pages with comprehensive information
- **Modern UI/UX**: Clean design with smooth animations and hover effects
- **Accessibility**: Focus rings, keyboard navigation, and screen reader support

### Product Display
- **Product Cards** include:
  - Product name and image (placeholder)
  - Current price with original price (if on sale)
  - Star ratings (1-5 stars)
  - Product tags as colorful badges
  - Stock status indicators
  - "View Details" button for navigation
  - Sale indicators for discounted items

### Product Details Page
- **Comprehensive Information**:
  - High-resolution product images
  - Brand information
  - Detailed descriptions
  - All product tags
  - Category classification
  - Customer ratings
  - Savings percentage calculation
  - Stock availability status

### Navigation & Pages
- **Multi-page Navigation**:
  - Products listing page
  - Categories overview page
  - Special deals page
  - About us page
  - Contact page with form
  - Custom 404 error page

### Design System
- **Color Scheme**:
  - Primary: Off-white (\`#f8f8f5\`) background
  - Secondary: Orange (\`#f97316\`) for accents and CTAs
  - Hover states: Darker orange (\`#ea580c\`)
  - Professional typography with Inter font

### Data Structure
- **Rich Product Data**:
  - 12 sample products across multiple categories
  - Product tags for categorization
  - Brand information
  - Rating system
  - Stock management
  - Sale pricing with original prices
  - Detailed descriptions

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript/JavaScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui components
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

\`\`\`
├── app/
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page (redirects to products)
│   ├── not-found.tsx            # Custom 404 page
│   ├── products/
│   │   ├── page.tsx             # Products listing page
│   │   └── [id]/
│   │       └── page.tsx         # Dynamic product detail pages
│   ├── categories/
│   │   └── page.tsx             # Categories overview page
│   ├── deals/
│   │   └── page.tsx             # Special deals page
│   ├── about/
│   │   └── page.tsx             # About us page
│   └── contact/
│       └── page.tsx             # Contact page with form
├── components/
│   ├── Layout.tsx               # Main layout wrapper
│   ├── Navbar.tsx               # Navigation component
│   ├── ProductCard.tsx          # Individual product card
│   └── ProductGrid.tsx          # Product grid container
├── data/
│   └── products.js              # Sample product data
├── tailwind.config.ts           # Tailwind configuration
└── README.md                    # Project documentation
\`\`\`

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd Cloud Flex-product-listing
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages Overview

### Products Page (\`/products\`)
- Main product listing with responsive grid
- All products displayed with key information
- Hover effects and smooth animations

### Product Detail Page (\`/products/[id]\`)
- Comprehensive product information
- Large product images
- Detailed specifications and descriptions
- Add to cart and buy now buttons

### Categories Page (\`/categories\`)
- Overview of all product categories
- Category icons and product counts
- Quick navigation to filtered products

### Deals Page (\`/deals\`)
- Special offers and discounted items
- Savings calculations and sale indicators
- Limited-time offer messaging

### About Page (\`/about\`)
- Company information and mission
- Key features and benefits
- Call-to-action for shopping

### Contact Page (\`/contact\`)
- Contact form with validation
- Business information and hours
- Multiple contact methods

## 🔧 Customization

### Adding New Products
Edit \`data/products.js\` to add new products:

\`\`\`javascript
{
  id: "unique-id",
  name: "Product Name",
  price: "$XX.XX",
  originalPrice: "$XX.XX", // Optional for sales
  image: "/placeholder.svg?height=400&width=400",
  description: "Product description",
  tags: ["tag1", "tag2"],
  category: "Category Name",
  rating: 4.5,
  inStock: true,
  brand: "Brand Name"
}
\`\`\`

### Styling Customization
- Modify \`tailwind.config.ts\` for color scheme changes
- Update \`app/globals.css\` for global style modifications
- Component-specific styles in individual component files

## 🚀 Deployment

This project can be deployed on various platforms:

### Vercel (Recommended)
\`\`\`bash
npm run build
vercel --prod
\`\`\`

### Netlify
\`\`\`bash
npm run build
# Deploy the .next folder
\`\`\`

### Other Platforms
Follow Next.js deployment guidelines for your preferred platform.

---

**Made with ❤️ using Next.js and Tailwind CSS**
