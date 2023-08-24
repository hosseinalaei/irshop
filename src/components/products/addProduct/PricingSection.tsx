import React from "react";

const PricingSection = ({
  discountType,
  setDiscountType,
  productPrice,
  setProductPrice,
}: any) => {
  return (
    <>
      {/* <!--begin::Pricing--> */}
      <div className="card card-flush py-4">
        <div className="card-header">
          <div className="card-title">
            <h2>قیمت</h2>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="mb-10 fv-row">
            <label className="required form-label">قیمت اصلی</label>
            <input
              type="text"
              name="price"
              className="form-control mb-2"
              placeholder="قیمت"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            <div className="text-muted fs-7">
              قیمت پایه‌ی محصول را وارد کنید
            </div>
          </div>
          {/* <div className="fv-row mb-10">
            <label className="fs-6 fw-semibold mb-2">
              نوع تخفیف
              <span
                className="ms-1"
                data-bs-toggle="tooltip"
                title="Select a discount type that will be applied to this product"
              >
                <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
              </span>
            </label>
            <div
              className="row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9"
              data-kt-buttons="true"
              data-kt-buttons-target="[data-kt-button='true']"
            >
              <div className="col">
                <label
                  className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                  data-kt-button="true"
                >
                  <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="discount_option"
                      value="1"
                      checked
                      onChange={() => setDiscountType(1)}
                    />
                  </span>
                  <span className="ms-5">
                    <span className="fs-4 fw-bold text-gray-800 d-block">
                      بدون تخفیف
                    </span>
                  </span>
                </label>
              </div>
              <div className="col">
                <label
                  className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                  data-kt-button="true"
                >
                  <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="discount_option"
                      value="2"
                    />
                  </span>
                  <span className="ms-5">
                    <span className="fs-4 fw-bold text-gray-800 d-block">
                      Percentage %
                    </span>
                  </span>
                </label>
              </div>
              <div className="col">
                <label
                  className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                  data-kt-button="true"
                >
                  <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="discount_option"
                      value="3"
                    />
                  </span>
                  <span className="ms-5">
                    <span className="fs-4 fw-bold text-gray-800 d-block">
                      Fixed Price
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div> */}
          {/* <div
            className="d-none mb-10 fv-row"
            id="kt_ecommerce_add_product_discount_percentage"
          >
            <label className="form-label">Set Discount Percentage</label>
            
            <div className="d-flex flex-column text-center mb-5">
              <div className="d-flex align-items-start justify-content-center mb-7">
                <span
                  className="fw-bold fs-3x"
                  id="kt_ecommerce_add_product_discount_label"
                >
                  0
                </span>
                <span className="fw-bold fs-4 mt-1 ms-2">%</span>
              </div>
              <div
                id="kt_ecommerce_add_product_discount_slider"
                className="noUi-sm"
              ></div>
            </div>
            <div className="text-muted fs-7">
              Set a percentage discount to be applied on this product.
            </div>
          </div>
          <div
            className="d-none mb-10 fv-row"
            id="kt_ecommerce_add_product_discount_fixed"
          >
            <label className="form-label">Fixed Discounted Price</label>
            
            <input
              type="text"
              name="dicsounted_price"
              className="form-control mb-2"
              placeholder="Discounted price"
            />
            <div className="text-muted fs-7">
              Set the discounted product price. The product will be reduced at
              the determined fixed price
            </div>
          </div>
          <div className="d-flex flex-wrap gap-5">
            <div className="fv-row w-100 flex-md-root">
              <label className="required form-label">Tax Class</label>
              
              <select
                className="form-select mb-2"
                name="tax"
                data-control="select2"
                data-hide-search="true"
                data-placeholder="Select an option"
              >
                <option></option>
                <option value="0">Tax Free</option>
                <option value="1">Taxable Goods</option>
                <option value="2">Downloadable Product</option>
              </select>
              <div className="text-muted fs-7">
                Set the product tax className.
              </div>
            </div>
            <div className="fv-row w-100 flex-md-root">
              <label className="form-label">VAT Amount (%)</label>
             
              <input type="text" className="form-control mb-2" value="" />
              
              <div className="text-muted fs-7">Set the product VAT about.</div>
             
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PricingSection;
