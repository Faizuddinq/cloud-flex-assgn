import Layout from "@/components/Layout"
import ProductGrid from "@/components/ProductGrid"
import { products } from "@/data/products"

export default function DealsPage() {
  // Filter products that have original price (on sale)
  const dealsProducts = products.filter((product) => product.originalPrice)

  return (
    <Layout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🔥 Special Deals</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Don't miss out on these amazing deals! Limited time offers on selected products.
        </p>
      </div>

      {dealsProducts.length > 0 ? (
        <>
          <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 mb-8 text-center">
            <p className="text-orange-800 font-semibold">
              🎉 Save up to 30% on selected items! Hurry, these deals won't last long!
            </p>
          </div>
          <ProductGrid products={dealsProducts} />
        </>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛍️</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">No deals available right now</h2>
          <p className="text-gray-600 mb-6">Check back soon for amazing offers!</p>
        </div>
      )}
    </Layout>
  )
}
