import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.sanPham.hinhAnh} alt="hinh" />
        <div className="card-body">
          <h4 className="card-title">{this.props.sanPham.tenSanPham}</h4>
          <button className="btn btn-success"
            onClick={() => { this.props.handleDetail(this.props.sanPham); }}
          >Chi tiết</button>
          <button className="btn btn-danger"
            onClick={() => { this.props.handleAddSanPham(this.props.sanPham); }}
          >Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // key : value
    // key là props component : value là phương thức gửi action lên store 
    handleDetail: (sanPham) => {
      const action = {
        type: "DETAIL_PRODUCT",
        payload: sanPham,
      };
      dispatch(action);
    }
  };
};

export default connect(null, mapDispatchToProps)(SanPham);