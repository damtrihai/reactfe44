import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";

// rootReducer quản lý state của toàn ứng dụng
const rootReducer = combineReducers({
  // Nơi khai báo các state (reducer) theo từng nghiệp vụ
  // GioHangReducer chứa stateGioHang
  GioHangReducer: BaiTapGioHangReducer,
});

export default rootReducer;
