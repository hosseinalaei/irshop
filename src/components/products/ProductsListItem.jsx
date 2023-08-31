import { NavLink } from "react-router-dom";
import { axiosService } from "../../services/axiosService";
// import Link from "next/link";
import React, { useState } from "react";

const ProductsListItem = ({ product }) => {
  const [img, setImg] = useState();

  const getPic = () => {
    const body = {
      id: product?.id,
      mediaFieldName: "productImageName",
    };
    axiosService
      .post("/Get/GetMedia", body)
      .then((res) => {
        setImg(res?.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getPic();
  }, []);
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
          <a href="#" className="symbol symbol-50px">
            {/* <span
              className="symbol-label"
              style={{
                backgroundImage: "url(68.gif)",
              }}
            ></span> */}
            <img src={`data:image/jpeg;base64,${img}`} alt="" />
          </a>
          {/* <!--end::Thumbnail--> */}
          <div className="ms-5">
            {/* <!--begin::Title--> */}
            <a
              href="../../demo23/dist/apps/ecommerce/catalog/edit-category.html"
              className="mb-1 text-gray-800 text-hover-primary fs-5 fw-bold"
              data-kt-ecommerce-category-filter="category_name"
            >
              {product?.productName}
            </a>
            {/* <!--end::Title--> */}
            {/* <!--begin::Description--> */}
            <div className="text-muted fs-7 fw-bold">
              {product?.shortDescription}
            </div>
            {/* <!--end::Description--> */}
          </div>
        </div>
      </td>
      <td>
        {/* <!--begin::Badges--> */}
        <div className="badge badge-light-success">{product?.price}</div>
        {/* <!--end::Badges--> */}
      </td>
      <td className="text-end">
        <div className="flex ">
          <div className="px-3">
            <NavLink
              to={{
                pathname: `/products/edit-product/id=${product?.id}`,
              }}
            >
              {/* <a href="/products/add-product" className=""> */}
              ویرایش
              {/* </a> */}
            </NavLink>
          </div>
          <div className="px-3 ">
            <a href="#" className="">
              حذف
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ProductsListItem;