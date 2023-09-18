import React from "react";
import ProductDetails from "../ProductDetails";
import ProductStatus from "./ProductStatus";
import OriginImageProduct from "./OriginImageProduct";
import PolicySection from "./PolicySection";
import SpecialSection from "./SpecialSection";

const AsideColumn = ({ product, setProduct, selectedProduct }) => {
  return (
    <div className="mx-5 d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7">
      <OriginImageProduct
        product={product}
        setProduct={setProduct}
        selectedProduct={selectedProduct}
      />
      <ProductDetails product={product} setProduct={setProduct} />
      <ProductStatus product={product} setProduct={setProduct} />
      <PolicySection product={product} setProduct={setProduct} />
      <SpecialSection product={product} setProduct={setProduct} />
    </div>
  );
};

export default AsideColumn;
