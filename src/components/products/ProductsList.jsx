"use client";
import React, { useEffect, useState } from "react";
import ProductListHead from "./ProductListHead";
import ProductsListItem from "./ProductsListItem";
import { axiosService } from "../../services/axiosService";

const ProductsList = ({ products }) => {
  return (
    <div className="pt-0 card-body">
      {/* <!--begin::Table--> */}
      <table
        className="table align-middle table-row-dashed fs-6 gy-5"
        id="kt_ecommerce_category_table"
      >
        <ProductListHead />
        <tbody className="text-gray-600 fw-semibold">
          {products?.map((item, index) => (
            <ProductsListItem key={index} product={item} />
          ))}
          {/* <ProductsListItem />
          <ProductsListItem />
          <ProductsListItem /> */}
        </tbody>
        {/* <!--end::Table body--> */}
      </table>
      {/* <!--end::Table--> */}
    </div>
  );
};

export default ProductsList;
