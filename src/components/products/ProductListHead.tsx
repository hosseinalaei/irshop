import React from "react";

const ProductListHead = () => {
  return (
    <thead>
      <tr className="text-gray-400 fw-bold fs-7 text-uppercase gs-0">
        <th className="w-10px pe-2">
          <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
            <input
              className="form-check-input"
              type="checkbox"
              data-kt-check="true"
              data-kt-check-target="#kt_ecommerce_category_table .form-check-input"
              value="1"
            />
          </div>
        </th>
        <th className="min-w-250px">دسته‌بندی</th>
        <th className="min-w-150px">نوع</th>
        <th className="text-end min-w-70px"></th>
      </tr>
    </thead>
  );
};

export default ProductListHead;
