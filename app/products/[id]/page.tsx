import Layout from "@/components/Layout"
import Image from "next/image"
import { products } from "@/data/products"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            {!product.inStock && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-md font-semibold">
                Out of Stock
              </div>
            )}
            {product.originalPrice && (
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-2 rounded-md font-semibold">
                Sale
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Brand */}
              <p className="text-orange-600 font-medium mb-2">{product.brand}</p>

              {/* Product Name */}
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? "★" : "☆"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-600 ml-2">({product.rating} out of 5)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-md text-sm font-semibold">
                    Save{" "}
                    {Math.round(
                      ((Number.parseFloat(product.originalPrice.replace("$", "")) -
                        Number.parseFloat(product.price.replace("$", ""))) /
                        Number.parseFloat(product.originalPrice.replace("$", ""))) *
                        100,
                    )}
                    %
                  </span>
                )}
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <span className="text-gray-600">Category: </span>
                <span className="font-semibold text-gray-800">{product.category}</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className={`flex-1 cursor-pointer px-6 py-3 rounded-md text-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 ${
                  product.inStock
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!product.inStock}
              >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              <Button
                variant="outline"
                className="flex-1 cursor-pointer border-orange-300 text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-6 py-3 rounded-md text-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                disabled={!product.inStock}
              >
                {product.inStock ? "Buy Now" : "Notify When Available"}
              </Button>
            </div>

            <Link href="/products" passHref>
              <Button
                variant="ghost"
                className="mt-4 cursor-pointer w-full text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md"
              >
                ← Back to Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
