import { Button } from "antd";
import {
  HiOutlineLibrary,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import defaultCardImage from "../../../assets/images/salon-card-image.png";
import { getImageUrl } from "../../../utils/getImageUrl";

export default function SalonSummaryCard({ data, showModal }) {
  const thumbnailImage = getImageUrl(data?.image, defaultCardImage);
  return (
    <div className=" bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="p-4">
        <img
          className="w-full h-48 object-center rounded-lg"
          src={thumbnailImage || defaultCardImage}
          onError={(e) => (e.target.src = defaultCardImage)}
          alt="Salon"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center text-lg font-semibold text-gray-800 mb-2 leading-5">
          <HiOutlineLibrary className="text-primary mr-2" /> {data?.name}
        </div>
        <div className="flex items-center text-gray-600 mb-1">
          <HiOutlinePhone className="text-primary mr-2" /> {data?.phone}
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <HiOutlineLocationMarker className="text-primary mr-2" />{" "}
          {data?.address}
        </div>
      </div>

      {/* button */}
      <div className="flex justify-center p-4">
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          className="px-14 py-2 bg-primary"
          onClick={() => showModal(data)}
        >
          Details
        </Button>
      </div>
    </div>
  );
}
