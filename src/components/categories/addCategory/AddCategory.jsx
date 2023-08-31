import React from "react";
import MainColumn from "./mainColumn/MainColumn";

const AddCategory = () => {
  return (
    <>
      <div className="app-content flex-column-fluid">
        <div className="app-container container-xxl">
          <form className="form d-flex flex-column flex-lg-row">
            <div className="mx-5 d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7">
              <div className="py-4 card card-flush">
                <div className="card-header">
                  <div className="card-title">
                    <h2>تصویر اصلی</h2>
                  </div>
                </div>

                <div className="pt-0 text-center card-body">
                  <div
                    className="mb-3 image-input image-input-empty image-input-outline"
                    style={{ backgroundImage: "url(/blank-image.svg)" }}
                    data-kt-image-input="true"
                  >
                    <div className="image-input-wrapper w-150px h-150px"></div>

                    <label
                      className="shadow btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body"
                      data-kt-image-input-action="change"
                      data-bs-toggle="tooltip"
                      title="Change avatar"
                    >
                      <i className="ki-outline ki-pencil fs-7"></i>
                      <input
                        type="file"
                        name="avatar"
                        accept=".png, .jpg, .jpeg"
                      />
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
                    Set the category thumbnail image. Only *.png, *.jpg and
                    *.jpeg image files are accepted
                  </div>
                </div>
              </div>

              <div className="py-4 card card-flush">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Status</h2>
                  </div>

                  <div className="card-toolbar">
                    <div
                      className="rounded-circle bg-success w-15px h-15px"
                      id="kt_ecommerce_add_category_status"
                    ></div>
                  </div>
                </div>

                <div className="pt-0 card-body">
                  <select
                    className="mb-2 form-select"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    id="kt_ecommerce_add_category_status_select"
                  >
                    <option></option>
                    <option value="published" selected>
                      Published
                    </option>
                    <option value="scheduled">Scheduled</option>
                    <option value="unpublished">Unpublished</option>
                  </select>
                  <div className="text-muted fs-7">
                    Set the category status.
                  </div>

                  <div className="mt-10 d-none">
                    <label
                      // for="kt_ecommerce_add_category_status_datepicker"
                      className="form-label"
                    >
                      Select publishing date and time
                    </label>
                    <input
                      className="form-control"
                      id="kt_ecommerce_add_category_status_datepicker"
                      placeholder="Pick date & time"
                    />
                  </div>
                </div>
              </div>

              <div className="py-4 card card-flush">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Store Template</h2>
                  </div>
                </div>

                <div className="pt-0 card-body">
                  <label
                    // for="kt_ecommerce_add_category_store_template"
                    className="form-label"
                  >
                    Select a store template
                  </label>

                  <select
                    className="mb-2 form-select"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    id="kt_ecommerce_add_category_store_template"
                  >
                    <option></option>
                    <option value="default" selected>
                      Default template
                    </option>
                    <option value="electronics">Electronics</option>
                    <option value="office">Office stationary</option>
                    <option value="fashion">Fashion</option>
                  </select>
                  <div className="text-muted fs-7">
                    Assign a template from your current theme to define how the
                    category products are displayed.
                  </div>
                </div>
              </div>
            </div>

            <MainColumn />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
