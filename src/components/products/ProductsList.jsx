"use client";
import React, { useState } from "react";
import ProductListHead from "./ProductListHead";
import ProductsListItem from "./ProductsListItem";
// import { axiosService } from "../../services/axiosService";
import Pagination from "../common/Pagination";

const ProductsList = ({ products, getProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="pt-0 overflow-scroll card-body">
      {/* <!--begin::Table--> */}
      <table
        className="table align-middle table-row-dashed fs-6 gy-5"
        id="kt_ecommerce_category_table"
      >
        <ProductListHead />
        <tbody className="text-gray-600 fw-semibold">
          {currentItems?.map((item, index) => (
            <ProductsListItem
              key={index}
              product={item}
              getProducts={getProducts}
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
        totalPages={Math.ceil(products?.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
      {/* <!--end::Table--> */}
    </div>
  );
};

export default ProductsList;
