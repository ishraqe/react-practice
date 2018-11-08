import { check } from "./blogSagas";

export default function* rootSaga() {
  yield [check()];
}
