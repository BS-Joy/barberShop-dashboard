import { Button } from "antd";
import {
  HiOutlineLibrary,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
// import cardImage from "../../ /salon-card-image.png";
import cardImage from "../../../assets/images/salon-card-image.png";

export default function SalonSummaryCard({ data, showModal }) {
  return (
    <div className=" bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="p-4">
        <img
          className="w-full h-48 object-center rounded-lg"
          src={cardImage}
          alt="Salon"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center text-lg font-semibold text-gray-800 mb-2 leading-5">
          <HiOutlineLibrary className="text-primary mr-2" /> NYC Salon
        </div>
        <div className="flex items-center text-gray-600 mb-1">
          <HiOutlinePhone className="text-primary mr-2" /> +1 35353 35354
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <HiOutlineLocationMarker className="text-primary mr-2" /> 12abc
          street, California, USA
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
