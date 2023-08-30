import React from "react";
import ProductDetails from "./ProductDetails";
import ProductStatus from "./ProductStatus";
import OriginImageProduct from "./OriginImageProduct";
import PolicySection from "./PolicySection";
import SpecialSection from "./SpecialSection";

const AsideColumn = ({
  setProductCategoryId,
  productCategoryId,
  productStatus,
  setProductStatus,
  setOriginImage,
  setProductPolicy,
  productPolicy,
  setProductSpecial,
  productSpecial,
}: any) => {
  return (
    <div className="mx-5 d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7">
      <OriginImageProduct setOriginImage={setOriginImage} />
      <ProductDetails setProductCategoryId={setProductCategoryId} />
      <ProductStatus
        productStatus={productStatus}
        setProductStatus={setProductStatus}
      />
      <PolicySection
        productPolicy={productPolicy}
        setProductPolicy={setProductPolicy}
      />
      <SpecialSection
        productSpecial={productSpecial}
        setProductSpecial={setProductSpecial}
      />
    </div>
  );
};

export default AsideColumn;
