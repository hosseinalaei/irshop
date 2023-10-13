import React from "react";

const CategoryListHead = () => {
  return (
    <>
      <thead>
        <tr className="text-gray-400 fw-bold fs-7 text-uppercase gs-0">
          <th className="w-10px pe-2"></th>
          <th className="min-w-250px ">دسته‌بندی</th>
          <th className="text-end min-w-70px"></th>
        </tr>
      </thead>
    </>
  );
};

export default CategoryListHead;
