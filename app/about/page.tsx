import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Cloud Flex Store</h1>
          <p className="text-xl text-gray-600">
            Your trusted destination for premium products and exceptional shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Cloud Flex Store, we're committed to providing high-quality products that enhance your lifestyle. We carefully
              curate our collection to ensure every item meets our standards of excellence, durability, and style.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">✓</span>
                Premium quality products
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">✓</span>
                Fast and reliable shipping
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">✓</span>
                Excellent customer service
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">✓</span>
                Secure payment processing
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Start Shopping?</h2>
          <p className="text-gray-600 mb-6">
            Explore our curated collection of premium products and find your next favorite item.
          </p>
          <Link href="/products" passHref>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">Shop Now</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
