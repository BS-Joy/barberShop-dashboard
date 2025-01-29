import { FaAngleRight } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { routeLinkGenerators } from "../../utils/routeLinkGenerators";
import { dashboardItems } from "../../constants/router.constants";
import { Switch } from "antd";
import PageHeading from "../../Components/PageHeading";

const SettingPage = () => {
  const onChange = (checked) => {
    // console.log(`switch to ${checked}`);
  };
  return (
    <div className="rounded-3xl py-4 border border-secondry bg-white p-6 shadow-lg mt-8 ">
      <PageHeading
        title={"Settings"}
        disbaledBackBtn={true}
        className="border-b border-b-primary py-6"
      />

      {/* notification */}
      <div className="space-y-4 container mx-auto pt-4">
        <div className="flex justify-between items-center p-4 border-b border-[#CCCCCC]">
          <span className="text-black-400 text-xl">Notifications</span>
          <Switch defaultChecked onChange={onChange} />
        </div>
      </div>
      <div>
        {routeLinkGenerators(dashboardItems)
          .filter(
            ({ children, rootPath }) =>
              children && children.length > 0 && rootPath === "settings"
          ) // Ensure only items with children are processed
          .map(({ name, icon, path, children, rootPath }, indx) => (
            <div key={indx} className="space-y-4 container mx-auto pt-4 pb-32">
              {children.map(({ subName, subPath, subIcon }, inx) => (
                <NavLink
                  key={inx}
                  to={`/${subPath}`}
                  className="flex justify-between items-center p-4 border-b border-[#CCCCCC]"
                >
                  <span className="text-black-400 text-xl"> {subName}</span>
                  <div className="text-lg font-medium text-gray-800">
                    <FaAngleRight color="#191919" />
                  </div>
                </NavLink>
              ))}
            </div>
          ))}
      </div>
      <div className="p-[24px] pt-0.5">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingPage;
