import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { FaAngleDown } from "react-icons/fa6";

const SelectAppMenu = () => {
  const [selectedApp, setSelectedApp] = useState("User App");

  const handleMenuClick = (e) => {
    setSelectedApp(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick} className="w-[300px] right-[60%] px-10">
      <div className="px-3 mb-3">
        <h3 className="pt-4 pb-3 border-b text-2xl font-semibold border-b-primary">
          Select App
        </h3>
      </div>
      <Menu.Item key="User App">
        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full ${
              selectedApp === "User App" ? "bg-[#644052]" : "bg-gray-300"
            }`}
          ></div>
          <span className="ml-2 text-lg font-semibold">User App</span>
        </div>
      </Menu.Item>
      <Menu.Item key="Host App">
        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full ${
              selectedApp === "Host App" ? "bg-[#644052]" : "bg-gray-300"
            }`}
          ></div>
          <span className="ml-2 text-lg font-semibold">Host App</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <button className="bg-white border border-[#644052] rounded-full px-4 py-1 flex items-center">
        {selectedApp} <FaAngleDown className="ml-2" />
      </button>
    </Dropdown>
  );
};

export default SelectAppMenu;
