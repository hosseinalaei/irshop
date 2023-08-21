import React from "react";
import CategoryListItem from "./CategoryListItem";
import CategoryListHead from "./CategoryListHead";

const CategoriesList = () => {
  return (
    <>
      <div className="pt-0 card-body">
        <table
          className="table align-middle table-row-dashed fs-6 gy-5"
          id="kt_ecommerce_category_table"
        >
          <CategoryListHead />
          <tbody className="text-gray-600 fw-semibold">
            <CategoryListItem />
            <CategoryListItem />
            <CategoryListItem />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoriesList;
