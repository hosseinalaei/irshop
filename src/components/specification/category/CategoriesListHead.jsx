import React from "react";

const CategoriesListHead = () => {
  return (
    <thead>
      <tr className="text-gray-400 fw-bold fs-7 text-uppercase gs-0">
        <th className="min-w-250px">ویژگی</th>
        <th className="min-w-150px">مقدار</th>
        <th className="text-end min-w-70px"></th>
      </tr>
    </thead>
  );
};

export default CategoriesListHead;
