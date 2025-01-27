import { DatePicker } from "antd";
import DashboardChart from "../../../Components/DashboardCahrt";
import DashboardHomeTable from "../../../Components/DashboardHomeTable";
import CalendarDateSelector from "./CalenderDatePicker";
import DashboardRecentAppointments from "./DashboardRecentAppointments";
import DashboardSaloonRequests from "./DashboardSaloonRequests";
import DashboardSummary from "./DashboardSummary";
import DashboardTopSaloons from "./DashboardTopSaloons";
import IncomeRatioChart from "./IncomeRatioChart";
import UserRatioChart from "./UserRatioChart";

const DashboardHome = () => {
  return (
    <div className="w-full h-full">
      <div className="flex gap-6 w-full">
        <div className="w-full">
          <DashboardSummary />
          <div className="flex gap-6 w-full">
            <IncomeRatioChart />
            <UserRatioChart />
          </div>
        </div>
        <DashboardSaloonRequests />
      </div>
      <div className="flex gap-6 mt-6">
        <DashboardRecentAppointments />
        <DashboardTopSaloons />
      </div>
    </div>
  );
};

export default DashboardHome;
