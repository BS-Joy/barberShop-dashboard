import React from "react";
import MessageList from "./MessageList";
import OneByOneMessageChat from "./OneByOneMessageChat";

const messages = [
  {
    _id: "1",
    sender: "user1",
    message: "Hello! How are you?",
    timestamp: "2025-01-28T08:30:00Z",
  },
  {
    _id: "2",
    sender: "user2",
    message: "I am good, thank you! How about you?",
    timestamp: "2025-01-28T08:31:00Z",
  },
  {
    _id: "3",
    sender: "user1",
    message: "I am doing well. What are you up to?",
    timestamp: "2025-01-28T08:32:00Z",
  },
  {
    _id: "4",
    sender: "user2",
    message: "Just working on a new project.",
    timestamp: "2025-01-28T08:33:00Z",
  },
  {
    _id: "5",
    sender: "user1",
    message: "That sounds interesting!",
    timestamp: "2025-01-28T08:34:00Z",
  },
  {
    _id: "6",
    sender: "user2",
    message: "Yes, it is! What about you?",
    timestamp: "2025-01-28T08:35:00Z",
  },
  {
    _id: "7",
    sender: "user1",
    message: "I am just relaxing and enjoying some free time.",
    timestamp: "2025-01-28T08:36:00Z",
  },
  {
    _id: "8",
    sender: "user2",
    message: "That sounds great!",
    timestamp: "2025-01-28T08:37:00Z",
  },
  {
    _id: "9",
    sender: "user1",
    message: "Indeed! We should catch up soon.",
    timestamp: "2025-01-28T08:38:00Z",
  },
  {
    _id: "10",
    sender: "user2",
    message: "Absolutely. Let’s plan for the weekend.",
    timestamp: "2025-01-28T08:39:00Z",
  },
];

export default function MessagePage() {
  return (
    <div className="flex w-full gap-4">
      <MessageList />
      <OneByOneMessageChat messages={messages} />
    </div>
  );
}
