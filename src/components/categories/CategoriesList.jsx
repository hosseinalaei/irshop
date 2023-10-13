import React, { useEffect, useState } from "react";
import CategoryListItem from "./CategoryListItem";
import CategoryListHead from "./CategoryListHead";
// import { axiosService } from "../../services/axiosService";
// import Loading from "../common/Loading";
import Pagination from "../common/Pagination";

const CategoriesList = ({ loading, categories, getCategories }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categories?.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>
      <div className="pt-0 card-body">
        <table
          className="table align-middle table-row-dashed fs-6 gy-5"
          id="kt_ecommerce_category_table"
        >
          <CategoryListHead />
          <tbody className="text-gray-600 fw-semibold">
            {currentItems?.map((item) => (
              <CategoryListItem
                key={item?.id}
                category={item}
                getCategories={getCategories}
                // title={item?.title}
                // urlTitle={item?.urlTitle}
              />
            ))}
            {/* <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem /> */}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(categories?.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default CategoriesList;
