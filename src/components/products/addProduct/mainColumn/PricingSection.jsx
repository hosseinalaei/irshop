import React from "react";

const PricingSection = ({ product, setProduct }) => {
  return (
    <>
      <div className="py-4 card card-flush">
        <div className="card-header">
          <div className="card-title">
            <h2>قیمت</h2>
          </div>
        </div>
        <div className="pt-0 card-body">
          <div className="mb-10 fv-row">
            <label className="required form-label">قیمت اصلی</label>
            <input
              type="text"
              name="price"
              className="mb-2 form-control"
              placeholder="قیمت"
              value={product?.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
            <div className="text-muted fs-7">
              قیمت پایه‌ی محصول را وارد کنید
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSection;
