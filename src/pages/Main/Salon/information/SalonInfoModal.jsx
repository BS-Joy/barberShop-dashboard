import React from "react";
import { getImageUrl } from "../../../../utils/getImageUrl";

const defaultImage =
  "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg";

export default function SalonInfoModal({ data }) {
  const imageUrl = getImageUrl(data?.host?.image, defaultImage);
  const host = data?.host;
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden">
      <div className="flex gap-6 items-center border-b border-b-[#999999] pb-2">
        <div>
          <h2 className="text-xl font-semibold text-primary">Salon Details</h2>
          <p className="text-[#999999]">see all details about {data?.name}</p>
        </div>
      </div>
      <div className="mt-2 pb-2 flex items-center border-b border-b-[#999999]">
        <img
          className="w-12 h-12 rounded-xl object-cover"
          src={imageUrl}
          onError={(e) => (e.target.src = defaultImage)}
          alt="Profile"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-[#191919]">{data?.name}</h3>
        </div>
      </div>
      <div className="mt-2 pb-2">
        <h4 className="text-2xl mb-2 font-semibold text-[#191919]">
          Infromation
        </h4>
        <p className="text-[#191919]">Name: {host?.name}</p>
        <p className="text-[#191919]">Email: {host?.email}</p>
        <p className="text-[#191919]">Contact: {host?.phone}</p>
        <p className="text-[#191919]">Address: {host?.address}</p>
      </div>
      <div className="mt-4 flex gap-6">
        <button className="rounded-full border border-primary text-white bg-primary hover:bg-[#4d2525] px-8 py-2">
          Message
        </button>
      </div>
    </div>
  );
}
