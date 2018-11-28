import { CLOSE_TOGGLE_MENU, CHECK } from "./types";
import history from "../../routes/history";
export const closeMenu = () => {
  return {
    type: CLOSE_TOGGLE_MENU
  };
};

export const chckRouter = () => {
  // setTimeout(() => {
  //   history.push("/login");
  // }, 500);
  return {
    type: "auth",
    isAuth: true
  };
};
