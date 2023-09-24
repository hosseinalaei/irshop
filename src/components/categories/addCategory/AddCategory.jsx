import React, { useState } from "react";
import OriginImage from "./asideColumn/OriginImage";
import ParentCategory from "./asideColumn/ParentCategory";
import GeneralSection from "./mainColumn/GeneralSection";
import { axiosService } from "../../../services/axiosService";
import SliderSection from "./mainColumn/SliderSection";
import { NavLink, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Button from "../../common/Button";

const AddCategory = () => {
  const location = useLocation();

  const selectedCategory = location?.state;
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState({
    title: selectedCategory?.title || "",
    urlTitle: selectedCategory?.urlTitle || "",
    isDelete: false,
    parentId: selectedCategory?.parentId || "",
    originImage: selectedCategory?.categoryImageName || null,
    sliderImage: selectedCategory?.categorySliderImagename || [],
    id: selectedCategory?.id || "",
  });

  const postMedia = (id, image, key) => {
    const body = new FormData();
    body.append("originImage", image);
    body.append("mediaFieldName", key);
    body.append("id", id);
    axiosService.post("/Media/PostMedia", body, "multipart/form-data");
  };

  const addCategory = () => {
    setLoading(true);

    const requestBody = {
      title: category?.title,
      urlTitle: category?.urlTitle,
      parentId: category?.parentId,

      categoryImageName: category.originImage?.name,
      categorySliderImagename: "",
      categorySliderTitle: "",
      categorySliderDescription: "",
      categorySliderLink: "",
    };

    if (category.title && category.urlTitle && category.originImage) {
      axiosService
        .post("/Category/registerProductCategory", requestBody)
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
            postMedia(res?.data?.id, category.originImage, "categoryImageName");
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
        })
        .finally(() => setLoading(false));
    }
  };

  const updateCategory = () => {
    setLoading(true);

    const requestBody = {
      title: category?.title,
      urlTitle: category?.urlTitle,
      parentId: category?.parentId,
      id: category?.id,

      categoryImageName: category.originImage?.name,
      categorySliderImagename: "",
      categorySliderTitle: "",
      categorySliderDescription: "",
      categorySliderLink: "",
    };

    axiosService
      .put("/Category/updateCategory", requestBody)
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
          postMedia(res?.data?.id, category.originImage, "categoryImageName");
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
      })
      .finally(() => setLoading(false));
  };

  const enableSubmitBtn = () => {
    return category.title && category.urlTitle && category.originImage
      ? true
      : false;
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
              <OriginImage
                category={category}
                setCategory={setCategory}
                selectedCategory={selectedCategory}
              />
              <ParentCategory category={category} setCategory={setCategory} />
            </div>
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <GeneralSection category={category} setCategory={setCategory} />
              {/* <SliderSection category={category} setCategory={setCategory} /> */}
            </div>
          </form>

          <div className="mt-5 d-flex justify-content-end">
            <Button
              disabled={Boolean(
                !category.title && !category.urlTitle && !category.originImage
              )}
              className="px-10 text-2xl"
              onClick={() =>
                selectedCategory ? updateCategory() : addCategory()
              }
              isLoading={loading}
            >
              ثبت
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
