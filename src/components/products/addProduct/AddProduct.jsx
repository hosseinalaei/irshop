import React, { useEffect, useState } from "react";
import MainColumn from "./mainColumn/MainColumn";
import { axiosService } from "../../../services/axiosService";
import AsideColumn from "./asideColumn/AsideColumn";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddProduct = () => {
  const location = useLocation();
  const selectedProduct = location?.state;

  console.log("selectedProductselectedProduct", selectedProduct);

  const [product, setProduct] = useState({
    name: selectedProduct?.productName || "",
    description: selectedProduct?.description || "",
    shortDescription: selectedProduct?.shortDescription || "",
    policy: selectedProduct?.policyId || "",
    categoryId: selectedProduct?.productSelectedCategories || [],
    status: selectedProduct?.isExists,
    gallery: selectedProduct?.productGalleries || [],
    originImage: selectedProduct?.productImageName || "",
    color: selectedProduct?.productColor || [],
    special: selectedProduct?.isSpecial || false,
    isDelete: false,
    price: selectedProduct?.price || "",
  });

  const updateProduct = (e) => {
    e.preventDefault();
    const requestBody = new FormData();

    product?.name && requestBody?.append("ProductName", product?.name);

    product?.shortDescription &&
      requestBody?.append("ShortDescription", product?.shortDescription);

    product?.description &&
      requestBody?.append("description", product?.description);

    product?.price && requestBody.append("price", product?.price);

    product?.categoryId &&
      requestBody?.append("ProductCategoryId", product?.categoryId);

    product?.status && requestBody.append("IsExists", product?.status);

    product?.originImage &&
      requestBody.append("productOriginImage", [
        {
          originImage: product?.originImage,
        },
      ]);

    requestBody.append("id", selectedProduct?.id);

    product?.policy && requestBody.append("policyId", product?.policy);

    product?.gallery.length > 0 &&
      requestBody.append("ProductGalleries", JSON.stringify(product?.gallery));

    product?.color?.length > 0 &&
      requestBody.append("ProductColor", JSON.stringify(product?.color));

    product?.special && requestBody.append("IsSpecial", product?.special);

    axiosService
      .put("/AdminProducts/updateProduct", requestBody, "multipart/form-data")
      .then((res) => {
        res?.status === "Success"
          ? toast.success("عملیات با موفقیت انجام شد", {
              position: "top-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              // progress: undefined,
              theme: "light",
              style: { fontFamily: "inherit" },
            })
          : toast.error("مشکلی رخ داده است", {
              position: "top-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              // progress: undefined,
              theme: "light",
              style: { fontFamily: "inherit" },
            });
      });
  };

  const submitProduct = (e) => {
    e.preventDefault();
    if (product?.name && product?.shortDescription) {
      const requestBody = new FormData();

      product?.name && requestBody?.append("ProductName", product?.name);

      product?.shortDescription &&
        requestBody?.append("ShortDescription", product?.shortDescription);

      product?.description &&
        requestBody?.append("description", product?.description);

      product?.price && requestBody.append("price", product?.price);

      product?.categoryId &&
        requestBody?.append("ProductCategoryId", product?.categoryId);

      product?.status && requestBody.append("IsExists", product?.status);

      // product?.originImage &&
      //   requestBody.append("productOriginImage", product?.originImage);

      requestBody.append("id", uuidv4());

      product?.policy && requestBody.append("policyId", product?.policy);

      for (let i = 0; i < product?.gallery.length; i++) {
        requestBody.append(
          `productOriginImage[${i}].originImage`,
          product?.gallery[i]
        );
      }
      // product?.gallery.length > 0 &&
      //   requestBody.append("productOriginImage", product?.gallery);

      product?.color?.length > 0 &&
        requestBody.append("ProductColor", JSON.stringify(product?.color));

      product?.special && requestBody.append("IsSpecial", product?.special);

      axiosService
        .post(
          "/AdminProducts/registerProduct",
          requestBody,
          "multipart/form-data"
        )
        .then((res) => {
          res?.status === "Success"
            ? toast.success("عملیات با موفقیت انجام شد", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                // progress: undefined,
                theme: "light",
                style: { fontFamily: "inherit" },
              })
            : toast.error("مشکلی رخ داده است", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                // progress: undefined,
                theme: "light",
                style: { fontFamily: "inherit" },
              });
        });
    }
  };

  return (
    <>
      <ToastContainer />
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
          </div>
        </div>
        <div className="app-content flex-column-fluid">
          <div className="">
            <form className="form d-flex flex-column flex-lg-row">
              <AsideColumn setProduct={setProduct} product={product} />
              <MainColumn
                setProduct={setProduct}
                product={product}
                submitProduct={(e) => {
                  selectedProduct ? updateProduct(e) : submitProduct(e);
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
