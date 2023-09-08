import React from "react";
import GeneralSection from "./GeneralSection";
import MediaSection from "./MediaSection";
import PricingSection from "./PricingSection";
import SelectColor from "./SelectColor";

const MainColumn = ({ product, setProduct, submitProduct }) => {
  return (
    <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="kt_ecommerce_add_product_general"
          role="tab-panel"
        >
          <div className="d-flex flex-column gap-7 gap-lg-10">
            <GeneralSection product={product} setProduct={setProduct} />
            <MediaSection product={product} setProduct={setProduct} />
            <PricingSection product={product} setProduct={setProduct} />
            <SelectColor product={product} setProduct={setProduct} />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button
          onClick={(e) => submitProduct(e)}
          className="px-10 py-2 text-2xl font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          ثبت
        </button>
      </div>
    </div>
  );
};

export default MainColumn;
