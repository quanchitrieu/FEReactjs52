const initialState = {
    sanPhamChiTiet: {
        maSanPham: "1",
        tenSanPham: "",
        hinhAnh: "./img/vsphone.jpg",
        manHinh: `AMOLED, 6.2", Full HD+`,
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "6 GB",
    },
    danhSachGioHang: [],
    danhSachSanPham: [
        {
            maSanPham: "1",
            tenSanPham: "VS Phone",
            hinhAnh: "./img/vsphone.jpg",
            manHinh: `AMOLED, 6.2", Full HD+`,
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "6 GB",
            giaTien: "5700000",
        },
        {
            maSanPham: "2",
            tenSanPham: "Meizu phone",
            hinhAnh: "./img/meizuphone.jpg",
            manHinh: `AMOLED, 6.2", Full HD+`,
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "25 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "8 GB",
            rom: "16 GB",
            giaTien: "7600000",
        },
        {
            maSanPham: "3",
            tenSanPham: "Apple phone",
            hinhAnh: "./img/applephone.jpg",
            manHinh: `AMOLED, 6.2", Full HD+`,
            heDieuHanh: "IOS",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "64 GB",
            rom: "86 GB",
            giaTien: "13500000",
        },
    ],
};

const gioHangReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "DETAIL_PRODUCT": {
            state.sanPhamChiTiet = actions.payload;
            return { ...state };
        }



        default:
            break;
    }
    return state;
};

export default gioHangReducer;