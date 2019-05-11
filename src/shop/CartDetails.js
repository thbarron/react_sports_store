import React, { Component } from "react";
import { Link } from "react-router-dom";
import moduleName from "./CartDetailsRows";

export class CartDetails extends Component {
  getLinkClasses = () => `btn btn-secondary m-1
        ${this.props.cartItems === 0 ? "disabled" : ""}`;

  render() {
    return (
      <div className="m-3">
        <h2 className="text-center">Your Cart</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Product</th>
              <th className="text-right">Price</th>
              <th className="text-right">Subtotal</th>
              <th />
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
