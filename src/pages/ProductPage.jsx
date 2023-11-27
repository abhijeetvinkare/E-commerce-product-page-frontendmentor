import React from "react";
import "./ProductPage.css";
import InfoComponent from "./InfoComponent";
import ImageComponent from "./ImageComponent";

function ProductPage() {


  return (
    <div className="product-container">
      <ImageComponent />
      <InfoComponent />
    </div>
  );
}

export default ProductPage;
