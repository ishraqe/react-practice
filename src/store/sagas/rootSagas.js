import { check, closeNavToggleMenu } from "./blogSagas";

export default function* rootSaga() {
  yield [check(), closeNavToggleMenu()];
}
