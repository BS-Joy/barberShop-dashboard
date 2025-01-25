import DashboardChart from "../../../Components/DashboardCahrt";
import DashboardHomeTable from "../../../Components/DashboardHomeTable";
import DashboardSaloonRequests from "./DashboardSaloonRequests";
import DashboardSummary from "./DashboardSummary";
import IncomeRatioChart from "./IncomeRatioChart";
import UserRatioChart from "./UserRatioChart";

const DashboardHome = () => {
  return (
    <div className="space-y-[24px]">
      <div className="grid grid-cols-2 gap-8">
        <DashboardSummary />
        <div className="grid grid-cols-2 gap-8">
          <IncomeRatioChart />
          <UserRatioChart />
        </div>
        <DashboardSaloonRequests />
      </div>
      <DashboardHomeTable />
    </div>
  );
};

export default DashboardHome;
