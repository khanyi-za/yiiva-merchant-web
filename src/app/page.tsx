import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Yiiva
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
            Transform Your Instagram Into a 
            <span className="font-semibold text-blue-600"> South African Fashion Marketplace</span>
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AI-powered platform for fashion boutiques, brands, resellers, and thrift stores. 
            Import your Instagram posts, create your catalog, and start selling in under 5 minutes.
          </p>
        </div>

        <div className="mb-12">
          <Link
            href="/onboarding"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started - It's Free
            <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-semibold text-gray-900 mb-2">Fashion Boutiques</h3>
            <p className="text-gray-600 text-sm">Curated collections with seasonal inventory management</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl mb-3">🏷️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Fashion Brands</h3>
            <p className="text-gray-600 text-sm">Build your brand story with product line management</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-semibold text-gray-900 mb-2">Clothing Resellers</h3>
            <p className="text-gray-600 text-sm">Individual pieces with authentication and condition notes</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl mb-3">🕰️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Thrift Stores</h3>
            <p className="text-gray-600 text-sm">Vintage treasures with era categorization</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            🇿🇦 Made for South African fashion creators
          </p>
        </div>
      </div>
    </div>
  );
}
