//Auth
import Error from "../pages/404";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ForgotPassword from "../pages/Auth/ForgotPassword";

import Home from "../pages/Home";
import MemoryDetail from "../pages/MemoryDetail";

//
import Dashboard from "../layout/DashboardLayout";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/SignUp",
    component: SignUp
  },
  {
    path: "/password-recovery",
    component: ForgotPassword
  },
  {
    path: "/memory-detail/:slug",
    component: MemoryDetail
  },
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "*",
    component: Error
  } /* And so on. */
];
export default routes;
