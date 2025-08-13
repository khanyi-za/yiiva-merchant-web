"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: "📊",
    description: "Sales metrics and quick stats"
  },
  {
    name: "Products",
    href: "/dashboard/products",
    icon: "👕",
    description: "Manage your fashion catalog"
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
    icon: "📦",
    description: "Process and fulfill orders"
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: "👥",
    description: "Customer management"
  },
  {
    name: "Instagram",
    href: "/dashboard/instagram",
    icon: "📸",
    description: "Sync and import posts"
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: "📈",
    description: "Performance insights"
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: "⚙️",
    description: "Business and account settings"
  }
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Yiiva
                </span>
                <span className="text-sm text-gray-500">Merchant</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                🔔
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  M
                </div>
                <span className="text-sm text-gray-700">My Business</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-sm min-h-screen border-r border-gray-200">
          <div className="px-3 py-6">
            <ul className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== "/dashboard" && pathname.startsWith(item.href));
                
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-lg mr-3">{item.icon}</span>
                      <div className="flex-1">
                        <div>{item.name}</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-600">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="px-3 py-6 border-t border-gray-200">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center">
                <span className="mr-2">➕</span>
                Add Product
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center">
                <span className="mr-2">📸</span>
                Import from Instagram
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center">
                <span className="mr-2">💬</span>
                Customer Support
              </button>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}