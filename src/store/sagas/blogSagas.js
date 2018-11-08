import { CLOSE_TOGGLE_MENU } from "../actions/types";
import { call, put, takeEvery, all } from "redux-saga/effects";

export function* check(action) {
  yield put({
    type: "çhecking"
  });
}

// export function* closeNavToggleMenu(action) {
//   yield put({
//     type: CLOSE_TOGGLE_MENU
//   });
// }
