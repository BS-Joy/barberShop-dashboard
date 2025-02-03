import React, { useState } from "react";
import DashboardModal from "../../../../Components/DashboardModal";
import SalonSummaryCard from "../SalonSummaryCard";
import SalonRequestModal from "./SalonRequestModal";
import { useGetAllSalonQuery } from "../../../../features/salon/salonSlice";
import LoadingSpinner from "../../../../Components/LoadingSpinner";
import EmptyPage from "../../../../Components/EmptyPage";

// const salons = [
//   {
//     name: "NYC Salon",
//     phone: "+1 35353 35354",
//     address: "12abc street, California, USA",
//     cardImage:
//       "https://images.pexels.com/photos/331989/pexels-photo-331989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     buttonText: "Details",
//   },
//   {
//     name: "Luxury Cuts",
//     phone: "+1 55555 12345",
//     address: "456 XYZ Avenue, New York, USA",
//     cardImage:
//       "https://images.pexels.com/photos/898989/pexels-photo-898989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     buttonText: "Details",
//   },
//   {
//     name: "Modern Styles",
//     phone: "+1 88888 54321",
//     address: "789 UVW Street, Toronto, Canada",
//     cardImage:
//       "https://images.pexels.com/photos/987654/pexels-photo-987654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     buttonText: "Details",
//   },
//   {
//     name: "Elegant Hair",
//     phone: "+44 1234 567890",
//     address: "1011 ABC Road, London, UK",
//     cardImage:
//       "https://images.pexels.com/photos/789456/pexels-photo-789456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     buttonText: "Details",
//   },
//   {
//     name: "Stylish Cuts",
//     phone: "+61 2345 678910",
//     address: "1213 DEF Lane, Sydney, Australia",
//     cardImage:
//       "https://images.pexels.com/photos/654321/pexels-photo-654321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     buttonText: "Details",
//   },
//   {
//     name: "Chic Salon",
//     phone: "+81 3456 789012",
//     address: "1415 GHI Boulevard, Tokyo, Japan",
//     cardImage:
//       "https://images.pexels.com/photos/321789/pexels-photo-321789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     buttonText: "Details",
//   },
//   {
//     name: "Trendy Hair",
//     phone: "+33 4567 890123",
//     address: "1617 JKL Street, Paris, France",
//     cardImage:
//       "https://images.pexels.com/photos/123789/pexels-photo-123789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     buttonText: "Details",
//   },
//   {
//     name: "Glamour Salon",
//     phone: "+49 5678 901234",
//     address: "1819 MNO Avenue, Berlin, Germany",
//     cardImage:
//       "https://images.pexels.com/photos/147852/pexels-photo-147852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     buttonText: "Details",
//   },
//   {
//     name: "Urban Style",
//     phone: "+34 6789 012345",
//     address: "2021 PQR Boulevard, Madrid, Spain",
//     cardImage:
//       "https://images.pexels.com/photos/963258/pexels-photo-963258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     buttonText: "Details",
//   },
//   {
//     name: "Boutique Hair",
//     phone: "+39 7890 123456",
//     address: "2223 STU Road, Rome, Italy",
//     cardImage:
//       "https://images.pexels.com/photos/853258/pexels-photo-853258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     buttonText: "Details",
//   },
// ];

export default function SalonRequestPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const {
    data: salonLists,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllSalonQuery();

  let pageContent;
  const salons = salonLists?.data?.data || [];

  if (isError) {
    console.log(error);
  }

  if (isLoading) {
    pageContent = (
      <div className="flex justify-center h-[70vh] items-center w-[80vw]">
        <LoadingSpinner />
      </div>
    );
  } else {
    pageContent =
      salons.length > 0 ? (
        <div className="grid grid-cols-4 gap-6">
          {salons.map(
            (salon, index) =>
              salon?.status !== "active" && (
                <SalonSummaryCard
                  data={salon}
                  showModal={showModal}
                  key={index}
                />
              )
          )}
        </div>
      ) : (
        <EmptyPage />
      );
  }

  return (
    <div className={`flex ${salons?.length > 0 ? "" : "justify-center"}`}>
      {pageContent}

      <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <SalonRequestModal data={modalData} />
      </DashboardModal>
    </div>
  );
}
