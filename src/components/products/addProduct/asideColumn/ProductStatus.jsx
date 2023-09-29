import React, { useEffect, useState } from "react";

const ProductStatus = ({ product, setProduct }) => {
  const [isExists, setIsExists] = useState(true);

  useEffect(() => {
    product?.status !== undefined && setIsExists(product?.status);
  }, [product?.status]);

  useEffect(() => {
    setProduct({ ...product, status: isExists });
  }, [isExists]);

  console.log("product?.statusproduct?.statusproduct?.status", product?.status);
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
          value={isExists}
          onChange={(e) => setIsExists(e.target.value)}
        >
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
