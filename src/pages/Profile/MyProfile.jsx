import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import dashProfile from "../../assets/images/dashboard-profile.png";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PhoneCountryInput from "../../Components/PhoneCountryInput";
import PageHeading from "../../Components/PageHeading";
import PasswordChangeModalForm from "../../Components/User/PasswordChangeModalForm";

const MyProfile = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const profileData = {
    name: "Enrique",
    email: "enrique@gmail.com",
    phone: "+880 1550597212",
    profile: dashProfile,
  };
  // console.log(code);
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
          }}
        >
          {/* profile image */}
          <div className="flex items-center gap-8 border-b border-b-primary pb-6">
            <img
              src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user profile picture"
              className="h-[150px] w-[150px] rounded-lg"
            />
            <h3 className="text-3xl text-primary font-medium">{"Chelfor"}</h3>
          </div>

          {/* profile information */}
          <div className="col-span-9 space-y-[24px] w-1/2">
            <Form.Item
              className="text-lg text-[#1F8D84] font-medium"
              label="Name"
              name="name"
            >
              <Input
                readOnly
                size="large"
                className="h-[56px] rounded-lg bg-[#EFFAFF] mt-3"
              />
            </Form.Item>
            <Form.Item
              className="text-lg text-[#1F8D84] font-medium"
              label="Email"
              name="email"
            >
              <Input
                readOnly
                size="large"
                className="h-[56px] rounded-lg bg-[#EFFAFF] mt-3"
              />
            </Form.Item>
            <Button
              onClick={(e) => navigate(`edit`)}
              size="large"
              type="primary"
              className="px-8 w-1/2 mx-auto rounded-full font-semibold bg-playground"
            >
              <FiEdit /> Edit Profile
            </Button>
            {/* <Form.Item
              className="text-lg text-[#222222] font-medium"
              label="Phone Number"
              name="phone"
            >
              <PhoneCountryInput disabled={true} />
            </Form.Item> */}
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
