import React, { useEffect } from "react";
import axios from "axios";

const AddCategory = () => {
  //   const getCategories = () => {
  //     axios
  //       .get(`https://shop.ir/AdminProducts/get-product-for-edit/{id}`)
  //       .then((res) => console.log("rrrrrrrrrrrrr", res));
  //   };

  //   useEffect(() => {
  //     getCategories();
  //   }, []);
  return (
    <>
      <div id="kt_app_content" className="app-content flex-column-fluid">
        {/* <!--begin::Content container--> */}
        <div
          id="kt_app_content_container"
          className="app-container container-xxl"
        >
          {/* <!--begin::Category--> */}
          <div className="card card-flush">
            {/* <!--begin::Card header--> */}
            <div className="gap-2 py-5 card-header align-items-center gap-md-5">
              {/* <!--begin::Card title--> */}
              <div className="card-title">
                {/* <!--begin::Search--> */}
                <div className="my-1 d-flex align-items-center position-relative">
                  <i className="ki-outline ki-magnifier fs-3 position-absolute ms-4"></i>
                  <input
                    type="text"
                    data-kt-ecommerce-category-filter="search"
                    className="form-control form-control-solid w-250px ps-12"
                    placeholder="Search Category"
                  />
                </div>
                {/* <!--end::Search--> */}
              </div>
              {/* <!--end::Card title--> */}
              {/* <!--begin::Card toolbar--> */}
              <div className="card-toolbar">
                {/* <!--begin::Add customer--> */}
                <a
                  href="../../demo23/dist/apps/ecommerce/catalog/add-category.html"
                  className="btn btn-primary"
                >
                  Add Category
                </a>
                {/* <!--end::Add customer--> */}
              </div>
              {/* <!--end::Card toolbar--> */}
            </div>
            {/* <!--end::Card header--> */}
            {/* <!--begin::Card body--> */}
            <div className="pt-0 card-body">
              {/* <!--begin::Table--> */}
              <table
                className="table align-middle table-row-dashed fs-6 gy-5"
                id="kt_ecommerce_category_table"
              >
                <thead>
                  <tr className="text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                    <th className="w-10px pe-2">
                      <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-kt-check="true"
                          data-kt-check-target="#kt_ecommerce_category_table .form-check-input"
                          value="1"
                        />
                      </div>
                    </th>
                    <th className="min-w-250px">دسته‌بندی</th>
                    <th className="min-w-150px">نوع</th>
                    <th className="text-end min-w-70px">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 fw-semibold">
                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="1"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex">
                        {/* <!--begin::Thumbnail--> */}
                        <a
                          href="../../demo23/dist/apps/ecommerce/catalog/edit-category.html"
                          className="symbol symbol-50px"
                        >
                          <span
                            className="symbol-label"
                            style={{
                              backgroundImage: "url(68.gif)",
                            }}
                          ></span>
                        </a>
                        {/* <!--end::Thumbnail--> */}
                        <div className="ms-5">
                          {/* <!--begin::Title--> */}
                          <a
                            href="../../demo23/dist/apps/ecommerce/catalog/edit-category.html"
                            className="mb-1 text-gray-800 text-hover-primary fs-5 fw-bold"
                            data-kt-ecommerce-category-filter="category_name"
                          >
                            Computers
                          </a>
                          {/* <!--end::Title--> */}
                          {/* <!--begin::Description--> */}
                          <div className="text-muted fs-7 fw-bold">
                            Our computers and tablets include all the big
                            brands.
                          </div>
                          {/* <!--end::Description--> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      {/* <!--begin::Badges--> */}
                      <div className="badge badge-light-success">Automated</div>
                      {/* <!--end::Badges--> */}
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-active-light-primary btn-flex btn-center"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        Actions
                        <i className="ki-outline ki-down fs-5 ms-1"></i>
                      </a>
                      {/* <!--begin::Menu--> */}
                      <div
                        className="py-4 menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px"
                        data-kt-menu="true"
                      >
                        {/* <!--begin::Menu item--> */}
                        <div className="px-3 menu-item">
                          <a
                            href="../../demo23/dist/apps/ecommerce/catalog/add-category.html"
                            className="px-3 menu-link"
                          >
                            Edit
                          </a>
                        </div>
                        {/* <!--end::Menu item--> */}
                        {/* <!--begin::Menu item--> */}
                        <div className="px-3 menu-item">
                          <a
                            href="#"
                            className="px-3 menu-link"
                            data-kt-ecommerce-category-filter="delete_row"
                          >
                            Delete
                          </a>
                        </div>
                        {/* <!--end::Menu item--> */}
                      </div>
                      {/* <!--end::Menu--> */}
                    </td>
                  </tr>
                </tbody>
                {/* <!--end::Table body--> */}
              </table>
              {/* <!--end::Table--> */}
            </div>
            {/* <!--end::Card body--> */}
          </div>
          {/* <!--end::Category--> */}
        </div>
        {/* <!--end::Content container--> */}
      </div>
    </>
  );
};

export default AddCategory;
