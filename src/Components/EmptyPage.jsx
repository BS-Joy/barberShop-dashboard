import React from "react";
import { FiBell, FiPackage, FiShoppingBag } from "react-icons/fi";

export default function EmptyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Empty State */}
        <div className="bg-card rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
              <FiPackage className="w-12 h-12 text-accent" />
            </div>
          </div>
          <h2 className="text-xl font-heading mb-4">
            No Products Available Yet
          </h2>
          {/* <p className="text-accent mb-8 max-w-md mx-auto">
            We"re currently preparing our product catalog. Check back soon for
            exciting new items!
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsNotifyModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              <FiBell />
              <span>Notify Me</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-input rounded hover:bg-secondary transition-colors">
              <FiShoppingBag />
              <span>View Categories</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
