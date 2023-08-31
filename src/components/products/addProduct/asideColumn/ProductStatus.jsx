import React from "react";

const ProductStatus = ({ product, setProduct }) => {
  return (
    <div className="py-4 card card-flush">
      <div className="card-header">
        <div className="card-title">
          <h2>وضعیت</h2>
        </div>
      </div>
      <div className="pt-0 card-body">
        <select
          className="mb-2 form-select"
          value={product?.status}
          onChange={(e) => setProduct({ ...product, status: e.target.value })}
        >
          <option></option>
          <option value={true} selected>
            موجود
          </option>
          <option value={false}>ناموجود</option>
        </select>
        <div className="text-muted fs-7">وضعیت موجودی محصول را انتخاب کنید</div>
      </div>
    </div>
  );
};

export default ProductStatus;
