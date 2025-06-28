"use client"
import { useState } from "react"
import Layout from "@/components/Layout"
import ProductGrid from "@/components/ProductGrid"
import { products } from "@/data/products"

export default function ProductsPage() {
  const [search, setSearch] = useState("")
  const [data, setData] = useState(products)
  const [isCooldown, setIsCooldown] = useState(false)
  const [sortOption, setSortOption] = useState("") // NEW: sort state

//   useEffect(() => {
//   if (search.trim() !== "") {
//     handleSearch()
//   }
// }, [sortOption])

  const handleSearch = () => {
  if (isCooldown) return

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  // Fix: Convert price strings to numbers for sorting
  if (sortOption === "price-asc") {
    filtered.sort((a, b) => parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", "")))
  } else if (sortOption === "price-desc") {
    filtered.sort((a, b) => parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", "")))
  } else if (sortOption === "rating-asc") {
    filtered.sort((a, b) => a.rating - b.rating)
  } else if (sortOption === "rating-desc") {
    filtered.sort((a, b) => b.rating - a.rating)
  }

  setData(filtered)

  setIsCooldown(true)
  setTimeout(() => setIsCooldown(false), 2000)
}


  return (
    <Layout>
      <div className="text-center mb-8">
        <div className="flex flex-col md:flex-row justify-center gap-2 mb-4 items-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search here"
            className="border px-4 py-2 rounded w-full md:w-1/3"
          />

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            <option value="">Sort by</option>
            <option value="price-asc">Price (Low → High)</option>
            <option value="price-desc">Price (High → Low)</option>
            <option value="rating-asc">Rating (Low → High)</option>
            <option value="rating-desc">Rating (High → Low)</option>
          </select>

          <button
            onClick={handleSearch}
            disabled={isCooldown}
            className={`px-4 py-2 rounded transition ${
              isCooldown
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
          >
            {isCooldown ? "Wait..." : "Search"}
          </button>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our curated collection of premium products, carefully selected for quality and style.
        </p>
      </div>

      <ProductGrid products={data} />
    </Layout>
  )
}
