import usersIcon from "../../../assets/images/user.png";

export default function DashboardSummaryCard({ data }) {
  return (
    <div className="w-full flex items-center gap-6 border border-primary bg-white px-[24px] py-[16px] rounded-2xl space-y-3">
      <img src={data?.icon || usersIcon} alt={data?.title} />
      <div>
        <h3 className="text-[20px]">{data?.title || "Total User"}</h3>
        <h3 className="text-[30px] font-medium text-primary">
          {data?.total || `254 `}
        </h3>
      </div>
    </div>
  );
}
