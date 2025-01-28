import React from "react";
import { AudioOutlined, SendOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Input } from "antd";
import { IoSend } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";
// const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

const MessageSendForm = () => {
  return (
    <div className="flex w-full justify-center items-center gap-4 mt-6">
      <ConfigProvider
        theme={{
          token: {
            // colorPrimary: "#61D0FF",
          },
          components: {
            Button: {
              // colorBorder: "#61D0FF",
            },
            Input: {
              controlHeight: 50,
            },
          },
        }}
      >
        <Input
          // style={{ width: "400px" }}
          className="pl-4 py-4 msg-field"
          placeholder="Enter your message"
          onChange={onSearch}
        />

        <button type="submit" className=" rounded-lg py-2 bg-none">
          <IoSend size={"40px"} />
        </button>
      </ConfigProvider>
    </div>
  );
};

export default MessageSendForm;
