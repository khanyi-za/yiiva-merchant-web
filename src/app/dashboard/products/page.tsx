"use client";

import Link from "next/link";
import { useState } from "react";

// Mock fashion products data
const mockProducts = [
  {
    id: "prod-001",
    name: "Bohemian Summer Maxi Dress",
    category: "Women's Clothing",
    price: 450,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue Floral", "White", "Pink"],
    status: "active",
    inventory: "made-to-order",
    instagramPost: "https://instagram.com/p/example1",
    image: "👗",
    condition: null,
    tags: ["bohemian", "summer", "maxi", "floral"]
  },
  {
    id: "prod-002", 
    name: "Vintage Leather Motorcycle Jacket",
    category: "Outerwear",
    price: 890,
    sizes: ["M", "L"],
    colors: ["Black", "Brown"],
    status: "active",
    inventory: "limited-stock",
    stock: 3,
    instagramPost: "https://instagram.com/p/example2",
    image: "🧥",
    condition: "Excellent",
    tags: ["vintage", "leather", "motorcycle", "jacket"]
  },
  {
    id: "prod-003",
    name: "Handmade Beaded African Necklace",
    category: "Jewelry",
    price: 180,
    sizes: ["One Size"],
    colors: ["Multi-color", "Earth Tones"],
    status: "active",
    inventory: "limited-stock",
    stock: 5,
    instagramPost: "https://instagram.com/p/example3",
    image: "📿",
    condition: null,
    tags: ["handmade", "african", "beaded", "traditional"]
  },
  {
    id: "prod-004",
    name: "90s Vintage Denim Jeans",
    category: "Women's Clothing", 
    price: 320,
    sizes: ["28", "30", "32"],
    colors: ["Light Blue", "Dark Blue"],
    status: "draft",
    inventory: "unique-pieces",
    stock: 1,
    instagramPost: null,
    image: "👖",
    condition: "Very Good",
    tags: ["vintage", "90s", "denim", "high-waisted"]
  }
];

const categories = [
  "All Categories",
  "Women's Clothing",
  "Men's Clothing", 
  "Outerwear",
  "Jewelry",
  "Accessories",
  "Shoes",
  "Vintage"
];

const inventoryTypes = {
  "made-to-order": { label: "Made to Order", color: "blue" },
  "limited-stock": { label: "Limited Stock", color: "yellow" },
  "unique-pieces": { label: "Unique Pieces", color: "purple" }
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredProducts = mockProducts
    .filter(product => {
      const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case "price":
          return a.price - b.price;
        case "name":
          return a.name.localeCompare(b.name);
        case "status":
          return a.status.localeCompare(b.status);
        default:
          return 0;
      }
    });

  const getStatusColor = (status: string) => {
    switch(status) {
      case "active": return "bg-green-100 text-green-800";
      case "draft": return "bg-gray-100 text-gray-800";
      case "inactive": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getInventoryColor = (type: string) => {
    const config = inventoryTypes[type as keyof typeof inventoryTypes];
    switch(config?.color) {
      case "blue": return "bg-blue-100 text-blue-800";
      case "yellow": return "bg-yellow-100 text-yellow-800"; 
      case "purple": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600">Manage your fashion catalog</p>
        </div>
        <div className="flex space-x-3">
          <Link
            href="/dashboard/instagram"
            className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 font-medium"
          >
            📸 Import from Instagram
          </Link>
          <Link
            href="/dashboard/products/new"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            + Add Product
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search products, tags, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="status">Sort by Status</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Products</p>
              <p className="text-2xl font-bold text-gray-900">{mockProducts.length}</p>
            </div>
            <div className="text-2xl">👕</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Products</p>
              <p className="text-2xl font-bold text-green-600">
                {mockProducts.filter(p => p.status === 'active').length}
              </p>
            </div>
            <div className="text-2xl">✅</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Draft Products</p>
              <p className="text-2xl font-bold text-yellow-600">
                {mockProducts.filter(p => p.status === 'draft').length}
              </p>
            </div>
            <div className="text-2xl">📝</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">From Instagram</p>
              <p className="text-2xl font-bold text-purple-600">
                {mockProducts.filter(p => p.instagramPost).length}
              </p>
            </div>
            <div className="text-2xl">📸</div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Inventory
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-3xl mr-3">{product.image}</div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {product.sizes.join(", ")} • {product.colors.length} colors
                          {product.condition && (
                            <span className="ml-2 px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                              {product.condition}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    R{product.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getInventoryColor(product.inventory)}`}>
                      {inventoryTypes[product.inventory as keyof typeof inventoryTypes]?.label}
                    </span>
                    {product.stock && (
                      <div className="text-xs text-gray-500 mt-1">
                        {product.stock} in stock
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.instagramPost ? (
                      <span className="flex items-center text-purple-600">
                        📸 Instagram
                      </span>
                    ) : (
                      <span className="text-gray-500">Manual</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <Link
                      href={`/dashboard/products/${product.id}`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Edit
                    </Link>
                    <button className="text-gray-400 hover:text-gray-600 ml-2">
                      ⋯
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">👕</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500 mb-6">
            {searchTerm || selectedCategory !== "All Categories"
              ? "Try adjusting your search or filters"
              : "Get started by adding your first product or importing from Instagram"}
          </p>
          <div className="space-x-3">
            <Link
              href="/dashboard/products/new"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Product
            </Link>
            <Link
              href="/dashboard/instagram"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Import from Instagram
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}