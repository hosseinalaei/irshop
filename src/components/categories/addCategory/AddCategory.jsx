import React, { useState } from "react";
import OriginImage from "./asideColumn/OriginImage";
import ParentCategory from "./asideColumn/ParentCategory";
import GeneralSection from "./mainColumn/GeneralSection";
import { v4 as uuidv4 } from "uuid";
import { axiosService } from "../../../services/axiosService";

const AddCategory = () => {
  const [category, setCategory] = useState({
    title: "",
    urlTitle: "",
    isDelete: false,
    parentId: "",
    originImage: null,
  });

  console.log("category: ", category);

  const addCategory = () => {
    const requestBody = new FormData();

    category.title && requestBody.append("Title", category.title);
    category.urlTitle && requestBody.append("UrlTitle", category.urlTitle);
    category.parentId && requestBody.append("ParentId", category.parentId);
    requestBody.append("Id", uuidv4());
    requestBody.append("IsDelete", category.isDelete);
    category.originImage &&
      requestBody.append("originImage", category.originImage);

    console.log("requestBody: ", requestBody);

    if (category.title && category.urlTitle && category.originImage) {
      axiosService
        .post(
          "/AdminProducts/registerProductCategory",
          requestBody,
          "multipart/form-data"
        )
        .then((res) => console.log(res));
    }
  };

  return (
    <>
      <div className="app-content flex-column-fluid">
        <div className="app-container container-xxl">
          <form className="form d-flex flex-column flex-lg-row">
            <div className="mx-5 d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7">
              <OriginImage category={category} setCategory={setCategory} />
              <ParentCategory category={category} setCategory={setCategory} />
            </div>
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <GeneralSection category={category} setCategory={setCategory} />
            </div>
          </form>
          <div className="d-flex justify-content-end">
            <button onClick={() => addCategory()} className="btn btn-primary">
              <span className="indicator-label">ثبت</span>
              <span className="indicator-progress">
                لطفا صبر کنید
                <span className="align-middle spinner-border spinner-border-sm ms-2"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
