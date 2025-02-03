import React, { useState } from "react";
import { Button, DatePicker, Input, Pagination, Select, Table } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import DashboardModal from "../../../Components/DashboardModal";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import PageHeading from "../../../Components/PageHeading";
import { LuTrash2 } from "react-icons/lu";
import SelectAppMenu from "./SelectAppMenu";
// import UserDetailsModal from "./UserDetailsModal";

const BannerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

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
      title: "Banner Photo",
      dataIndex: "bannerPhoto",
      key: "bannerPhoto",
      render: (bannerPhoto) => (
        <img
          src={bannerPhoto}
          alt="Banner"
          style={{ width: "100px", height: "auto" }}
        />
      ),
    },
    {
      title: "Banner Name",
      dataIndex: "bannerName",
      key: "bannerName",
    },
    {
      title: "Upload Date & Time",
      key: "uploadTime",
      dataIndex: "uploadTime",
    },
    {
      title: () => <span className="flex justify-center">Action</span>,
      key: "Review",
      aligen: "center",
      render: (_, data) => (
        <div className="flex justify-center">
          <button onClick={() => showModal(data)}>
            <LuTrash2 size={"18px"} color="#3D1027" />
          </button>
        </div>
      ),
    },
  ];

  const bannerImage =
    "https://img.freepik.com/free-psd/banner-hair-salon_23-2148584951.jpg?t=st=1738059164~exp=1738062764~hmac=c9c542d3fdf6fe467cc84a073194d91bc3b6f4ea44b0da747779d38d11493d4b&w=1380";

  const data = [];
  for (let index = 0; index < 20; index++) {
    data.push({
      transIs: `${index + 1}`,
      bannerPhoto: bannerImage,
      bannerName: `Black Friday Banner`,
      uploadTime: "10:50 AM, 04/10/23",
      Review: "See Review",
      date: "16 Apr 2024",
      _id: index,
    });
  }

  return (
    <div className="rounded-3xl border border-primary py-4 px-6 bg-white shadow-lg mt-2">
      <div className="flex justify-between items-center gap-1 border-b border-b-primary pb-6">
        <h1 className="text-[25px] font-medium">Current Banners</h1>
        <div className="flex items-center gap-3">
          <SelectAppMenu />
          <Button
            onClick={() => navigate("add-banner")}
            type="primary"
            size="large"
            htmlType="submit"
            className="px-8 h-9 w-fit bg-primary"
          >
            Add Banner
          </Button>
        </div>
      </div>

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

      {/* <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <UserDetailsModal data={modalData} />
      </DashboardModal> */}
    </div>
  );
};

export default BannerPage;
