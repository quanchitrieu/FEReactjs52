import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        return (
            <tr>
                <td> {this.props.cart.maSanPham} </td>
                <td> {this.props.cart.tenSanPham} </td>
                <td>
                    <img src={this.props.cart.hinhAnh} width={50} alt="hinh" />
                </td>
                <td>
                    <button>-</button> {this.props.cart.soLuong}
                    <button>+</button>
                </td>
                <td> {this.props.cart.giaTien} </td>
                <td> {this.props.cart.giaTien * this.props.cart.soLuong} </td>
                <td>
                    <button className="btn btn-danger"
                        onClick={() => {
                            this.props.handleDelete(this.props.cart);
                        }}
                    >Delete</button>
                </td>
            </tr >
        )
    }
}
