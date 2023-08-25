import React from "react";
import ProductDetails from "./ProductDetails";

const AsideColumn = ({ setProductCategoryId, productCategoryId }: any) => {
  return (
    <div className="mx-5 d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7">
      <div className="py-4 card card-flush">
        <div className="card-header">
          <div className="card-title">
            <h2>Thumbnail</h2>
          </div>
        </div>
        <div className="pt-0 text-center card-body">
          <div
            className="mb-3 image-input image-input-empty image-input-outline image-input-placeholder"
            data-kt-image-input="true"
            style={{
              backgroundImage: "url(/blank-image.svg)",
            }}
          >
            <div className="image-input-wrapper w-150px h-150px"></div>
            <label
              className="shadow btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body"
              data-kt-image-input-action="change"
              data-bs-toggle="tooltip"
              title="Change avatar"
            >
              <i className="ki-outline ki-pencil fs-7"></i>
              <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
              <input type="hidden" name="avatar_remove" />
            </label>
            <span
              className="shadow btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body"
              data-kt-image-input-action="cancel"
              data-bs-toggle="tooltip"
              title="Cancel avatar"
            >
              <i className="ki-outline ki-cross fs-2"></i>
            </span>
            <span
              className="shadow btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body"
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
      </div>
      <ProductDetails setProductCategoryId={setProductCategoryId} />
    </div>
  );
};

export default AsideColumn;
