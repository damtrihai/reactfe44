const stateDefault = {
  stateGioHang: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      soLuong: 1,
      gia: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  ],
};

const BaiTapGioHangReducer = (state = stateDefault, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHangCapNhat = [...state.stateGioHang];
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.spGH.maSP);
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGH);
      }
      return { ...state, stateGioHang: gioHangCapNhat };
    }
    default:
      return { ...state };
  }
};
export default BaiTapGioHangReducer;
