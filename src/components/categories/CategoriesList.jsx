import React, { useEffect, useState } from "react";
import CategoryListItem from "./CategoryListItem";
import CategoryListHead from "./CategoryListHead";
import { axiosService } from "../../services/axiosService";
import Loading from "../common/Loading";

const CategoriesList = ({ loading, categories }) => {
  return (
    <>
      <div className="pt-0 card-body">
        <table
          className="table align-middle table-row-dashed fs-6 gy-5"
          id="kt_ecommerce_category_table"
        >
          <CategoryListHead />
          <tbody className="text-gray-600 fw-semibold">
            {categories?.map((item) => (
              <CategoryListItem
                key={item?.id}
                category={item}
                // title={item?.title}
                // urlTitle={item?.urlTitle}
              />
            ))}
            {/* <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem /> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoriesList;
