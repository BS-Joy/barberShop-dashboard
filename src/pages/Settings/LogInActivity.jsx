import React, { useState } from "react";
import { Button, DatePicker, Input, Pagination, Table } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import DashboardModal from "../../Components/DashboardModal";
import UserDetailsModal from "../Main/Users/UserDetailsModal";
import PageHeading from "../../Components/PageHeading";

const LogInActivity = () => {
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
      title: "Browser",
      dataIndex: "browser",
      key: "browser",
    },
    {
      title: "Device",
      dataIndex: "device",
      key: "device",
    },
    {
      title: "Location",
      key: "location",
      dataIndex: "location",
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
        <div className="flex justify-center">
          <button
            className="bg-[#AC1E31] hover:bg-red-500 text-white text-[10px] leading-3 rounded py-1 px-3 transition-colors"
            onClick={() => showModal(data)}
          >
            Sign Out
          </button>
        </div>
      ),
    },
  ];

  const data = [];
  for (let index = 0; index < 6; index++) {
    data.push({
      browser: `Google Chrome`,
      device: `MacBook Pro 2020`,
      location: "New York, USA",
      time: "22 Nov 2023, 11:46 AM",
      //   date: "16 Apr 2024",
      _id: index,
    });
  }

  return (
    <div className="rounded-3xl border border-primary py-4 px-6 bg-white h-[745px] shadow-lg mt-2">
      <PageHeading
        backPath={-1}
        title={"Login Activity"}
        disbaledBackBtn={false}
        className="pb-6 border-b border-b-secondry w-full"
      />

      {/* Ant Design Table */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="login-activity-table"
      />

      <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <UserDetailsModal data={modalData} />
      </DashboardModal>
    </div>
  );
};

export default LogInActivity;
