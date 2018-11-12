import Dashboard from "../pages/DashboardPages/Dashboard";
import Create from "../pages/DashboardPages/Create";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard
  },
  {
    path: "/dashboard/create",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Create
  }
];
export default dashRoutes;
