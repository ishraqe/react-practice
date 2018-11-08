import { CLOSE_TOGGLE_MENU } from "../actions/types";
import { call, put, takeEvery, all } from "redux-saga/effects";

export function* check(action) {
  console.log(action, "getData");
  yield put({
    type: "çhecking"
  });
}
