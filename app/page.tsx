import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <header className="relative bg-neutral-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Discover Our Trending Products</h1>
        <p className="mt-4 text-lg">Handpicked styles, curated for you.</p>
      </header>
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
