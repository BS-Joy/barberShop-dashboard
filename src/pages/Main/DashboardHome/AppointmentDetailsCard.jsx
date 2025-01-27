import { FaStar } from "react-icons/fa";

const statusColor = {
  Complete: "bg-[#2BA24C]",
  Cancelled: "bg-[#D7263D]",
  Pending: "bg-[#FFD60A]",
};

export default function AppointmentDetailsCard({ data }) {
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden">
      <div className="flex gap-6 items-center border-b border-b-[#999999] pb-2">
        <div>
          <h2 className="text-xl font-semibold text-primary">
            Appointment ID: #00014563
          </h2>
          <p className="text-[#999999]">see all details about #00014563</p>
        </div>
        <span
          className={`${
            statusColor[data?.status]
          } text-white text-sm font-normal px-2 py-1 rounded`}
        >
          {data?.status}
        </span>
      </div>
      <div className="mt-2 pb-2 flex items-center border-b border-b-[#999999]">
        <img
          className="w-12 h-12 rounded-xl object-cover"
          src="https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg"
          alt="Profile"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-[#191919]">
            {data?.customerName}
          </h3>
        </div>
      </div>
      <div className="mt-2 border-b border-b-[#999999] pb-2">
        <h4 className="text-2xl mb-2 font-semibold text-[#191919]">
          Appointment Details
        </h4>
        <p className="text-[#191919]">Service: Hair Cut, Spa, Massage</p>
        <p className="text-[#191919]">Date: 20/11/2023</p>
        <p className="text-[#191919]">Time: 10 am - 12 pm</p>
        <p className="text-[#191919]">Contact: +995 24466226</p>
        <p className="text-[#191919]">Address: 123abc, street, USA</p>
        <p className="text-[#191919]">Total Amount: $589.23</p>
        <p className="text-[#191919]">Booking Amount: $80.56</p>
        <p className="text-[#191919]">Payment Method: Cash</p>
      </div>
      <div className="mt-4 flex items-center">
        <img
          className="w-12 h-12 rounded-[4px] object-cover"
          src="https://cdn.pixabay.com/photo/2021/11/15/13/21/barber-shop-6798125_1280.jpg"
          alt="Salon"
        />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-[#191919]">NYC Salon#4</h3>
          <div className="flex items-center">
            <FaStar className="text-yellow-500" />
            <span className="text-[#191919] ml-2">(4.5)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
