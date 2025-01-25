import DashboardHomeTable from "../../../Components/DashboardHomeTable";
import DashboardSummary from "./DashboardSummary";

const DashboardHome = () => {
  return (
    <div className="space-y-[24px]">
      <DashboardSummary />
      <DashboardHomeTable />
    </div>
  );
};

export default DashboardHome;
