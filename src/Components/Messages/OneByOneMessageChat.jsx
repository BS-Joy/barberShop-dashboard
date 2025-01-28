import React, { useEffect, useRef } from "react";
import dayjs from "dayjs";
import { cn } from "../../lib/utils";
import { FaRegUserCircle } from "react-icons/fa";
import PageHeading from "../PageHeading";
import MessageSendForm from "./MessageSendForm";

const user1Image =
  "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1";
const user2Image =
  "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&dpr=1";

const OneByOneMessageChat = ({ messages, className }) => {
  const messagesEndRef = useRef(null);

  // Group messages by date
  const groupedMessages = groupMessagesByDate(messages);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        // behavior: "smooth"
      });
    }
  }, [groupedMessages]);

  return (
    <div
      id="message-uesrs"
      className={cn(
        " p-6 w-full bg-white border border-primary rounded-2xl",
        className
      )}
    >
      <PageHeading
        title={"Ann Marie"}
        disbaledBackBtn={true}
        className="pb-6 border-b border-b-primary mb-6"
      />
      <div className="max-h-[600px] overflow-y-auto msg-list pr-4">
        {Object.keys(groupedMessages).map((date) => (
          <div key={date} className="my-4">
            {/* <div className="text-center">
              {dayjs(date).format("MMMM D, YYYY")}
            </div> */}
            {groupedMessages[date].map((message) => (
              <div
                key={message._id}
                className={`w-fit flex gap-4 mb-8 ${
                  message.sender === "user1" && "flex-row-reverse"
                } ${
                  message.sender === "user1"
                    ? " text-right ml-auto"
                    : "text-left"
                }`}
              >
                <div>
                  <img
                    src={message.sender === "user1" ? user1Image : user2Image}
                    alt="user thumbnail"
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
                <div
                  className={`flex ${
                    message.sender === "user1" && "flex-row-reverse"
                  } items-center gap-4`}
                >
                  <div
                    className={cn(
                      "mb-1 max-w-[400px] text-start p-3 text-primary border rounded-md",
                      {
                        "bg-green-playground rounded-tr-none border-[#8B707D] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]":
                          message.sender !== "user1",
                        " bg-info rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] rounded-tr-none bg-primary text-white":
                          message.sender == "user1",
                      }
                    )}
                  >
                    {message.message}
                  </div>
                  <div className="text-xs text-gray-400">
                    {dayjs(message.timestamp).format("h:mm A")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <MessageSendForm />
      <div ref={messagesEndRef} />
    </div>
  );
};

// Utility function
const groupMessagesByDate = (messages) => {
  return messages?.reduce((grouped, message) => {
    const date = dayjs(message.timestamp).format("YYYY-MM-DD");
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(message);
    return grouped;
  }, {});
};

export default OneByOneMessageChat;
