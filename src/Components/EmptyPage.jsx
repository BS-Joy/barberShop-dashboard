import React from "react";
import { FiPackage } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function EmptyPage({
  emptyText,
  navigateTo = "Home",
  navigationPath = "/",
}) {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Empty State */}
      <div className="bg-card rounded-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
            <FiPackage className="w-12 h-12 text-accent" />
          </div>
        </div>
        <h2 className="text-xl font-heading mb-4">
          {emptyText || "Nothing to show here"}!
        </h2>
        {/* <p className="text-accent mb-8 max-w-md mx-auto">
            We"re currently preparing our product catalog. Check back soon for
            exciting new items!
          </p> */}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate(navigationPath)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            {/* <IoHomeOutline /> */}
            <span>To {navigateTo}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
