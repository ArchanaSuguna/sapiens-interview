import React from "react";
import { connect } from "react-redux";
import Product from "../product/product";

import "./productList.style.scss";

const ProductList = (props) => {
  return (
    <>
      <ul className="product-list">
        {props.productsList.map((item, index) => {
          return <Product key={index} productItem={item} />;
        })}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    productsList: state.productsList
  };
};

export default connect(mapStateToProps)(ProductList);
