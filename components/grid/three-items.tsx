import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function ThreeItemHero({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'large' | 'medium' | 'small';
  priority?: boolean;
}) {
  const sizeClass =
    size === 'large'
      ? 'col-span-2 row-span-2'
      : size === 'medium'
        ? 'col-span-1 row-span-2'
        : 'col-span-1 row-span-1';

  return (
    <div className={`relative ${sizeClass} overflow-hidden rounded-lg`}>
      <Link
        className="relative block h-full w-full transition-transform duration-300 hover:scale-105"
        href={`/product/${item.handle}`}
        prefetch={true}
      >
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          priority={priority}
          alt={item.title}
          label={{
            position: 'center',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  const homepageItems = await getCollectionProducts({
    collection: 'trending'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto grid max-w-screen-2xl grid-cols-3 grid-rows-2 gap-4 px-4 lg:h-[80vh]">
      <ThreeItemHero size="large" item={firstProduct} priority={true} />
      <ThreeItemHero size="medium" item={secondProduct} />
      <ThreeItemHero size="small" item={thirdProduct} />
    </section>
  );
}
