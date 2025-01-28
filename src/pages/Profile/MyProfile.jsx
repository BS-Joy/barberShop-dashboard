import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import dashProfile from "../../assets/images/dashboard-profile.png";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PhoneCountryInput from "../../Components/PhoneCountryInput";
import PageHeading from "../../Components/PageHeading";
import PasswordChangeModalForm from "../../Components/User/PasswordChangeModalForm";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import {
  HiOutlinePhone,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const MyProfile = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const profileData = {
    name: "Enrique",
    email: "enrique@gmail.com",
    phone: "+880 1550597212",
    dob: "11/2/1996",
    profile: dashProfile,
    address: "12 street, New York, USA",
  };

  return (
    <div className="space-y-[24px] min-h-[83vh] rounded-2xl p-6 bg-white border border-primary ">
      <PageHeading
        title={"Profile"}
        backPath={-1}
        disbaledBackBtn={true}
        className={"px-10 border-b border-primary py-6"}
      />
      <div className="w-full">
        {/* user full information */}
        <Form
          name="basic"
          layout="vertical"
          className="w-full gap-x-10 py-8"
          autoComplete="off"
          initialValues={{
            name: profileData.name,
            email: profileData.email,
            phone: profileData.phone,
            dob: profileData.dob,
            address: profileData.address,
          }}
        >
          {/* profile image */}
          <div className="flex items-center gap-8 border-b border-b-[#8B707D] pb-6">
            <img
              src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user profile picture"
              className="h-[150px] w-[150px] rounded-lg"
            />
            <h3 className="text-3xl text-primary font-medium">{"Chelfor"}</h3>
          </div>

          {/* profile information */}
          <div className="">
            {/* name */}
            <Form.Item
              className="text-lg text-primary font-medium mt-6"
              name="name"
            >
              <Input
                readOnly
                size="large"
                className=""
                value={profileData?.name}
                prefix={
                  <CiUser size={"20px"} color="#333333" className="mr-2" />
                }
              />
            </Form.Item>

            {/* email */}
            <Form.Item
              className="text-lg text-primary font-medium"
              name="email"
            >
              <Input
                readOnly
                size="large"
                defaultValue={profileData?.email}
                prefix={
                  <CiMail size={"18px"} color="#333333" className="mr-2" />
                }
              />
            </Form.Item>

            {/* phone */}
            <Form.Item
              className="text-lg text-primary font-medium"
              name="phone"
            >
              <Input
                readOnly
                size="large"
                value={profileData?.phone}
                prefix={
                  <HiOutlinePhone
                    size={"18px"}
                    color="#333333"
                    className="mr-2"
                    strokeWidth={1}
                  />
                }
              />
            </Form.Item>

            {/* date of birth */}
            <Form.Item className="text-lg text-primary font-medium" name="dob">
              <Input
                readOnly
                size="large"
                value={profileData?.dob}
                prefix={
                  <HiOutlineCalendar
                    size={"18px"}
                    color="#333333"
                    className="mr-2"
                    strokeWidth={1}
                  />
                }
              />
            </Form.Item>

            {/* address */}
            <Form.Item
              className="text-lg text-primary font-medium"
              name="address"
            >
              <Input
                readOnly
                size="large"
                value={profileData?.address}
                prefix={
                  <HiOutlineLocationMarker
                    size={"18px"}
                    color="#333333"
                    className="mr-2"
                    strokeWidth={1}
                  />
                }
              />
            </Form.Item>
            <Button
              onClick={(e) => navigate(`edit-profile`)}
              size="large"
              type="primary"
              className="w-full rounded-full font-semibold"
            >
              <FiEdit /> Edit Profile
            </Button>
          </div>
        </Form>
      </div>
      <PasswordChangeModalForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default MyProfile;
