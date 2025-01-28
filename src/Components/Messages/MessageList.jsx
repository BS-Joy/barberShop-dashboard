import React from "react";
import PageHeading from "../PageHeading";
import MessageListCard from "./MessageListCard";

export default function MessageList() {
  return (
    <div className="bg-white border border-primary rounded-2xl w-full px-6">
      <PageHeading
        backPath={"/"}
        title={"Message List"}
        disbaledBackBtn={true}
        className="py-6 border-b border-b-primary"
      />
      <div className="mt-6 max-h-[630px] overflow-y-scroll mb-6 msg-list pr-4">
        <MessageListCard first={true} />
        <MessageListCard />
        <MessageListCard />
        <MessageListCard />
        <MessageListCard />
        <MessageListCard />
        <MessageListCard />
        <MessageListCard />
        <MessageListCard />
        <MessageListCard />
      </div>
    </div>
  );
}
