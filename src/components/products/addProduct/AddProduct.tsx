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
  const [productStatus, setProductStatus] = useState("");
  const [productPolicy, setProductPolicy] = useState("");
  const [originImage, setOriginImage] = useState("");
  const [productGallery, setProductGallery] = useState("");
  // const [productColor, setProductColor] = useState({
  //   colorName: "",
  //   colorCode: "",
  //   price: "",
  // });
  const [colorName, setColorName] = useState("");
  const [colorCode, setColorCode] = useState("");
  const [colorPrice, setColorPrice] = useState("");
  // console.log("productColorproductColor", productColor);

  const submitProduct = (e: any) => {
    console.log("qqqqqqqqqqqq");
    e.preventDefault();
    if (productName && productDescription) {
      const requestBody = new FormData();
      productName && requestBody.append("ProductName", productName);
      shortDescription &&
        requestBody.append("ShortDescription", shortDescription);
      productDescription &&
        requestBody.append("description", productDescription);
      productPrice && requestBody.append("price", productPrice);
      productCategoryId &&
        requestBody.append("ProductCategoryId", productCategoryId);
      productStatus && requestBody.append("IsExists", productStatus);
      // requestBody.append("productOriginImage", originImage);
      // requestBody.append("ProductGalleries", productGallery);
      // requestBody.append("ProductColor", [
      //   {
      //     colorName: productColor.colorName,
      //     colorCode: productColor.colorCode,
      //     price: productColor.price,
      //   },
      // ]);

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
      <div className="py-3 app-toolbar py-lg-0">
        <div className="app-container container-xxl d-flex flex-stack">
          <div className="page-title d-flex flex-column justify-content-center me-3">
            <h1 className="my-0 page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center">
              محصول جدید
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

              <li className="breadcrumb-item">
                <span className="bg-gray-400 bullet w-5px h-2px"></span>
              </li>

              <li className="breadcrumb-item text-muted">محصول جدید</li>
            </ul>
          </div>
          {/* <div className="gap-2 d-flex align-items-center gap-lg-3">
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
                <div className="py-5 px-7">
                  <div className="fs-5 text-dark fw-bold">Filter Options</div>
                </div>
                <div className="border-gray-200 separator"></div>

                <div className="py-5 px-7">
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
      <div className="app-content flex-column-fluid">
        <div className="">
          <form className="form d-flex flex-column flex-lg-row">
            <AsideColumn
              setProductCategoryId={setProductCategoryId}
              productCategoryId={productCategoryId}
              setProductStatus={setProductStatus}
              productStatus={productStatus}
              setOriginImage={setOriginImage}
              setProductPolicy={setProductPolicy}
              productPolicy={productPolicy}
            />
            <MainColumn
              productDetails={productDetails}
              setProductDetails={setProductDetails}
              productName={productName}
              setProductName={setProductName}
              productDescription={productDescription}
              setProductDescription={setProductDescription}
              submitProduct={(e: any) => {
                submitProduct(e);
              }}
              setShortDescription={setShortDescription}
              shortDescription={shortDescription}
              discountType={discountType}
              setDiscountType={setDiscountType}
              productPrice={productPrice}
              setProductPrice={setProductPrice}
              // productColor={productColor}
              // setProductColor={setProductColor}
              colorName={colorName}
              setColorName={setColorName}
              colorPrice={colorPrice}
              setColorPrice={setColorPrice}
              colorCode={colorCode}
              setColorCode={setColorCode}
              setProductGallery={setProductGallery}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
