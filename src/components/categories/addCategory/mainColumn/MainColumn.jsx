import React from "react";
import GeneralSection from "./GeneralSection";

const MainColumn = () => {
  return (
    <>
      <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
        <GeneralSection />

        <div className="d-flex justify-content-end">
          <a
            href="../../demo23/dist/apps/ecommerce/catalog/products.html"
            id="kt_ecommerce_add_product_cancel"
            className="btn btn-light me-5"
          >
            Cancel
          </a>
          <button
            type="submit"
            id="kt_ecommerce_add_category_submit"
            className="btn btn-primary"
          >
            <span className="indicator-label">Save Changes</span>
            <span className="indicator-progress">
              Please wait...
              <span className="align-middle spinner-border spinner-border-sm ms-2"></span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MainColumn;
