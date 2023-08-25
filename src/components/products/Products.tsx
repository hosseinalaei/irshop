import React, { useEffect } from "react";
import axios from "axios";
import ProductListHead from "./ProductListHead";
import ProductsList from "./ProductsList";

const AddCategory = () => {
  return (
    <>
      <div id="kt_app_content" className="app-content flex-column-fluid">
        <div
          id="kt_app_content_container"
          className="app-container container-xxl"
        >
          <div className="card card-flush">
            <div className="gap-2 py-5 card-header align-items-center gap-md-5">
              {/* <!--begin::Card title--> */}
              <div className="card-title">
                {/* <!--begin::Search--> */}
                <div className="my-1 d-flex align-items-center position-relative">
                  <i className="ki-outline ki-magnifier fs-3 position-absolute ms-4"></i>
                  <input
                    type="text"
                    data-kt-ecommerce-category-filter="search"
                    className="form-control form-control-solid w-250px ps-12"
                    placeholder="Search Category"
                  />
                </div>
                {/* <!--end::Search--> */}
              </div>
              {/* <!--end::Card title--> */}
              {/* <!--begin::Card toolbar--> */}
              <div className="card-toolbar">
                {/* <!--begin::Add customer--> */}
                <a
                  href="/products/add-product"
                  className="btn btn-primary text-white"
                >
                  محصول جدید
                </a>
                {/* <!--end::Add customer--> */}
              </div>
              {/* <!--end::Card toolbar--> */}
            </div>
            <ProductsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
