import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import Loading from "../common/Loading";
import { axiosService } from "../../services/axiosService";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Button from "../common/Button";
import useAxios from "../../hooks/useAxios";

const Products = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const httpRequest = useAxios();
  const getProducts = () => {
    // axiosService.get("/Products/getAllactiveproducts")
    httpRequest({
      url: "/Products/getAllactiveproducts",
      method: "GET",
    })
      .then((res) => {
        setProducts(res?.data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ToastContainer />
          <div className="flex-column-fluid">
            <div className="container-xxl">
              <div className="m-3 page-title d-flex flex-column justify-content-center">
                <h1 className="my-0 page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center">
                  لیست محصولات
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
                    محصولات
                  </li>

                  {/* <li className="breadcrumb-item text-muted">نقش‌ها</li> */}
                </ul>
              </div>
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
                    <Button onClick={() => nav("/admin/products/add-product")}>
                      محصول جدید
                    </Button>
                  </div>
                </div>
                <ProductsList products={products} getProducts={getProducts} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Products;
