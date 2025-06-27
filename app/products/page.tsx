import ProductGrid from "@/components/ProductGrid"
import Layout from "@/components/Layout"
import { products } from "@/data/products"

export default function ProductsPage() {
  return (
    <Layout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our curated collection of premium products, carefully selected for quality and style.
        </p>
      </div>
      <ProductGrid products={products} />
    </Layout>
  )
}
