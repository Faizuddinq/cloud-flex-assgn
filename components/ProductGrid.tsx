import ProductCard from "./ProductCard"

interface Product {
  id: string
  name: string
  price: string
  originalPrice?: string
  image: string
  tags: string[]
  rating: number
  inStock: boolean
}

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
