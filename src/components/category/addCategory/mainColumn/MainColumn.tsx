import React from "react";
import GeneralSection from "./GeneralSection";

const MainColumn = () => {
  return (
    <>
      <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
        <GeneralSection />

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
                Set a meta tag description to the category for increased SEO
                ranking.
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
                Set a list of keywords that the category is related to. Separate
                the keywords by adding a comma
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
                      selecting this category during product creation or update.
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
                      Products matched with the following conditions will be
                      automatically assigned to this category.
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
                          <option value="notequal">is not equal to</option>
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
    </>
  );
};

export default MainColumn;
