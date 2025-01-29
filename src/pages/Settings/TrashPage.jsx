import React, { useState } from "react";
import { Button, DatePicker, Input, Pagination, Table } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import DashboardModal from "../../Components/DashboardModal";
import UserDetailsModal from "../Main/Users/UserDetailsModal";
import PageHeading from "../../Components/PageHeading";

const TrashPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const handlePageChange = (page, pageSize) => {
    setCurrent(page);
    setPageSize(pageSize);
  };

  const columns = [
    {
      title: "Image & Tile",
      dataIndex: "image",
      key: "image_title",
      render: (image, record) => (
        <div className="flex items-center w-fit">
          <img
            src={image}
            alt="Banner"
            className="rounded-lg"
            style={{ width: "60px", height: "50px", marginRight: "10px" }}
          />
          <span>{record.name}</span>
        </div>
      ),
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => (
        <div className="flex justify-start items-center">
          <FaStar color="#FFD60A" />
          &nbsp; ({rating})
        </div>
      ),
    },
    {
      title: "Time",
      key: "time",
      dataIndex: "time",
    },
    {
      title: <div className="flex justify-center">Action</div>,
      key: "Review",
      aligen: "center",
      render: (_, data) => (
        <div className="flex justify-end">
          <button
            className="bg-[#22823D] hover:bg-green-500 text-white rounded py-1 px-3 transition-colors"
            onClick={() => showModal(data)}
          >
            Restore
          </button>
        </div>
      ),
    },
  ];

  const bannerImage =
    "https://images.unsplash.com/photo-1514336937476-a5b961020a5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const data = [];
  for (let index = 0; index < 4; index++) {
    data.push({
      name: "Down Town Salon",
      image: bannerImage,
      rating: `4.5`,
      time: "22 Nov 2023, 11:46 AM",
      _id: index,
    });
  }

  return (
    <div className="rounded-3xl border border-primary py-4 px-6 bg-white h-[745px] shadow-lg mt-2 overflow-y-auto">
      <PageHeading
        backPath={-1}
        title={"Trash"}
        disbaledBackBtn={false}
        className="pb-6 border-b border-b-secondry w-full mb-6"
      />

      {/* Ant Design Table */}
      {/* <Table
        columns={columns}
        dataSource={data}
        showHeader={false}
        pagination={false}
        className="login-activity-table"
      /> */}
      {data?.map((data) => (
        <div
          key={data?._id}
          className="flex justify-between py-2 cursor-pointer hover:bg-slate-100"
        >
          {/* content */}
          <div className="flex items-center">
            <div className="flex items-center gap-4 mr-11">
              <img
                src={bannerImage}
                alt="img"
                className="w-[50px] h-[50px] rounded"
              />
              <p>Down Town Salon</p>
            </div>
            {/* rating */}
            <div className="flex items-center mr-11">
              <FaStar color="#FFD60A" />
              <span> &nbsp;(4.5)</span>
            </div>
            <p>22 Nov 2023, 11:46 AM</p>
          </div>
          <div className="flex items-center">
            <button
              className="bg-[#22823D] hover:bg-green-500 text-white max-h-[30px] h-full rounded py-1 px-3 transition-colors"
              onClick={() => showModal(data)}
            >
              Restore
            </button>
          </div>
        </div>
      ))}

      <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <UserDetailsModal data={modalData} />
      </DashboardModal>
    </div>
  );
};

export default TrashPage;
