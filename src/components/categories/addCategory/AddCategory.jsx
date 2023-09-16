import React, { useState } from "react";
import OriginImage from "./asideColumn/OriginImage";
import ParentCategory from "./asideColumn/ParentCategory";
import GeneralSection from "./mainColumn/GeneralSection";
import { v4 as uuidv4 } from "uuid";
import { axiosService } from "../../../services/axiosService";
import SliderSection from "./mainColumn/SliderSection";
import { NavLink, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddCategory = () => {
  const location = useLocation();

  const selectedCategory = location?.state;

  const [category, setCategory] = useState({
    title: selectedCategory?.title || "",
    urlTitle: selectedCategory?.urlTitle || "",
    isDelete: false,
    parentId: selectedCategory?.parentId || "",
    originImage: selectedCategory?.categoryImageName || null,
    sliderImage: selectedCategory?.categorySliderImagename || [],
    id: selectedCategory?.id || "",
  });

  const postMedia = (id) => {
    const body = new FormData();
    body.append("originImage", category?.sliderImage[0]);
    body.append("mediaFieldName", "categoryImageName");
    body.append("id", id);
    axiosService.post("/Get/PostMedia", body, "multipart/form-data");
  };

  const addCategory = () => {
    // const requestBody = new FormData();

    // category.title && requestBody.append("Title", category.title);
    // category.urlTitle && requestBody.append("UrlTitle", category.urlTitle);
    // category.parentId && requestBody.append("ParentId", category.parentId);
    // requestBody.append("Id", uuidv4());
    // requestBody.append("IsDelete", category.isDelete);
    // category.originImage &&
    //   requestBody.append("originImage", category.originImage);
    // category.sliderImage.length > 0 &&
    //   requestBody.append("sliderImage", category.sliderImage[0]);

    const requestBody = {
      title: category?.title,
      urlTitle: category?.urlTitle,
      parentId: category?.parentId,
      isDelete: false,
    };

    if (category.title && category.urlTitle && category.originImage) {
      axiosService
        .post("/AdminProducts/registerProductCategory", requestBody)
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
            postMedia(res?.data?.id);
          } else if (res?.status === "Error") {
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

          // res?.status === "Success"
          //   ? (toast.success("عملیات با موفقیت انجام شد", {
          //       position: "top-left",
          //       autoClose: 3000,
          //       hideProgressBar: false,
          //       closeOnClick: true,
          //       pauseOnHover: true,
          //       draggable: true,
          //       // progress: undefined,
          //       theme: "light",
          //       style: { fontFamily: "inherit" },
          //     }))
          //   : toast.error("مشکلی رخ داده است", {
          //       position: "top-left",
          //       autoClose: 3000,
          //       hideProgressBar: false,
          //       closeOnClick: true,
          //       pauseOnHover: true,
          //       draggable: true,
          //       // progress: undefined,
          //       theme: "light",
          //       style: { fontFamily: "inherit" },
          //     });
        });
    }
  };

  const updateCategory = () => {
    const requestBody = new FormData();

    category.title && requestBody.append("Title", category.title);
    category.urlTitle && requestBody.append("UrlTitle", category.urlTitle);
    category.parentId && requestBody.append("ParentId", category.parentId);
    requestBody.append("Id", uuidv4());
    requestBody.append("IsDelete", category.isDelete);
    category.originImage &&
      requestBody.append("originImage", category.originImage);
    category.sliderImage.length > 0 &&
      requestBody.append("sliderImage", category.sliderImage[0]);

    axiosService
      .put("/AdminProducts/updateCategory", requestBody)
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

  return (
    <>
      <ToastContainer />
      <div className="app-content flex-column-fluid">
        <div className="container-xxl">
          <div className="m-3 page-title d-flex flex-column justify-content-center">
            <h1 className="my-0 page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center">
              افزودن دسته‌بندی
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
                افزودن دسته‌بندی
              </li>

              {/* <li className="breadcrumb-item text-muted">نقش‌ها</li> */}
            </ul>
          </div>
          <form className="form d-flex flex-column flex-lg-row">
            <div className="mx-5 d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7">
              <OriginImage category={category} setCategory={setCategory} />
              <ParentCategory category={category} setCategory={setCategory} />
            </div>
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <GeneralSection category={category} setCategory={setCategory} />
              <SliderSection category={category} setCategory={setCategory} />
            </div>
          </form>

          <div className="mt-5 d-flex justify-content-end">
            <button
              onClick={() =>
                selectedCategory ? updateCategory() : addCategory()
              }
              className="px-10 py-2 text-2xl font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
