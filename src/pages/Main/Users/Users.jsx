import React, { useState } from "react";
import { Button, DatePicker, Input, Pagination, Table } from "antd";
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
      title: <div className="flex justify-center">Action</div>,
      key: "Review",
      aligen: "center",
      render: (_, data) => (
        <div className="flex justify-center">
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
      name: `Henry ${index + 1}`,
      Email: `sharif@gmail.com`,
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
        pagination={false}
        footer={() => (
          <div
            className="font-lato"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span className="text-primary text-[18px]">SHOWING 1-5 OF 250</span>
            <Pagination
              itemRender={(page, type, originalElement) => {
                if (type === "page") {
                  return (
                    <span
                      style={{
                        backgroundColor: page === current ? "#3D1027" : "",
                        color: page === current ? "#FFFFFF" : "",
                      }}
                    >
                      {page}
                    </span>
                  );
                }
                return originalElement;
              }}
              current={current}
              pageSize={pageSize}
              total={data.length}
              onChange={handlePageChange}
            />
          </div>
        )}
      />

      <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <UserDetailsModal data={modalData} />
      </DashboardModal>
    </div>
  );
};

export default Users;
