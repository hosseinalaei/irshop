import React, { useEffect, useState } from "react";
import MainColumn from "./mainColumn/MainColumn";
import { axiosService } from "../../../services/axiosService";
import AsideColumn from "./asideColumn/AsideColumn";
import { v4 as uuidv4 } from "uuid";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useAxios from "../../../hooks/useAxios";

const AddProduct = () => {
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState(location?.state);

  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState({
    name: selectedProduct?.productName || "",
    description: selectedProduct?.description || "",
    shortDescription: selectedProduct?.shortDescription || "",
    policy: selectedProduct?.policyId || "",
    categoryId: selectedProduct?.productSelectedCategories || [],
    status:
      typeof selectedProduct?.isExists === "undefined"
        ? true
        : selectedProduct?.isExists,
    gallery: selectedProduct?.productGalleries || [],
    originImage: selectedProduct?.productImageName || "",
    color: selectedProduct?.productColor || [],
    special: selectedProduct?.isSpecial || false,
    isDelete: false,
    price: selectedProduct?.price || "",
    productSpecific: selectedProduct?.productSpecific || {
      attributeCategoryId: "",
      spec: [
        // {
        //   groupId: "",
        //   value: "",
        // },
      ],
    },
    // attributeCategoryId: selectedProduct?.attributeCategoryId || "",
    details: selectedProduct?.productDetail || [],
    productCount: selectedProduct?.productCount || "",
  });
  // console.log("selectedProductselectedProduct", selectedProduct, product);

  const httpRequest = useAxios();

  const postMedia = (id, image, key) => {
    const body = new FormData();
    body.append("originImage", image);
    body.append("mediaFieldName", key);
    body.append("id", id);

    // axiosService.post("/Media/PostMedia", body, "multipart/form-data");

    httpRequest({
      url: "/Media/PostMedia",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data: body,
    });
  };

  const updateProduct = (e) => {
    setLoading(true);
    e.preventDefault();
    const gallery = [];

    for (let i = 0; i < product?.gallery.length; i++) {
      gallery.push({
        productGalleryImageName: product?.gallery[i].name,
        imageuniqueId: uuidv4(),
        productVideoName: "",
      });
    }

    const requestBody = {
      id: selectedProduct?.id,
      isDelete: false,
      productName: product?.name,
      shortDescription: product?.shortDescription,
      description: product?.description,
      productImageName: product?.originImage?.name,
      isExists: product?.status,
      isSpecial: product?.special,
      policyId: product?.policy,
      productGalleries: gallery.concat(selectedProduct?.productGalleries),
      productSelectedCategories: product?.categoryId,
      productSpecific: product?.productSpecific,
      productColor: product?.color,
      productDetail: product?.details,
      attributeCategoryId: product?.attributeCategoryId,
      productCount: product?.productCount,
    };

    // axiosService
    //   .put("/Products/updateProduct", requestBody)
    httpRequest({
      url: "/Products/updateProduct",
      method: "PUT",
      data: requestBody,
    })
      .then((res) => {
        if (res?.status === "Success") {
          toast.success("عملیات با موفقیت انجام شد", {
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

          // product?.originImage?.name !== selectedProduct?.productImageName &&
          postMedia(res?.data?.id, product?.originImage, "productImageName");

          product?.gallery?.length > 0 &&
            Array.from(product?.gallery).map((item, index) =>
              postMedia(
                gallery[index]?.imageuniqueId,
                item,
                "productGalleryImageName"
              )
            );
        } else {
          toast.error("مشکلی رخ داده است", {
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
        }
      })
      .finally(() => setLoading(false));
  };

  const submitProduct = (e) => {
    setLoading(true);
    e.preventDefault();
    // if (
    //   product?.name &&
    //   product?.shortDescription &&
    //   product?.color?.length > 0
    // ) {
    const gallery = [];

    for (let i = 0; i < product?.gallery.length; i++) {
      gallery.push({
        productGalleryImageName: product?.gallery[i].name,
        // imageuniqueId: uuidv4(),
        // productVideoName: "",
      });
    }

    const requestBody = {
      productName: product?.name,
      price: product?.price,
      shortDescription: product?.shortDescription,
      description: product?.description,
      productImageName: product?.originImage?.name,
      isExists: product?.status,
      isSpecial: product?.special,
      policyId: product?.policy,
      productGalleries: gallery,
      productSelectedCategories: product?.categoryId,

      productColor: product?.color,
      productSpecific: product?.productSpecific,
      productDetail: product?.details,
      attributeCategoryId: product?.attributeCategoryId,
      productCount: product?.productCount,
    };

    // console.log("requestBodyrequestBodyrequestBody", requestBody);

    // axiosService
    //   .post("/Products/registerProduct", requestBody)
    httpRequest({
      url: "/Products/registerProduct",
      method: "POST",
      data: requestBody,
    })
      .then((res) => {
        if (res?.status === "Success") {
          toast.success("عملیات با موفقیت انجام شد", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            style: { fontFamily: "inherit" },
          });

          postMedia(res?.data?.id, product?.originImage, "productImageName");

          for (let i = 0; i < product?.gallery.length; i++) {
            postMedia(
              res?.data?.productGalleries[i]?.imageuniqueId,
              product?.gallery[i],
              "productGalleryImageName"
            );
          }
        } else {
          toast.error("مشکلی رخ داده است", {
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
        }
      })
      .finally(() => setLoading(false));
    // }
  };

  return (
    <>
      <ToastContainer />
      <div className="d-flex flex-column flex-column-fluid">
        <div className="m-3 page-title d-flex flex-column justify-content-center">
          <h1 className="my-0 page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center">
            افزودن محصول
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
              افزودن محصول
            </li>

            {/* <li className="breadcrumb-item text-muted">نقش‌ها</li> */}
          </ul>
        </div>
        <div className="app-content flex-column-fluid">
          <div className="">
            <form className="form d-flex flex-column flex-lg-row">
              <AsideColumn
                setProduct={setProduct}
                product={product}
                selectedProduct={selectedProduct}
              />
              <MainColumn
                setProduct={setProduct}
                product={product}
                submitProduct={(e) => {
                  selectedProduct ? updateProduct(e) : submitProduct(e);
                }}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                loading={loading}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
