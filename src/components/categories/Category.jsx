import React, { useEffect, useState } from "react";

import CategoriesList from "./CategoriesList";
import { axiosService } from "../../services/axiosService";
import Loading from "../common/Loading";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useAxios from "../../hooks/useAxios";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const httpRequest = useAxios();

  const getCategories = () => {
    // setLoading(true);
    // axiosService
    //   .get("/Category/product-active-categories")
    httpRequest({
      url: "/Category/product-active-categories",
      method: "GET",
    })
      .then((res) => {
        setCategories(res.data);
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
        <>
          <ToastContainer />
          <div className="m-3 page-title d-flex flex-column justify-content-center">
            <h1 className="my-0 page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center">
              دسته‌بندی‌ها
            </h1>

            <ul className="pt-1 my-0 breadcrumb breadcrumb-separatorless fw-semibold fs-7">
              <NavLink
                to="/"
                className="text-lg font-bold text-black hover:text-red-500"
              >
                صفحه اصلی
              </NavLink>

              <li className="breadcrumb-item">/</li>
              <li className="text-lg font-bold text-black hover:text-red-500">
                لیست دسته‌بندی‌ها
              </li>

              {/* <li className="breadcrumb-item text-muted">نقش‌ها</li> */}
            </ul>
          </div>
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div id="kt_app_content_container" className="container-xxl">
              <div className="card card-flush">
                <div className="gap-2 py-5 card-header align-items-center gap-md-5">
                  <div className="card-title"></div>

                  <div className="px-4 py-2 bg-blue-500 rounded-md shadow-sm hover:shadow-md hover:bg-blue-600">
                    <a
                      href="/admin/categories/add-category"
                      className="text-white"
                    >
                      افزودن دسته‌بندی
                    </a>
                  </div>
                </div>
                <CategoriesList
                  categories={categories}
                  getCategories={getCategories}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Category;
