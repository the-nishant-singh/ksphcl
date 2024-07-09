// icons
import CompanyIcon from "../assets/sidebar/company.svg";
import StatIcon from "../assets/sidebar/stats.svg";
import Company from "../containers/Admin/Company";
import Statistics from "../containers/Admin/Statistics";

export const PROTECTED_ROUTES = [];

export const PROTECTED_ROUTES_ADMIN = [
  {
    name: "Dashboard",
    id: "dashboard",
    url: "/dashboard",
    component: Company,
    icon: CompanyIcon,
  },
  {
    name: "Statistics",
    id: "dashboard",
    url: "/statistics",
    component: Statistics,
    icon: StatIcon,
  }
];
