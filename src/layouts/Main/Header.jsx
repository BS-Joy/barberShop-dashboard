import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Badge, Button, Input } from "antd";
import { TbBell } from "react-icons/tb";
import msgIcon from "../../assets/images/msg-icon.png";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  const loacatin = useLocation();
  const notificationRef = useRef(null);
  const [notificationPopup, setNotificationPopup] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setNotificationPopup(false);
  }, [loacatin.pathname]);

  return (
    <div className="w-full h-[88px] flex justify-between gap-6 items-center rounded-2xl py-[16px] ">
      <div className="flex items-center bg-white border border-[#B19FA9] rounded-full shadow-md p-2 w-full">
        <Input
          placeholder="Search names/ products/ salons"
          prefix={<HiMiniMagnifyingGlass className="text-gray-500 mr-2" />}
          className="w-full text-gray-700 placeholder-gray-400 header-searchbar py-2"
        />
      </div>
      <div className="flex gap-6">
        <div
          onClick={(e) => navigate("/notifications")}
          className="relative flex items-center "
        >
          <Badge
            style={{
              backgroundColor: "#ff181f",
              top: "17px",
              right: "18px",
            }}
            size="small"
            count={1}
          >
            <TbBell
              style={{ cursor: "pointer" }}
              strokeWidth={1}
              className={`text-primary border border-primary bg-[#ffffff] w-[55px] h-[55px] rounded-full p-2 shadow-sm font-thin transition-all`}
            />
          </Badge>
        </div>

        {/* messages */}
        <div
          onClick={(e) => navigate("/notifications")}
          className="relative flex items-center justify-center w-14 h-14 rounded-full border border-primary bg-white hover:cursor-pointer"
        >
          {/* <Badge
            style={{
              backgroundColor: "#ff181f",
              top: "17px",
              right: "18px",
            }}
            size="small"
            count={1}
          >  <LuMessageCircleMore
            style={{ cursor: "pointer", padding: "12px" }}
            strokeWidth={1}
            className={`text-primary border border-primary bg-[#ffffff] w-[55px] h-[55px] rounded-full p-2 shadow-sm font-thin transition-all`}
          /> */}
          <img src={msgIcon} alt="message icon" />
          {/* </Badge> */}
        </div>

        {/* user icon */}
        <div
          onClick={(e) => navigate("/notifications")}
          className="relative flex items-center "
        >
          <HiOutlineUser
            style={{ cursor: "pointer", padding: "12px" }}
            size={"10px"}
            strokeWidth={1.3}
            className={`text-primary border border-primary bg-[#ffffff] w-[55px] h-[55px] rounded-full p-2 shadow-sm transition-all`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
