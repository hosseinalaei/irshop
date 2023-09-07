import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import Loading from "../common/Loading";
import { axiosService } from "../../services/axiosService";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axiosService
      .get("/Products/getLastProduct")
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
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div className="app-container container-xxl">
            <div className="m-3 page-title d-flex flex-column justify-content-center">
              <h1 className="my-0 page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center">
                لیست محصولات
              </h1>

              <ul className="pt-1 my-0 breadcrumb breadcrumb-separatorless fw-semibold fs-7">
                <li className="breadcrumb-item text-muted">
                  <a href="/" className="text-muted text-hover-primary">
                    صفحه اصلی
                  </a>
                </li>

                <li className="breadcrumb-item">
                  <span className="bg-gray-400 bullet w-5px h-2px"></span>
                </li>

                <li className="breadcrumb-item text-muted">محصولات</li>
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
                  <a
                    href="/products/add-product"
                    className="text-white btn btn-primary"
                  >
                    محصول جدید
                  </a>
                </div>
              </div>
              <ProductsList products={products} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
