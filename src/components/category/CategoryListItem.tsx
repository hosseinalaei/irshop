import React from "react";

const CategoryListItem = ({ title, urlTitle }: any) => {
  return (
    <>
      <tr>
        <td>
          <div className="form-check form-check-sm form-check-custom form-check-solid">
            <input className="form-check-input" type="checkbox" value="1" />
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
                {title}
              </a>
              {/* <!--end::Title--> */}
              {/* <!--begin::Description--> */}
              <div className="text-muted fs-7 fw-bold">{urlTitle}</div>
              {/* <!--end::Description--> */}
            </div>
          </div>
        </td>
        {/* <td>
          
          <div className="badge badge-light-success">Automated</div>
          
        </td> */}
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
    </>
  );
};

export default CategoryListItem;
