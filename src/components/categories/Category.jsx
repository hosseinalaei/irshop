import React, { useEffect, useState } from "react";

import CategoriesList from "./CategoriesList";
import { axiosService } from "../../services/axiosService";
import Loading from "../common/Loading";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategories = () => {
    setLoading(true);
    axiosService
      .get("/Products/product-active-categories")
      .then((res) => {
        setCategories(res?.data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            className="app-container container-xxl"
          >
            <div className="card card-flush">
              <div className="gap-2 py-5 card-header align-items-center gap-md-5">
                <div className="card-title">
                  {/* <div className="my-1 d-flex align-items-center position-relative">
                  <i className="ki-outline ki-magnifier fs-3 position-absolute ms-4"></i>
                  <input
                    type="text"
                    data-kt-ecommerce-category-filter="search"
                    className="form-control form-control-solid w-250px ps-12"
                    placeholder="Search Category"
                  />
                </div> */}
                </div>

                <div className="card-toolbar">
                  <a
                    href="/categories/add-category"
                    className="btn btn-primary"
                  >
                    افزودن دسته‌بندی
                  </a>
                </div>
              </div>
              <CategoriesList categories={categories} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
