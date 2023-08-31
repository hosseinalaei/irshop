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
          id="kt_ecommerce_add_product_submit"
          className="btn btn-primary"
        >
          <span className="indicator-label">ثبت</span>
          <span className="indicator-progress">
            Please wait...
            <span className="align-middle spinner-border spinner-border-sm ms-2"></span>
          </span>
        </button>
        <a
          href="/products"
          id="kt_ecommerce_add_product_cancel"
          className="btn btn-light me-5"
        >
          انصراف
        </a>
      </div>
    </div>
  );
};

export default MainColumn;
