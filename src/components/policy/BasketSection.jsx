import React from "react";

const BasketSection = ({ policy, setPolicy }) => {
  return (
    <div className="p-10">
      {/* <div className="mb-10 fv-row">
        <label className="mb-2 fs-6 fw-semibold">
          نوع سبد خرید
          <span
            className="ms-1"
            data-bs-toggle="tooltip"
            title="Select a discount type that will be applied to this product"
          >
            <i className="text-gray-500 ki-outline ki-information-5 fs-6"></i>
          </span>
        </label>
        <div
          className="row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9"
          data-kt-buttons="true"
          data-kt-buttons-target="[data-kt-button='true']"
        >
          <div className="col">
            <label
              className="p-6 btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start"
              data-kt-button="true"
            >
              <span className="mt-1 form-check form-check-custom form-check-solid form-check-sm align-items-start">
                <input
                  className="form-check-input"
                  type="radio"
                  name="discount_option"
                  value="1"
                  checked
                  //   onChange={() => setDiscountType(1)}
                />
              </span>
              <span className="ms-5">
                <span className="text-gray-800 fs-4 fw-bold d-block">
                  بدون تخفیف
                </span>
              </span>
            </label>
          </div>
          <div className="col">
            <label
              className="p-6 btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start"
              data-kt-button="true"
            >
              <span className="mt-1 form-check form-check-custom form-check-solid form-check-sm align-items-start">
                <input
                  className="form-check-input"
                  type="radio"
                  name="discount_option"
                  value="2"
                />
              </span>
              <span className="ms-5">
                <span className="text-gray-800 fs-4 fw-bold d-block">
                  Percentage %
                </span>
              </span>
            </label>
          </div>
          <div className="col">
            <label
              className="p-6 btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start"
              data-kt-button="true"
            >
              <span className="mt-1 form-check form-check-custom form-check-solid form-check-sm align-items-start">
                <input
                  className="form-check-input"
                  type="radio"
                  name="discount_option"
                  value="3"
                />
              </span>
              <span className="ms-5">
                <span className="text-gray-800 fs-4 fw-bold d-block">
                  Fixed Price
                </span>
              </span>
            </label>
          </div>
        </div>
      </div> */}
      {/* <div
        className="mb-10 d-none fv-row"
        id="kt_ecommerce_add_product_discount_percentage"
      >
        <label className="form-label">Set Discount Percentage</label>

        <div className="mb-5 text-center d-flex flex-column">
          <div className="d-flex align-items-start justify-content-center mb-7">
            <span
              className="fw-bold fs-3x"
              id="kt_ecommerce_add_product_discount_label"
            >
              0
            </span>
            <span className="mt-1 fw-bold fs-4 ms-2">%</span>
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
        className="mb-10 d-none fv-row"
        id="kt_ecommerce_add_product_discount_fixed"
      >
        <label className="form-label">Fixed Discounted Price</label>

        <input
          type="text"
          name="dicsounted_price"
          className="mb-2 form-control"
          placeholder="Discounted price"
        />
        <div className="text-muted fs-7">
          Set the discounted product price. The product will be reduced at the
          determined fixed price
        </div>
      </div> */}
      <div className="flex-wrap gap-5 d-flex">
        <div className="fv-row w-100 flex-md-root">
          <label className="required form-label">اولویت سبد خرید</label>
          <input
            type="text"
            className="mb-2 form-control"
            value={policy?.basket?.basketPriority}
            onChange={(e) =>
              setPolicy({
                ...policy,
                basket: { ...policy.basket, basketPriority: e.target.value },
              })
            }
          />

          {/* <select
            className="mb-2 form-select"
            name="tax"
            data-control="select2"
            data-hide-search="true"
            data-placeholder="Select an option"
          >
            <option></option>
            <option value="High">بالا</option>
            <option value="Low">پایین</option>
            <option value="normal">نرمال</option>
          </select> */}
          {/* <div className="text-muted fs-7">Set the product tax className.</div> */}
        </div>
        <div className="fv-row w-100 flex-md-root">
          <label className="form-label">اولویت سبد خرید</label>

          <input
            type="text"
            className="mb-2 form-control"
            value={policy?.basket?.basketType}
            onChange={(e) =>
              setPolicy({
                ...policy,
                basket: { ...policy.basket, basketType: e.target.value },
              })
            }
          />

          {/* <div className="text-muted fs-7">Set the product VAT about.</div> */}
        </div>
        <div className="fv-row w-100 flex-md-root">
          <label className="form-label">basketSpecial</label>

          <input
            type="text"
            className="mb-2 form-control"
            value={policy?.basket?.basketSpecial}
            onChange={(e) =>
              setPolicy({
                ...policy,
                basket: { ...policy.basket, basketSpecial: e.target.value },
              })
            }
          />

          {/* <div className="text-muted fs-7">Set the product VAT about.</div> */}
        </div>
      </div>
      <div className="flex-wrap gap-5 d-flex">
        <div className="fv-row w-100 flex-md-root">
          <label className="form-label">تعداد محصول در سبد</label>

          <input
            type="text"
            className="mb-2 form-control"
            value={policy?.basket?.basketProductCount}
            onChange={(e) =>
              setPolicy({
                ...policy,
                basket: {
                  ...policy.basket,
                  basketProductCount: e.target.value,
                },
              })
            }
          />

          <div className="text-muted fs-7">لطفا عدد وارد کنید</div>
        </div>
        <div className="fv-row w-100 flex-md-root">
          <label className="form-label">زمان اعتبار سبد خرید</label>

          <input
            type="text"
            className="mb-2 form-control"
            value={policy?.basket?.basketDuration}
            onChange={(e) =>
              setPolicy({
                ...policy,
                basket: { ...policy.basket, basketDuration: e.target.value },
              })
            }
          />

          <div className="text-muted fs-7">لطفا عدد وارد کنید</div>
        </div>
      </div>
    </div>
  );
};

export default BasketSection;
