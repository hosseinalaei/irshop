import React from "react";

const ProductListHead = () => {
  return (
    <thead>
      <tr className="text-gray-400 fw-bold fs-7 text-uppercase gs-0">
        <th className="min-w-250px">محصول</th>
        <th className="min-w-150px">قیمت (تومان)</th>
        <th className="text-end min-w-70px"></th>
      </tr>
    </thead>
  );
};

export default ProductListHead;
