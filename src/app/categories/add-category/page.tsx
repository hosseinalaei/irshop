import React from "react";

const page = () => {
  return (
    <>
      <div id="kt_app_content" className="app-content flex-column-fluid">
        <div
          id="kt_app_content_container"
          className="app-container container-xxl"
        >
          <form
            id="kt_ecommerce_add_category_form"
            className="form d-flex flex-column flex-lg-row"
            data-kt-redirect="../../demo23/dist/apps/ecommerce/catalog/categories.html"
          >
            <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
              <div className="py-4 card card-flush">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Thumbnail</h2>
                  </div>
                </div>

                <div className="pt-0 text-center card-body">
                  {/* <style>.image-input-placeholder { backgroundImage: url('assets/media/svg/files/blank-image.svg'); } [data-bs-theme="dark"] .image-input-placeholder { background-image: url('assets/media/svg/files/blank-image-dark.svg'); }</style> */}

                  <div
                    className="mb-3 image-input image-input-empty image-input-outline image-input-placeholder"
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

            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <div className="py-4 card card-flush">
                <div className="card-header">
                  <div className="card-title">
                    <h2>General</h2>
                  </div>
                </div>

                <div className="pt-0 card-body">
                  <div className="mb-10 fv-row">
                    <label className="required form-label">Category Name</label>
                    <input
                      type="text"
                      name="category_name"
                      className="mb-2 form-control"
                      placeholder="Product name"
                      value=""
                    />
                    <div className="text-muted fs-7">
                      A category name is required and recommended to be unique.
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Description</label>
                    <div
                      id="kt_ecommerce_add_category_description"
                      // name="kt_ecommerce_add_category_description"
                      className="mb-2 min-h-200px"
                    ></div>
                    <div className="text-muted fs-7">
                      Set a description to the category for better visibility.
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-4 card card-flush">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Meta Options</h2>
                  </div>
                </div>

                <div className="pt-0 card-body">
                  <div className="mb-10">
                    <label className="form-label">Meta Tag Title</label>
                    <input
                      type="text"
                      className="mb-2 form-control"
                      name="meta_title"
                      placeholder="Meta tag name"
                    />
                    <div className="text-muted fs-7">
                      Set a meta tag title. Recommended to be simple and precise
                      keywords.
                    </div>
                  </div>

                  <div className="mb-10">
                    <label className="form-label">Meta Tag Description</label>
                    <div
                      id="kt_ecommerce_add_category_meta_description"
                      // name="kt_ecommerce_add_category_meta_description"
                      className="mb-2 min-h-100px"
                    ></div>
                    <div className="text-muted fs-7">
                      Set a meta tag description to the category for increased
                      SEO ranking.
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Meta Tag Keywords</label>
                    <input
                      id="kt_ecommerce_add_category_meta_keywords"
                      name="kt_ecommerce_add_category_meta_keywords"
                      className="mb-2 form-control"
                    />
                    <div className="text-muted fs-7">
                      Set a list of keywords that the category is related to.
                      Separate the keywords by adding a comma
                      <code>,</code>between each keyword.
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-4 card card-flush">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Automation</h2>
                  </div>
                </div>

                <div className="pt-0 card-body">
                  <div>
                    <label className="mb-5 form-label">
                      Product assignment method
                    </label>
                    <div className="d-flex fv-row">
                      <div className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input me-3"
                          name="method"
                          type="radio"
                          value="0"
                          id="kt_ecommerce_add_category_automation_0"
                          checked
                        />
                        <label
                          className="form-check-label"
                          // for="kt_ecommerce_add_category_automation_0"
                        >
                          <div className="text-gray-800 fw-bold">Manual</div>
                          <div className="text-gray-600">
                            Add products to this category one by one by manually
                            selecting this category during product creation or
                            update.
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="my-5 separator separator-dashed"></div>
                    <div className="d-flex fv-row">
                      <div className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input me-3"
                          name="method"
                          type="radio"
                          value="1"
                          id="kt_ecommerce_add_category_automation_1"
                        />
                        <label
                          className="form-check-label"
                          // for="kt_ecommerce_add_category_automation_1"
                        >
                          <div className="text-gray-800 fw-bold">Automatic</div>
                          <div className="text-gray-600">
                            Products matched with the following conditions will
                            be automatically assigned to this category.
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-10 d-none"
                    data-kt-ecommerce-catalog-add-category="auto-options"
                  >
                    <label className="form-label">Conditions</label>
                    <div className="flex-wrap gap-5 text-gray-600 d-flex align-items-center mb-7">
                      <span>Products must match:</span>
                      <div className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="conditions"
                          value=""
                          id="all_conditions"
                          checked
                        />
                        <label
                          className="form-check-label"
                          // for="all_conditions"
                        >
                          All conditions
                        </label>
                      </div>
                      <div className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="conditions"
                          value=""
                          id="any_conditions"
                        />
                        <label
                          className="form-check-label"
                          // for="any_conditions"
                        >
                          Any conditions
                        </label>
                      </div>
                    </div>
                    <div id="kt_ecommerce_add_category_conditions">
                      <div className="form-group">
                        <div
                          data-repeater-list="kt_ecommerce_add_category_conditions"
                          className="gap-3 d-flex flex-column"
                        >
                          <div
                            data-repeater-item=""
                            className="flex-wrap gap-5 form-group d-flex align-items-center"
                          >
                            <div className="w-100 w-md-200px">
                              <select
                                className="form-select"
                                name="condition_type"
                                data-placeholder="Select an option"
                                data-kt-ecommerce-catalog-add-category="condition_type"
                              >
                                <option></option>
                                <option value="title">Product Title</option>
                                <option value="tag" selected>
                                  Product Tag
                                </option>
                                <option value="price">Prodict Price</option>
                              </select>
                            </div>
                            <div className="w-100 w-md-200px">
                              <select
                                className="form-select"
                                name="condition_equals"
                                data-placeholder="Select an option"
                                data-kt-ecommerce-catalog-add-category="condition_equals"
                              >
                                <option></option>
                                <option value="equal" selected>
                                  is equal to
                                </option>
                                <option value="notequal">
                                  is not equal to
                                </option>
                                <option value="greater">is greater than</option>
                                <option value="less">is less than</option>
                                <option value="starts">starts with</option>
                                <option value="ends">ends with</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              className="form-control mw-100 w-200px"
                              name="condition_label"
                              placeholder=""
                            />
                            <button
                              type="button"
                              data-repeater-delete=""
                              className="btn btn-sm btn-icon btn-light-danger"
                            >
                              <i className="ki-outline ki-cross fs-2"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 form-group">
                        <button
                          type="button"
                          data-repeater-create=""
                          className="btn btn-sm btn-light-primary"
                        >
                          <i className="ki-outline ki-plus fs-2"></i>Add another
                          condition
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <a
                  href="../../demo23/dist/apps/ecommerce/catalog/products.html"
                  id="kt_ecommerce_add_product_cancel"
                  className="btn btn-light me-5"
                >
                  Cancel
                </a>
                <button
                  type="submit"
                  id="kt_ecommerce_add_category_submit"
                  className="btn btn-primary"
                >
                  <span className="indicator-label">Save Changes</span>
                  <span className="indicator-progress">
                    Please wait...
                    <span className="align-middle spinner-border spinner-border-sm ms-2"></span>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
