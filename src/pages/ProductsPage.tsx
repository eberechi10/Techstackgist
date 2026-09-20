import React, { useState } from 'react';
import { PRODUCTS } from '../data/mockData';
import { Box, CheckCircle2, ArrowUpRight, Sparkles, Download, ExternalLink } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const categories = ['All', 'SaaS Products', 'Digital Tools', 'Templates', 'Educational Resources', 'Business Tools'];

  const filteredProducts = PRODUCTS.filter(p => 
    activeFilter === 'All' ? true : p.category === activeFilter
  );

  return (
    <div id="products-page-container" className="pt-28 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
            <Box className="w-3.5 h-3.5" />
            Software Suites & Accelerators
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Technology products built for real people and businesses.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            From talent screening platforms and payment-ready devkits to benchmark salary reports and educational sandboxes, our tools accelerate African technology ecosystems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    {prod.category}
                  </span>
                  {prod.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                      {prod.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {prod.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {prod.description}
                </p>

                <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Key Features:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {prod.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-slate-500">{prod.stats}</span>
                  <span className="font-bold text-slate-900">{prod.pricing}</span>
                </div>
                <button
                  onClick={() => alert(`Product access for ${prod.title} is available through Techstackgist platform.`)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Access Product</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
