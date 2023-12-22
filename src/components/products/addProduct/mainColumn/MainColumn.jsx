import React from "react";
import GeneralSection from "./GeneralSection";
import MediaSection from "./MediaSection";
import PricingSection from "./PricingSection";
import SelectColor from "./SelectColor";
import Details from "./Details";
import Button from "../../../common/Button";
import { NavLink } from "react-router-dom";
import Specification from "../asideColumn/Specification";

const MainColumn = ({
  product,
  setProduct,
  submitProduct,
  selectedProduct,
  loading,
  setSelectedProduct,
}) => {
  return (
    <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="kt_ecommerce_add_product_general"
        >
          <div className="d-flex flex-column gap-7 gap-lg-10">
            <GeneralSection product={product} setProduct={setProduct} />
            <MediaSection
              product={product}
              setProduct={setProduct}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
            {/* <PricingSection product={product} setProduct={setProduct} /> */}
            <SelectColor product={product} setProduct={setProduct} />
            <Specification product={product} setProduct={setProduct} />
            <Details product={product} setProduct={setProduct} />
          </div>
        </div>
      </div>

      <div className="items-center d-flex justify-content-end">
        <NavLink
          className="mx-5 text-xl font-semibold text-black"
          to={{
            pathname: `/admin/products`,
          }}
        >
          بازگشت
        </NavLink>
        <Button
          className="px-10 text-2xl"
          onClick={(e) => submitProduct(e)}
          isLoading={loading}
        >
          ثبت
        </Button>
      </div>
    </div>
  );
};

export default MainColumn;
