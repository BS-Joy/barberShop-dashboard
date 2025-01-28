import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import DashboardModal from "../../../Components/DashboardModal";
import SalonRequestModal from "../Salon/request/SalonRequestModal";

const salonData = [
  {
    name: "NYC Saloon",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Hard Rock",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Green Apple",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Lautong Salon",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Solo Salon",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Solo Salon",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Solo Salon",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Solo Salon",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Solo Salon",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Solo Salon",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    name: "Solo Salon",
    location: "Dubai City",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function DashboardSaloonRequests() {
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
    <div className="bg-white border border-primary p-4 rounded-2xl min-h-[489px] h-full w-[35%]">
      {/* card header */}
      <div className="border-b border-b-primary mb-4 flex justify-between pb-4 ">
        <h3 className="text-primary text-[18px]">Saloon Request</h3>
        <h3 className="text-[#191919] text-[18px] font-semibold">See All</h3>
      </div>

      <div className="max-h-[380px] overflow-y-auto salon-request-body">
        {salonData.map((salon, index) => (
          <div className="flex justify-between items-center border-b border-b-primary mb-2 p-2">
            {/* content */}
            <div className="flex gap-3 items-center">
              <img
                src={salon?.image}
                alt={salon.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <h4 className="text-[18px]">{salon?.name}</h4>
                <p className="flex items-center text-[12px]">
                  <CiLocationOn />
                  {salon?.location}
                </p>
              </div>
            </div>

            {/* user action */}
            <div className="relative inline-flex">
              <button onClick={() => toggleDropdown(index)} className="">
                <PiDotsThreeOutlineVerticalFill />
              </button>
              {showDropDown === index && (
                <ul className="absolute right-0 z-20 flex flex-col mt-1 list-none bg-white rounded shadow-xl top-full shadow-slate-500/10">
                  <li>
                    <button
                      className="flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 text-slate-500 hover:bg-playground hover:text-primary"
                      onClick={() => showModal(salon)}
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
        ))}
      </div>

      {/* modal */}
      <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <SalonRequestModal data={modalData} />
      </DashboardModal>
    </div>
  );
}
