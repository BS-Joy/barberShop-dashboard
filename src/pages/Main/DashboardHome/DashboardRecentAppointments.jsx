import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import CalenderDatePicker from "./CalenderDatePicker";
import { da } from "date-fns/locale";
import { Button, Dropdown } from "antd";
import DashboardModal from "../../../Components/DashboardModal";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import AppointmentDetailsCard from "./AppointmentDetailsCard";

const statusColor = {
  Complete: "bg-[#2BA24C]",
  Cancelled: "bg-[#D7263D]",
  Pending: "bg-[#FFD60A]",
};

const appointmentsData = [
  {
    id: "00014563",
    customerName: "Esther Howard",
    services: ["Spa", "Massage", "Haircut"],
    timeSlot: {
      start: "10am",
      end: "12pm",
    },
    price: 500,
    saloon: "Salon Iridescent",
    status: "Complete",
  },
  {
    id: "00014564",
    customerName: "Jenny Wilson",
    services: ["Haircut", "Hair Color"],
    timeSlot: {
      start: "2pm",
      end: "4pm",
    },
    price: 350,
    saloon: "Salon Iridescent",
    status: "Pending",
  },
  {
    id: "00014565",
    customerName: "Robert Fox",
    services: ["Beard Trim", "Facial"],
    timeSlot: {
      start: "11am",
      end: "12pm",
    },
    price: 200,
    saloon: "Salon Iridescent",
    status: "Complete",
  },
  {
    id: "00014566",
    customerName: "Wade Warren",
    services: ["Full Body Massage", "Spa"],
    timeSlot: {
      start: "3pm",
      end: "5pm",
    },
    price: 450,
    saloon: "Salon Iridescent",
    status: "Cancelled",
  },
  {
    id: "00014567",
    customerName: "Leslie Alexander",
    services: ["Manicure", "Pedicure", "Facial"],
    timeSlot: {
      start: "1pm",
      end: "3:30pm",
    },
    price: 380,
    saloon: "Salon Iridescent",
    status: "Complete",
  },
  {
    id: "00014568",
    customerName: "Dianne Russell",
    services: ["Hair Color", "Hair Treatment"],
    timeSlot: {
      start: "4pm",
      end: "6pm",
    },
    price: 420,
    saloon: "Salon Iridescent",
    status: "Pending",
  },
  {
    id: "00014569",
    customerName: "Cameron Williams",
    services: ["Haircut", "Beard Trim", "Face Massage"],
    timeSlot: {
      start: "12pm",
      end: "2pm",
    },
    price: 300,
    saloon: "Salon Iridescent",
    status: "Complete",
  },
  {
    id: "00014570",
    customerName: "Brooklyn Simmons",
    services: ["Hair Treatment", "Head Massage"],
    timeSlot: {
      start: "5pm",
      end: "6:30pm",
    },
    price: 280,
    saloon: "Salon Iridescent",
    status: "Pending",
  },
];

export default function DashboardRecentAppointments() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [showDropDown, setShowDropDown] = useState(null);

  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const toggleDropdown = (index) => {
    if (showDropDown === index) {
      setShowDropDown(null);
    } else {
      setShowDropDown(index);
    }
  };

  return (
    <div className="bg-white border border-primary p-4 rounded-2xl min-h-[500px] w-full">
      {/* card header */}
      <div className="border-b border-b-primary mb-4 flex justify-between pb-4 ">
        <h3 className="text-primary text-[18px]">Recent Appointments</h3>
        <CalenderDatePicker />
      </div>

      <div className="max-h-[400px] h-full overflow-y-auto salon-request-body">
        {appointmentsData.map((data, index) => (
          <div
            key={data.id}
            className="flex items-center justify-between w-full p-4 border-b border-primary"
          >
            {/* Customer Info */}
            <div className="flex flex-col max-w-[150px] w-full">
              <h3 className="font-medium text-primary text-base">
                {data?.customerName}
              </h3>
              <span className="text-sm text-[#999999]">#{data?.id}</span>
            </div>

            {/* Services */}
            <div className="flex-1 text-start max-w-[150px]">
              <p className="text-[#191919]">
                {data?.services?.map((s) => `${s}, `)}
              </p>
            </div>

            {/* Time Slot */}
            <div className="px-6">
              <p className="text-[#191919]">{`${data?.timeSlot?.start} - ${data?.timeSlot?.end}`}</p>
            </div>

            {/* Price */}
            <div className="px-6">
              <p className="text-[#191919]">${data?.price}</p>
            </div>

            {/* Salon Name */}
            <div className="px-6">
              <p className="text-[#191919]">{data?.saloon}</p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-4">
              <span
                className={`py-1 text-sm font-medium w-[86px] text-center text-white ${
                  statusColor[data?.status]
                } rounded cursor-pointer`}
              >
                {data?.status}
              </span>

              {/* three dot action button */}
              <div className="relative inline-flex">
                <button onClick={() => toggleDropdown(index)} className="">
                  <PiDotsThreeOutlineVerticalFill />
                </button>
                {showDropDown === index && (
                  <ul className="absolute right-0 z-20 flex flex-col mt-1 list-none bg-white rounded shadow-xl top-full shadow-slate-500/10">
                    <li>
                      <button
                        className="flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 text-slate-500 hover:bg-playground hover:text-primary"
                        onClick={() => showModal(data)}
                      >
                        <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                          <span className="leading-5 text-black truncate">
                            Details
                          </span>
                        </span>
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <AppointmentDetailsCard data={modalData} />
      </DashboardModal>
    </div>
  );
}
