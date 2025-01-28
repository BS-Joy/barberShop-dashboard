import React, { useState } from "react";
import { Button, DatePicker, Input, Table } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import DashboardModal from "../../../Components/DashboardModal";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import UserDetailsModal from "./UserDetailsModal";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const columns = [
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Phone Number",
      key: "Phone_Number",
      dataIndex: "Phone",
    },
    {
      title: "Action",
      key: "Review",
      aligen: "center",
      render: (_, data) => (
        <div className="">
          {/* Review Icon */}
          <button className="mr-3">
            <IoChatbubbleEllipsesOutline size={"18px"} color="#3D1027" />
          </button>
          <button onClick={() => showModal(data)}>
            <FiEye size={"18px"} color="#3D1027" />
          </button>
        </div>
      ),
    },
  ];

  const data = [];
  for (let index = 0; index < 6; index++) {
    data.push({
      transIs: `${index + 1}`,
      name: "Henry",
      Email: "sharif@gmail.com",
      Phone: "+1 2746478994",
      Review: "See Review",
      date: "16 Apr 2024",
      _id: index,
    });
  }

  return (
    <div className="rounded-3xl border border-primary py-4 px-6 bg-white shadow-lg mt-2">
      {/* <h3 className="text-2xl text-playground font-semibold mb-4">All User</h3> */}

      {/* Ant Design Table */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomRight"] }}
        // className="rounded-3xl"
      />

      <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <UserDetailsModal data={modalData} />
      </DashboardModal>
    </div>
  );
};

export default Users;
