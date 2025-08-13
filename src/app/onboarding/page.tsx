"use client";

import { useState } from "react";

type BusinessType = "boutique" | "brand" | "reseller" | "thrift" | "";

interface OnboardingData {
  businessType: BusinessType;
  businessName: string;
  instagramHandle: string;
  location: string;
  primaryCategories: string[];
}

const businessTypes = [
  {
    id: "boutique" as const,
    title: "Fashion Boutique",
    description: "Curated collections with quality focus",
    icon: "✨",
    features: ["Seasonal collections", "Size ranges", "Quality pieces"]
  },
  {
    id: "brand" as const,
    title: "Fashion Brand",
    description: "Your own clothing line with brand identity",
    icon: "🏷️",
    features: ["Brand storytelling", "Product lines", "Size charts"]
  },
  {
    id: "reseller" as const,
    title: "Clothing Reseller",
    description: "Individual pre-owned pieces",
    icon: "🔄",
    features: ["Authentication", "Condition notes", "Quick turnover"]
  },
  {
    id: "thrift" as const,
    title: "Thrift Store",
    description: "Vintage and second-hand treasures",
    icon: "🕰️",
    features: ["Vintage categorization", "Era dating", "Volume inventory"]
  }
];

const southAfricanCities = [
  "Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth",
  "Bloemfontein", "East London", "Pietermaritzburg", "Nelspruit", "Kimberley"
];

const fashionCategories = [
  "Women's Clothing", "Men's Clothing", "Accessories", "Shoes",
  "Bags & Handbags", "Jewelry", "Vintage", "Streetwear",
  "Formal Wear", "Casual Wear", "Activewear", "Outerwear"
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    businessType: "",
    businessName: "",
    instagramHandle: "",
    location: "",
    primaryCategories: []
  });

  const handleBusinessTypeSelect = (type: BusinessType) => {
    setData({ ...data, businessType: type });
    setStep(2);
  };

  const handleCategoryToggle = (category: string) => {
    const updatedCategories = data.primaryCategories.includes(category)
      ? data.primaryCategories.filter(c => c !== category)
      : [...data.primaryCategories, category];
    
    setData({ ...data, primaryCategories: updatedCategories });
  };

  const renderStep1 = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Yiiva
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Transform your Instagram into a powerful South African fashion marketplace
        </p>
        <p className="text-lg text-gray-500">
          What type of fashion business are you?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {businessTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => handleBusinessTypeSelect(type.id)}
            className="p-8 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-200 text-left group"
          >
            <div className="text-4xl mb-4">{type.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
              {type.title}
            </h3>
            <p className="text-gray-600 mb-4">{type.description}</p>
            <ul className="text-sm text-gray-500 space-y-1">
              {type.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Tell us about your business
        </h2>
        <p className="text-gray-600">
          Basic information to set up your Yiiva merchant account
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Name
          </label>
          <input
            type="text"
            value={data.businessName}
            onChange={(e) => setData({ ...data, businessName: e.target.value })}
            placeholder="e.g., Joburg Style Studio"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Instagram Handle
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-lg">
              @
            </span>
            <input
              type="text"
              value={data.instagramHandle}
              onChange={(e) => setData({ ...data, instagramHandle: e.target.value })}
              placeholder="yourbusiness"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <p className="text-sm text-gray-500 mt-1">
            We'll import your existing posts to create your product catalog
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Location
          </label>
          <select
            value={data.location}
            onChange={(e) => setData({ ...data, location: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select your city</option>
            {southAfricanCities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-between pt-6">
          <button
            onClick={() => setStep(1)}
            className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium"
          >
            ← Back
          </button>
          <button
            onClick={() => setStep(3)}
            disabled={!data.businessName || !data.instagramHandle || !data.location}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What do you sell?
        </h2>
        <p className="text-gray-600">
          Select your main product categories (choose 3-5 for best results)
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {fashionCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryToggle(category)}
            className={`p-4 border-2 rounded-lg text-left transition-all duration-200 ${
              data.primaryCategories.includes(category)
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 hover:border-gray-300 text-gray-700"
            }`}
          >
            <span className="text-lg font-medium">{category}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-8">
        <button
          onClick={() => setStep(2)}
          className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium"
        >
          ← Back
        </button>
        <button
          onClick={() => setStep(4)}
          disabled={data.primaryCategories.length === 0}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
        >
          Continue to Instagram Import
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-8">
        <div className="text-6xl mb-4">📸</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Connect Your Instagram
        </h2>
        <p className="text-gray-600 mb-6">
          We'll analyze your existing posts and automatically create your product catalog
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          What happens next?
        </h3>
        <ul className="text-blue-700 text-left space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">1.</span>
            <span>We'll securely connect to @{data.instagramHandle}</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">2.</span>
            <span>AI will analyze your posts and detect products</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">3.</span>
            <span>We'll create your catalog with smart pricing suggestions</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">4.</span>
            <span>You'll be selling in under 5 minutes!</span>
          </li>
        </ul>
      </div>

      <button
        className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 font-semibold text-lg mb-4"
      >
        🔗 Connect Instagram Account
      </button>

      <p className="text-sm text-gray-500">
        We only read your public posts. We never post to your Instagram.
      </p>

      <div className="flex justify-between pt-8">
        <button
          onClick={() => setStep(3)}
          className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium"
        >
          ← Back
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Progress indicator */}
        <div className="max-w-md mx-auto mb-16">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  i <= step 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-300 text-gray-600"
                }`}>
                  {i}
                </div>
                {i < 4 && (
                  <div className={`w-16 h-1 ${
                    i < step ? "bg-blue-600" : "bg-gray-300"
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Business</span>
            <span>Details</span>
            <span>Products</span>
            <span>Instagram</span>
          </div>
        </div>

        {/* Step content */}
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
      </div>
    </div>
  );
}