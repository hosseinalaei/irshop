import React, { useEffect, useState } from "react";

const ProductStatus = ({ product, setProduct }) => {
  const [isExists, setIsExists] = useState(true);

  useEffect(() => {
    console.log(
      "product?.statusproduct?.statusproduct?.status",
      product?.status
    );
    typeof product?.status !== "undefined" && setIsExists(product?.status);
  }, [product?.status]);

  useEffect(() => {
    console.log("isExistsisExistsisExistsisExists", isExists);
    setProduct({ ...product, status: isExists });
  }, [isExists]);

  return (
    <div className="py-4 card card-flush">
      <div className="card-header">
        <div className="card-title">
          <h2>وضعیت</h2>
        </div>
      </div>
      <div className="p-0 px-2 mb-2 card-body">
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
      <div className="px-2 mb-10 fv-row">
        <label className="required form-label">تعداد</label>
        <input
          type="text"
          name="short-description"
          className="mb-2 form-control"
          placeholder="تعداد"
          value={product?.productCount}
          onChange={(e) =>
            setProduct({ ...product, productCount: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default ProductStatus;
