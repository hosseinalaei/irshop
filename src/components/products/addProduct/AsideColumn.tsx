import React from "react";
import ProductDetails from "./ProductDetails";

const AsideColumn = ({ setProductCategoryId, productCategoryId }: any) => {
  return (
    <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 mx-5">
      {/* <!--begin::Thumbnail settings--> */}
      {/* <div className="card card-flush py-4">
        <div className="card-header">
          <div className="card-title">
            <h2>Thumbnail</h2>
          </div>
        </div>
        <div className="card-body text-center pt-0">
           <style>
              .image-input-placeholder {
                backgroundImage: url("assets/media/svg/files/blank-image.svg");
              }
              [data-bs-theme="dark"] .image-input-placeholder {
                backgroundImage: url("assets/media/svg/files/blank-image-dark.svg");
              }
            </style> 
          <div
            className="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
            data-kt-image-input="true"
            style={{
              backgroundImage: "url(/blank-image.svg)",
            }}
          >
            <div className="image-input-wrapper w-150px h-150px"></div>
            <label
              className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
              data-kt-image-input-action="change"
              data-bs-toggle="tooltip"
              title="Change avatar"
            >
              <i className="ki-outline ki-pencil fs-7"></i>
              <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
              <input type="hidden" name="avatar_remove" />
            </label>
            <span
              className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
              data-kt-image-input-action="cancel"
              data-bs-toggle="tooltip"
              title="Cancel avatar"
            >
              <i className="ki-outline ki-cross fs-2"></i>
            </span>
            <span
              className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
              data-kt-image-input-action="remove"
              data-bs-toggle="tooltip"
              title="Remove avatar"
            >
              <i className="ki-outline ki-cross fs-2"></i>
            </span>
          </div>
          <div className="text-muted fs-7">
            Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image
            files are accepted
          </div>
        </div>
      </div> */}
      <ProductDetails setProductCategoryId={setProductCategoryId} />
    </div>
  );
};

export default AsideColumn;
