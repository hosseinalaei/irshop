"use client";
import React, { useState } from "react";
import MainColumn from "./MainColumn";
import { axiosService } from "@/api.js/axiosService";
import AsideColumn from "./AsideColumn";

const AddProduct = () => {
  const [productDetails, setProductDetails] = React.useState({});
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [discountType, setDiscountType] = useState("");
  const [productCategoryId, setProductCategoryId] = useState("");

  const submitProduct = (e: any) => {
    e.preventDefault();
    if (productName && productDescription) {
      const requestBody = new FormData();
      requestBody.append("ProductName", productName);
      requestBody.append("ShortDescription", shortDescription);
      requestBody.append("description", productDescription);
      requestBody.append("price", productPrice);
      requestBody.append("ProductCategoryId", productCategoryId);

      axiosService
        .post(
          "/AdminProducts/registerProduct",
          requestBody,
          "multipart/form-data"
        )
        .then((res) => console.log(res));
    }
  };

  return (
    <div className="d-flex flex-column flex-column-fluid">
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-0">
        <div
          id="kt_app_toolbar_container"
          className="app-container container-xxl d-flex flex-stack"
        >
          <div className="page-title d-flex flex-column justify-content-center me-3">
            <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
              محصول جدید
            </h1>

            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
              <li className="breadcrumb-item text-muted">
                <a
                  href="../../demo23/dist/index.html"
                  className="text-muted text-hover-primary"
                >
                  صفحه اصلی
                </a>
              </li>

              <li className="breadcrumb-item">
                <span className="bullet bg-gray-400 w-5px h-2px"></span>
              </li>

              <li className="breadcrumb-item text-muted">محصولات</li>

              <li className="breadcrumb-item">
                <span className="bullet bg-gray-400 w-5px h-2px"></span>
              </li>

              <li className="breadcrumb-item text-muted">محصول جدید</li>
            </ul>
          </div>
          {/* <div className="d-flex align-items-center gap-2 gap-lg-3">
            <div className="m-0">
              <a
                href="#"
                className="btn btn-sm btn-flex bg-body btn-color-gray-700 btn-active-color-primary fw-bold"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                <i className="ki-outline ki-filter fs-6 text-muted me-1"></i>
                Filter
              </a>

              <div
                className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                data-kt-menu="true"
                id="kt_menu_641ac9b4d0b04"
              >
                <div className="px-7 py-5">
                  <div className="fs-5 text-dark fw-bold">Filter Options</div>
                </div>
                <div className="separator border-gray-200"></div>

                <div className="px-7 py-5">
                  <div className="mb-10">
                    <label className="form-label fw-semibold">Status:</label>

                    <div>
                      <select
                        className="form-select form-select-solid"
                        data-kt-select2="true"
                        data-placeholder="Select option"
                        data-dropdown-parent="#kt_menu_641ac9b4d0b04"
                        data-allow-clear="true"
                      >
                        <option></option>
                        <option value="1">Approved</option>
                        <option value="2">Pending</option>
                        <option value="2">In Process</option>
                        <option value="2">Rejected</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-10">
                    <label className="form-label fw-semibold">
                      Member Type:
                    </label>

                    <div className="d-flex">
                      <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="1"
                        />
                        <span className="form-check-label">Author</span>
                      </label>

                      <label className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="2"
                          //   checked
                        />
                        <span className="form-check-label">Customer</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-10">
                    <label className="form-label fw-semibold">
                      Notifications:
                    </label>

                    <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        name="notifications"
                        // checked
                      />
                      <label className="form-check-label">Enabled</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button
                      type="reset"
                      className="btn btn-sm btn-light btn-active-light-primary me-2"
                      data-kt-menu-dismiss="true"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="btn btn-sm btn-primary"
                      data-kt-menu-dismiss="true"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="btn btn-sm fw-bold btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_create_app"
            >
              Create
            </a>
          </div> */}
        </div>
      </div>
      <div id="kt_app_content" className="app-content flex-column-fluid">
        <div
          id="kt_app_content_container"
          className="app-container container-xxl"
        >
          <form className="form d-flex flex-column flex-lg-row">
            <AsideColumn
              setProductCategoryId={setProductCategoryId}
              productCategoryId={productCategoryId}
            />
            <MainColumn
              productDetails={productDetails}
              setProductDetails={setProductDetails}
              productName={productName}
              setProductName={setProductName}
              productDescription={productDescription}
              setProductDescription={setProductDescription}
              submitProduct={(e: any) => submitProduct(e)}
              setShortDescription={setShortDescription}
              shortDescription={shortDescription}
              discountType={discountType}
              setDiscountType={setDiscountType}
              productPrice={productPrice}
              setProductPrice={setProductPrice}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
