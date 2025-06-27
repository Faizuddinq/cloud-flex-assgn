import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <Layout>
      <div className="text-center py-16">
        <div className="text-9xl font-bold text-orange-500 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the
          wrong URL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" passHref>
            <Button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-6 py-3">Browse Products</Button>
          </Link>
          <Link href="/" passHref>
            <Button variant="outline" className="border-orange-300 cursor-pointer text-orange-600 hover:bg-orange-50 px-6 py-3">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
