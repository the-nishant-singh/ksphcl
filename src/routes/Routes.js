// icons
import CompanyIcon from "../assets/sidebar/company.svg";
import StatIcon from "../assets/sidebar/stats.svg";
import TransactionIcon from "../assets/sidebar/transaction.svg";
import AccountabilityIcon from "../assets/sidebar/accountability.svg";
import FinancialsIcon from "../assets/sidebar/financials.svg";
import Accountability from "../containers/Admin/Accountability";
import Company from "../containers/Admin/Company";
import Statistics from "../containers/Admin/Statistics";
import Transactions from "../containers/Admin/Transaction";
import Finanacials from "../containers/Admin/Financials";

export const PROTECTED_ROUTES = [
  {
    name: "Dashboard",
    id: "dashboard",
    url: "/dashboard",
    component: Company,
    icon: CompanyIcon,
  },
];

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
  },
  {
    name: "Transaction",
    id: "dashboard",
    url: "/transaction",
    component: Transactions,
    icon: TransactionIcon,
  },
  {
    name: "Accountability",
    id: "dashboard",
    url: "/Accountability",
    component: Accountability,
    icon: AccountabilityIcon,
  },
  {
    name: "Financials",
    id: "dashboard",
    url: "/financials",
    component: Finanacials,
    icon: FinancialsIcon,
  },
];
