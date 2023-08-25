import React, { useEffect } from "react";
import axios from "axios";
import CategoriesList from "./CategoriesList";

const AddCategory = () => {
  // const getCategories = () => {
  //   axios
  //     .get(`https://shop.ir/AdminProducts/get-product-for-edit/{id}`)
  //     .then((res) => console.log("rrrrrrrrrrrrr", res));
  // };

  // useEffect(() => {
  //   getCategories();
  // }, []);
  return (
    <>
      <div id="kt_app_content" className="app-content flex-column-fluid">
        <div
          id="kt_app_content_container"
          className="app-container container-xxl"
        >
          <div className="card card-flush">
            <div className="gap-2 py-5 card-header align-items-center gap-md-5">
              <div className="card-title">
                <div className="my-1 d-flex align-items-center position-relative">
                  <i className="ki-outline ki-magnifier fs-3 position-absolute ms-4"></i>
                  <input
                    type="text"
                    data-kt-ecommerce-category-filter="search"
                    className="form-control form-control-solid w-250px ps-12"
                    placeholder="Search Category"
                  />
                </div>
              </div>

              <div className="card-toolbar">
                <a href="/categories/add-category" className="btn btn-primary">
                  Add Category
                </a>
              </div>
            </div>
            <CategoriesList />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
