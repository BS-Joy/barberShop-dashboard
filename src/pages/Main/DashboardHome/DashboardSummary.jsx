import DashboardSummaryCard from "./DashboardSummaryCard";
import usersIcon from "../../../assets/images/user.png";
import barberIcon from "../../../assets/images/Barber.png";
import productsIcon from "../../../assets/images/Products.png";

const dashboardSummaryData = [
  {
    title: "Total Users",
    total: "1.2k",
    icon: usersIcon,
  },
  {
    title: "Total Barbers",
    total: "700",
    icon: barberIcon,
  },
  {
    title: "Total Products",
    total: "3.8k",
    icon: productsIcon,
  },
];

export default function DashboardSummary() {
  return (
    <div className="flex gap-6 w-full mb-6">
      {dashboardSummaryData?.map((data, index) => (
        <DashboardSummaryCard key={index} data={data} />
      ))}
    </div>
  );
}
