import React, { useState } from "react";
import SpecsListHead from "./SpecsListHead";
import SpecsListItem from "./SpecsListItem";
import Pagination from "../common/Pagination";

const SpecsList = ({ specs, getSpecs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = specs?.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="pt-0 overflow-scroll card-body">
      {/* <!--begin::Table--> */}
      <table
        className="table align-middle table-row-dashed fs-6 gy-5"
        id="kt_ecommerce_category_table"
      >
        <SpecsListHead />
        <tbody className="text-gray-600 fw-semibold">
          {currentItems?.map(
            (item, index) =>
              !item?.isDelete && (
                <SpecsListItem key={index} spec={item} getSpecs={getSpecs} />
              )
          )}
          {/* <ProductsListItem />
        <ProductsListItem />
        <ProductsListItem /> */}
        </tbody>
        {/* <!--end::Table body--> */}
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(specs?.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
      {/* <!--end::Table--> */}
    </div>
  );
};

export default SpecsList;
