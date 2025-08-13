"use client";

import Link from "next/link";

// Mock data - in real app this would come from API
const mockStats = {
  totalSales: 15420,
  totalOrders: 127,
  totalProducts: 89,
  conversionRate: 3.2,
  recentOrders: [
    {
      id: "ORD-2024-001",
      customer: "Sarah Johnson",
      product: "Vintage Denim Jacket",
      amount: 450,
      status: "confirmed",
      date: "2024-01-15"
    },
    {
      id: "ORD-2024-002",
      customer: "Michael Chen",
      product: "Summer Dress Collection",
      amount: 680,
      status: "processing",
      date: "2024-01-15"
    },
    {
      id: "ORD-2024-003",
      customer: "Thandiwe Mthembu",
      product: "Handmade Earrings",
      amount: 120,
      status: "shipped",
      date: "2024-01-14"
    }
  ],
  topProducts: [
    {
      name: "Bohemian Summer Dresses",
      sales: 23,
      revenue: 6900,
      image: "👗"
    },
    {
      name: "Vintage Leather Jackets",
      sales: 12,
      revenue: 5400,
      image: "🧥"
    },
    {
      name: "Handmade Jewelry Set",
      sales: 34,
      revenue: 4080,
      image: "💍"
    }
  ]
};

const StatCard = ({ title, value, subtitle, trend, icon }: {
  title: string;
  value: string | number;
  subtitle: string;
  trend?: string;
  icon: string;
}) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="text-3xl">{icon}</div>
    </div>
    {trend && (
      <div className="mt-4">
        <span className="text-green-600 text-sm font-medium">{trend}</span>
      </div>
    )}
  </div>
);

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
        <p className="text-blue-100 mb-4">
          Here's what's happening with your fashion business today
        </p>
        <div className="flex space-x-4">
          <Link
            href="/dashboard/products/new"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Add New Product
          </Link>
          <Link
            href="/dashboard/instagram"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors border border-blue-400"
          >
            Import from Instagram
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Sales"
          value={`R${mockStats.totalSales.toLocaleString()}`}
          subtitle="This month"
          trend="+12% from last month"
          icon="💰"
        />
        <StatCard
          title="Orders"
          value={mockStats.totalOrders}
          subtitle="Total orders"
          trend="+8% from last month"
          icon="📦"
        />
        <StatCard
          title="Products"
          value={mockStats.totalProducts}
          subtitle="In catalog"
          icon="👕"
        />
        <StatCard
          title="Conversion Rate"
          value={`${mockStats.conversionRate}%`}
          subtitle="Visitors to customers"
          trend="+0.3% from last month"
          icon="📈"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {mockStats.recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          👤
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{order.customer}</p>
                          <p className="text-sm text-gray-500">{order.product}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">R{order.amount}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/dashboard/orders"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  View all orders →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {mockStats.topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center space-x-3">
                    <div className="text-2xl">{product.image}</div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                      <p className="text-xs text-gray-500">
                        {product.sales} sales • R{product.revenue.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      #{index + 1}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/dashboard/analytics"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  View analytics →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/dashboard/instagram"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
          >
            <div className="text-2xl mb-2">📸</div>
            <h3 className="font-medium text-gray-900">Import Instagram Posts</h3>
            <p className="text-sm text-gray-500">Turn your posts into products</p>
          </Link>
          <Link
            href="/dashboard/products/new"
            className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors text-center"
          >
            <div className="text-2xl mb-2">➕</div>
            <h3 className="font-medium text-gray-900">Add New Product</h3>
            <p className="text-sm text-gray-500">Manually add a fashion item</p>
          </Link>
          <Link
            href="/dashboard/analytics"
            className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors text-center"
          >
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-medium text-gray-900">View Analytics</h3>
            <p className="text-sm text-gray-500">Track your performance</p>
          </Link>
        </div>
      </div>

      {/* Tips for Fashion Merchants */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">💡 Tips for South African Fashion Merchants</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <span className="text-blue-600 mt-1">✓</span>
            <div>
              <p className="font-medium text-gray-900">Use local sizing</p>
              <p className="text-sm text-gray-600">Include SA size charts and measurements</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-blue-600 mt-1">✓</span>
            <div>
              <p className="font-medium text-gray-900">Highlight local materials</p>
              <p className="text-sm text-gray-600">Showcase South African fabrics and craftsmanship</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-blue-600 mt-1">✓</span>
            <div>
              <p className="font-medium text-gray-900">Seasonal collections</p>
              <p className="text-sm text-gray-600">Plan for SA seasons (summer Dec-Feb)</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-blue-600 mt-1">✓</span>
            <div>
              <p className="font-medium text-gray-900">Shipping times</p>
              <p className="text-sm text-gray-600">Set realistic delivery times for major cities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}