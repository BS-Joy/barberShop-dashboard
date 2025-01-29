import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { createElement, useEffect, useState } from "react";
import { routeLinkGenerators } from "../../utils/routeLinkGenerators";
import { dashboardItems } from "../../constants/router.constants";
import Swal from "sweetalert2";
import { TbLogout } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa6";
import { cn } from "../../lib/utils";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openNome, setOpenNome] = useState({});
  const [isActivePath, setIsActivePath] = useState(false);

  const handleLogOut = () => {
    Swal.fire({
      text: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "     Sure    ",
      cancelButtonText: "Cancel",
      showConfirmButton: true,
      confirmButtonColor: "#DC2626",
      reverseButtons: true,
    }).then((res) => {
      if (res.isConfirmed) {
        // dispatch(logout());
        // localStorage.removeItem("token");
        // localStorage.removeItem("user-update");
        navigate("/auth");
      }
    });
  };

  // console.log(location.pathname);

  useEffect(() => {
    const currentPath = location.pathname;
    routeLinkGenerators(dashboardItems).forEach((item) => {
      if (item.rootPath && currentPath.includes(item.rootPath)) {
        setOpenNome({ name: item.name });
      } else if (item.children) {
        item.children.forEach((child) => {
          if (currentPath.includes(child.subPath)) {
            setOpenNome({ name: item.name });
          }
        });
      }
    });
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 w-[326px] min-h-screen h-full p-6 pr-0 ">
      <div className="h-full flex flex-col justify-between bg-primary pt-[50px] border drop-shadow rounded-lg">
        <div className="space-y[24px">
          <div className="px-[38px]">
            <img className="w-[60%] mx-auto" src={logo} alt="" />
          </div>
          <ul className="mt-10 max-h-[650px] overflow-y-auto space-y-1 xl:space-y-2 px-4">
            {routeLinkGenerators(dashboardItems).map(
              ({ name, icon, path, children, rootPath }, indx) =>
                children?.length && rootPath !== "settings" ? (
                  <li key={indx} className="overflow-hidden">
                    {/* {console.log(children[0].subPath)} */}
                    <button
                      onClick={() => {
                        setOpenNome((c) => ({
                          name: c?.name === name ? null : name,
                        }));
                      }}
                      className={cn(
                        "outline-none group text-white hover:text-primary text-[20px] hover:bg-white w-full px-4 py-3 flex items-center justify-between gap-3 text-lg transition-all rounded-lg",
                        {
                          "bg-white text-primary":
                            name === openNome?.name ||
                            (location.pathname.includes(rootPath) &&
                              !openNome.name),
                        }
                      )}
                    >
                      <div className="flex items-center justify-start gap-3">
                        <div>{createElement(icon, { size: "20" })}</div>
                        <span>{name}</span>
                      </div>
                      <FaChevronRight
                        className={cn(
                          "text-white hover:text-primary group-hover:text-primary",
                          {
                            "rotate-90 text-primary":
                              name === openNome?.name ||
                              (location.pathname.includes(rootPath) &&
                                !openNome.name),
                          }
                        )}
                        size={23}
                      />
                    </button>
                    <div
                      className={cn(
                        "pl-8 pr-6 space-y-0.5 h-0 overflow-hidden",
                        {
                          "h-fit pt-1":
                            name === openNome?.name ||
                            (location.pathname.includes(rootPath) &&
                              !openNome.name),
                        }
                      )}
                    >
                      {children?.map(({ subName, subPath, subIcon }, inx) => (
                        <NavLink
                          key={inx}
                          to={subPath}
                          className={({ isActive }) =>
                            `w-full px-4 py-1 flex items-center justify-start gap-3 transition-all rounded-sm ${
                              isActive
                                ? "bg-white text-primary"
                                : "text-white hover:text-primary hover:bg-white"
                            }`
                          }
                        >
                          <div>{createElement(subIcon, { size: "17" })}</div>
                          <span> {subName}</span>
                        </NavLink>
                      ))}
                    </div>
                  </li>
                ) : (
                  rootPath !== "settings" && (
                    <li
                      onClick={() => {
                        setOpenNome((c) => ({
                          name: c?.name === name ? null : name,
                        }));
                      }}
                      key={indx}
                    >
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          `w-full px-4 py-3 flex items-center justify-start gap-3 text-lg transition-all rounded-lg ${
                            isActive
                              ? "bg-white text-primary"
                              : "hover:text-primary hover:bg-white text-[20px] text-white"
                          }`
                        }
                      >
                        <div>{createElement(icon, { size: "20" })}</div>
                        <span>{name}</span>
                      </NavLink>
                    </li>
                  )
                )
            )}
          </ul>
        </div>
        <div className="p-4 mt-auto text-center">
          <button
            onClick={handleLogOut}
            className="bg-light-gray w-full text-white font-semibold px-4 py-3 flex items-center justify-start gap-3 text-lg outline-none rounded-full border"
          >
            <TbLogout size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
