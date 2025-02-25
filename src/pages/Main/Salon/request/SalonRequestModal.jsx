import pdfIcon from "../../../../assets/images/pdf-icon.png";
import { getImageUrl } from "../../../../utils/getImageUrl";

const defaultImage =
  "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg";

export default function SalonRequestModal({ data }) {
  const hostImage = getImageUrl(data?.image, defaultImage);
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden">
      <div className="flex gap-6 items-center border-b border-b-[#999999] pb-2">
        <div>
          <h2 className="text-xl font-semibold text-primary">{data?.name}</h2>
          <p className="text-[#999999]">see all details about {data?.name}</p>
        </div>
      </div>
      <div className="mt-2 pb-2 flex items-center border-b border-b-[#999999]">
        <img
          className="w-12 h-12 rounded-xl object-cover"
          src={hostImage}
          onError={(e) => (e.target.src = defaultImage)}
          alt="Profile"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-[#191919]">{data?.name}</h3>
        </div>
      </div>
      <div className="mt-2 border-b border-b-[#999999] pb-2">
        <h4 className="text-2xl mb-2 font-semibold text-[#191919]">
          Saloon Details
        </h4>
        <p className="text-[#191919]">Saloon Name: {data?.name}</p>
        <p className="text-[#191919]">
          Email: {data?.host?.email || "Not Available"}
        </p>
        <p className="text-[#191919]">Contact: {data?.phone}</p>
        <p className="text-[#191919]">Address: {data?.address}</p>
      </div>
      <div className="mt-4 flex flex-col">
        <h4 className="text-2xl mb-2 font-semibold text-[#191919]">
          Saloon Documents
        </h4>
        <p className="text-[#191919] mb-4">
          Saloon Id: {data?.passportNum || "Not available"}
        </p>
        <img
          className="w-12 h-12 rounded-[4px] object-cover"
          src={pdfIcon}
          alt="pdf Documents icon"
        />
        <div className="mt-4 flex gap-6">
          <button className="rounded-full border border-primary text-primary px-8 py-2">
            Reject
          </button>
          <button className="rounded-full border border-primary text-white bg-primary hover:bg-[#4d2525] px-8 py-2">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
