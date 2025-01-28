import { IoIosNotificationsOutline } from "react-icons/io";

export default function NotificationCard() {
  return (
    <div className="group flex items-center gap-4 px-[24px] py-4 cursor-pointer border-b border-blue-50 hover:bg-gray-100 transition-all">
      <IoIosNotificationsOutline
        style={{ cursor: "pointer" }}
        className={` w-[42px] h-[42px] rounded-lg p-1.5 shadow-sm bg-playground text-info `}
      />
      <div className="space-y-[2px]">
        <h6 className="text-lg">You have received $500 from John Doe</h6>
        <small className="text-[12px] text-gray-500">Fri, 12:30pm</small>
      </div>
    </div>
  );
}
