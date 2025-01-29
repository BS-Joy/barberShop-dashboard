import { CiSettings, CiUser } from "react-icons/ci";
import {
  HiOutlineLibrary,
  HiOutlineCreditCard,
  HiOutlineViewGridAdd,
  HiOutlineCog,
} from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import Users from "../pages/Main/Users/Users";
import MyProfile from "../pages/Profile/MyProfile";
import EditMyProfile from "../pages/Profile/EditMyProfile";
import TermsConditions from "../pages/Settings/TermsConditions";
import EditTermsConditions from "../pages/Settings/EditTermsConditions";
import PrivacyPolicy from "../pages/Settings/PrivacyPolicy";
import EditPrivacyPolicy from "../pages/Settings/EditPrivacyPolicy";
import EditAboutUs from "../pages/Settings/EditAboutUs";
import AboutUs from "../pages/Settings/AboutUs";
import Notifications from "../pages/Main/Notifications/Notifications";
import { HiOutlineUserGroup } from "react-icons/hi2";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineSecurityUpdateWarning,
} from "react-icons/md";
import { TbPhoto } from "react-icons/tb";
import HostDetails from "../pages/Main/Host/HostDetails";
import { LuWallet } from "react-icons/lu";
import { FaServicestack } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiHandWithdrawBold } from "react-icons/pi";
import StudioPost from "../pages/Main/ApproveRequest/StudioPost";
import TrainerPost from "../pages/Main/ApproveRequest/TrainerPost";
import Review from "../pages/Main/Users/Review";
import StudioList from "../pages/Main/StudioList/StudioList";
import TrainerList from "../pages/Main/TrainerList/TrainerList";
import { GoDotFill } from "react-icons/go";
import MessagePage from "../Components/Messages/MessagePage";
import SalonRequestPage from "../pages/Main/Salon/request/SalonRequestPage";
import SalonInformationPage from "../pages/Main/Salon/information/SalonInformationPage";
import SalonBlockListPage from "../pages/Main/Salon/blockList/SalonBlockListPage";
import BannerPage from "../pages/Main/banner/BannerPage";
import AddBannerPage from "../pages/Main/banner/AddBannerPage";
import CategoryPage from "../pages/Main/category/CategoryPage";
import AddCategoryPage from "../pages/Main/category/AddCategoryPage";
import EditCategoryPage from "../pages/Main/category/EditCategoryPage";
import ChangePasswordPage from "../pages/Settings/ChangePasswordPage";
import SettingPage from "../pages/Settings/SettingPage";

export const dashboardItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LuLayoutDashboard,
    element: <DashboardHome />,
  },
  {
    name: "Users",
    path: "users",
    icon: HiOutlineUserGroup,
    element: <Users />,
  },
  {
    name: "Salons",
    rootPath: "salon",
    icon: HiOutlineLibrary,
    children: [
      {
        name: "Salon Request",
        path: "salon/salon-request",
        // icon: LuWallet,
        icon: GoDotFill,
        element: <SalonRequestPage />,
      },
      {
        name: "Salon Information",
        path: "salons/salon-information",
        // icon: PiHandWithdrawBold,
        icon: GoDotFill,
        element: <SalonInformationPage />,
      },
      {
        name: "Block List",
        path: "salon/salon-block-list",
        // icon: LuWallet,
        icon: GoDotFill,
        element: <SalonBlockListPage />,
      },
    ],
  },
  {
    name: "Income",
    rootPath: "income",
    icon: HiOutlineCreditCard,
    children: [
      {
        name: "Daily",
        path: "income/dalily",
        // icon: LuWallet,
        icon: GoDotFill,
        element: <StudioPost />,
      },
      {
        name: "Weekly",
        path: "income/weekly",
        // icon: PiHandWithdrawBold,
        icon: GoDotFill,
        element: <TrainerPost />,
      },
      {
        name: "Monthly",
        path: "income/monthly",
        // icon: LuWallet,
        icon: GoDotFill,
        element: <StudioPost />,
      },
      {
        name: "Wallet",
        path: "income/wallet",
        // icon: LuWallet,
        icon: GoDotFill,
        element: <StudioPost />,
      },
    ],
  },
  {
    path: "notifications",
    element: <Notifications />,
  },
  {
    // name: "Profile",
    path: "profile",
    // icon: CiUser,
    // icon: GoDotFill,
    element: <MyProfile />,
  },
  {
    path: "profile/edit-profile",
    element: <EditMyProfile />,
  },
  {
    path: "messages",
    element: <MessagePage />,
  },
  {
    path: "/reviews",
    element: <Review></Review>,
  },
  // {
  //   name: "Users",
  //   path: "users",
  //   icon: FaUsers,
  //   element: <Guests />,
  // },
  {
    name: "Banner",
    path: "banner",
    icon: TbPhoto,
    element: <BannerPage />,
  },
  {
    // name: "Banner",
    path: "banner/add-banner",
    // icon: TbPhoto,
    element: <AddBannerPage />,
  },
  {
    name: "Categories",
    path: "categories",
    icon: HiOutlineViewGridAdd,
    element: <CategoryPage />,
  },
  {
    // name: "Banner",
    path: "categories/add-category",
    // icon: TbPhoto,
    element: <AddCategoryPage />,
  },
  {
    // name: "Banner",
    path: "categories/edit-category",
    // icon: TbPhoto,
    element: <EditCategoryPage />,
  },
  {
    path: "/hosts/:id",
    element: <HostDetails />,
  },
  {
    name: "Settings",
    path: "settings",
    icon: HiOutlineCog,
    element: <SettingPage />,
  },

  {
    name: "Settings",
    rootPath: "settings",
    icon: HiOutlineCog,
    children: [
      {
        name: "Change Password",
        // icon: FaServicestack,
        icon: GoDotFill,
        path: "settings/change-password",
        element: <ChangePasswordPage />,
      },
      {
        name: "Terms & Services",
        // icon: FaServicestack,
        icon: GoDotFill,
        path: "settings/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "settings/terms-conditions/edit",
        element: <EditTermsConditions />,
      },
      {
        name: "Privacy Policy",
        // icon: MdOutlineSecurityUpdateWarning,
        icon: GoDotFill,
        path: "settings/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "settings/privacy-policy/edit",
        element: <EditPrivacyPolicy />,
      },
      {
        name: "About Us",
        // icon: BiMessageSquareDetail,
        icon: GoDotFill,
        path: "settings/about-us",
        element: <AboutUs />,
      },
      {
        path: "settings/about-us/edit",
        element: <EditAboutUs />,
      },
    ],
  },
];
