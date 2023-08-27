import { axiosService } from "@/api.js/axiosService";
import React from "react";

const ProductsListItem = ({ productName, shortDescription, price }: any) => {
  // const getPic = () => {
  //   axiosService.get("/Get/GetMedia")
  // }
  return (
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
              {productName}
            </a>
            {/* <!--end::Title--> */}
            {/* <!--begin::Description--> */}
            <div className="text-muted fs-7 fw-bold">{shortDescription}</div>
            {/* <!--end::Description--> */}
          </div>
        </div>
      </td>
      <td>
        {/* <!--begin::Badges--> */}
        <div className="badge badge-light-success">{price}</div>
        {/* <!--end::Badges--> */}
      </td>
      <td className="text-end">
        <div className="flex ">
          <div className="px-3">
            <a href="/products/add-product" className="">
              Edit
            </a>
          </div>
          <div className="px-3 ">
            <a href="#" className="">
              Delete
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ProductsListItem;
