import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CategoriesPage() {
  const categories = [
    { name: "Clothing", count: 2, icon: "👕" },
    { name: "Accessories", count: 2, icon: "👜" },
    { name: "Footwear", count: 1, icon: "👟" },
    { name: "Home Decor", count: 2, icon: "🏠" },
    { name: "Furniture", count: 1, icon: "🪑" },
    { name: "Electronics", count: 2, icon: "📱" },
    { name: "Food & Beverage", count: 1, icon: "☕" },
    { name: "Sports", count: 1, icon: "🏃" },
  ]

  return (
    <Layout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Browse our products by category to find exactly what you're looking for.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
            <p className="text-gray-600 mb-4">{category.count} products</p>
            <Link href="/products" passHref>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Browse {category.name}</Button>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
        <Link href="/products" passHref>
          <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
            View All Products
          </Button>
        </Link>
      </div>
    </Layout>
  )
}
