import React, { useState } from "react";
import GroupsListHead from "./CategoriesListHead";
import { CategoriesListItem, GroupsListItem } from "./CategoriesListItem";
import Pagination from "../../common/Pagination";
import CategoriesListHead from "./CategoriesListHead";

const CategoriesList = ({ categories, values, getCategories }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = values?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="card card-flush">
      <div className="pt-0 overflow-scroll card-body">
        {/* <!--begin::Table--> */}
        <table
          className="table align-middle table-row-dashed fs-6 gy-5"
          id="kt_ecommerce_category_table"
        >
          <CategoriesListHead />
          <tbody className="text-gray-600 fw-semibold">
            {currentItems?.map((item, index) => (
              <CategoriesListItem
                key={index}
                category={item}
                getCategories={getCategories}
                // getSpecs={getSpecs}
              />
            ))}
            {/* <ProductsListItem />
    <ProductsListItem />
    <ProductsListItem /> */}
          </tbody>
          {/* <!--end::Table body--> */}
        </table>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(categories?.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
        {/* <!--end::Table--> */}
      </div>
    </div>
  );
};

export default CategoriesList;
