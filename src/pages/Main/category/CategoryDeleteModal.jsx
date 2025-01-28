import { FaTrash } from "react-icons/fa";

export default function CategoryDeleteModal() {
  return (
    <div className="w-96 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 text-center">
      <FaTrash className="text-purple-800 text-4xl mx-auto mb-4" />
      <p className="text-gray-700 font-medium mb-6">
        Do you want to delete this category?
      </p>
      <div className="flex justify-center gap-4">
        <button className="px-6 py-2 border-2 border-purple-800 text-purple-800 rounded-full font-semibold hover:bg-purple-100 transition">
          Yes
        </button>
        <button className="px-6 py-2 bg-purple-800 text-white rounded-full font-semibold hover:bg-purple-900 transition">
          No
        </button>
      </div>
    </div>
  );
}
