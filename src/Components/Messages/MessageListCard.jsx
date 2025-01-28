import React from "react";

export default function MessageListCard({ first }) {
  return (
    <div
      className={`w-full mx-auto bg-white rounded-lg border border-[#8B707D] p-4 mb-2 ${
        first && "bg-[#D8CFD4] border-[#D8CFD4]"
      }`}
    >
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-full"
          src="https://images.pexels.com/photos/331989/pexels-photo-331989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Profile"
        />
        <div>
          <h2 className="text-lg font-medium text-gray-900">Ann Marie</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet cons....</p>
        </div>
      </div>
    </div>
  );
}
