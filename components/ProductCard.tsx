import Image from "next/image"
import Link from "next/link"

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

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out border hover:border-orange-300 hover:shadow-lg hover:scale-105 focus-within:ring-2 focus-within:ring-orange-300 focus-within:ring-offset-2">
      {/* Product Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            Out of Stock
          </div>
        )}
        {product.originalPrice && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            Sale
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Product Tags */}
        <div className="flex flex-wrap gap-1 mb-2">
          {product.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? "★" : "☆"}>
                {i < Math.floor(product.rating) ? "★" : "☆"}
              </span>
            ))}
          </div>
          <span className="text-gray-600 text-sm ml-1">({product.rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-gray-900">{product.price}</span>
          {product.originalPrice && <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>}
        </div>

        {/* View Details Button */}
        <Link href={`/products/${product.id}`} passHref>
          <button
            className={`w-full  py-2 px-4 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 ${
              product.inStock
                ? "bg-orange-500 cursor-pointer text-white hover:bg-orange-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!product.inStock}
          >
            {product.inStock ? "View Details" : "Out of Stock"}
          </button>
        </Link>
      </div>
    </div>
  )
}
