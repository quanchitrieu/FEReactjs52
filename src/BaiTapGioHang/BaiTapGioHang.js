/**
 * các bước thực hiện :
 * 1. dàn layout ( html css ) - done
 * 2. xác định data thay đổi và lưu vào state - done
 * 3. lấy data trong state đi binding ra jsx - done
 * 4. render mãng dử liệu - done
 * 5. xây dựng chức năng xem chi tiết - done
 * 6. xây dựng chức năng thêm giỏ hàng
 * 7. xây dựng chức năng xóa sp khoải giỏ hàng
 * 8. xây dựng chức năng tăng giảm số lượng
 * 9. xây dựng chức năng hiển thị tông số sản phẩm
 */

import React, { Component } from "react";
import SanPham from "./SanPham";
import Modal from "./Modal";

export default class BaiTapGioHang extends Component {
  danhSachSanPham = [
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
      giaTien: "	7600000",
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
  ];

  state = {
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
  };


  handleDelete = (cart) => {
    let danhSachGioHang = this.state.danhSachGioHang;
    danhSachGioHang = danhSachGioHang.filter((item) => {
      return cart.maSanPham !== item.maSanPham
    });
    this.setState({ danhSachGioHang });
  };

  handleAddSanPham = (sanPham) => {
    console.log("sanPham:", sanPham);
    let danhSachGioHang = [...this.state.danhSachGioHang];
    /**
     * findIndex tìm xem có tồn tại trong mãng hay không :
     * nếu có tồn tại trả về index 
     * nếu ko tồn tại trả về -1
     */

    const index = danhSachGioHang.findIndex((cart) => {
      return cart.maSanPham === sanPham.maSanPham;
    });
    if (index !== -1) {
      // tìm thấy
      // cập nhật số lượng
      danhSachGioHang[index].soLuong += 1;
    } else {
      //  không tìm thấy
      //  set số lượng = 1 , push vào mảng
      sanPham.soLuong = 1;
      // danhSachGioHang.push(sanPham);
      danhSachGioHang = [...danhSachGioHang, sanPham];
    }



    this.setState({
      danhSachGioHang: danhSachGioHang,
    });

  };

  handleDetail = (sanPham) => {
    console.log("run handleDetail");
    this.setState({
      sanPhamChiTiet: sanPham,
    })
  };

  renderDanhSachSanPham = () => {
    return this.danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4" key={index} >
          <SanPham handleAddSanPham={this.handleAddSanPham} handleDetail={this.handleDetail} sanPham={sanPham} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div>
          <section className="container">
            <h3 className="title text-center">Bài tập giỏ hàng</h3>
            <div className="container text-center my-2">
              <button
                className="btn btn-danger "
                data-toggle="modal"
                data-target="#modelId"
              >
                Giỏ hàng (5)
              </button>
            </div>
            <div className="container">
              <div className="row">{this.renderDanhSachSanPham()}</div>
            </div>
            <Modal handleDelete={this.handleDelete} danhSachGioHang={this.state.danhSachGioHang} />
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.state.sanPhamChiTiet.hinhAnh}
                  alt="hinh"
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.state.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.state.sanPhamChiTiet.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.state.sanPhamChiTiet.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
