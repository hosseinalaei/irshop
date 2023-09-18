import { NavLink } from "react-router-dom";
import { axiosService } from "../../services/axiosService";
// import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ProductsListItem = ({ product, getProducts }) => {
  const [img, setImg] = useState(null);

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

  const deleteProduct = (product) => {
    const body = {
      ...product,
      isDelete: true,
    };

    axiosService.put("/AdminProducts/updateProduct", body).then((res) => {
      if (res?.status === "Success") {
        toast.success("عملیات با موفقیت انجام شد", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          // progress: undefined,
          theme: "light",
          style: { fontFamily: "inherit" },
        });
        setTimeout(() => {
          getProducts();
        }, 500);
      } else if (res?.status === "Error") {
        toast.error("مشکلی رخ داده است", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          // progress: undefined,
          theme: "light",
          style: { fontFamily: "inherit" },
        });
      }
    });
  };

  return (
    <tr>
      <td>
        {/* <div className="form-check form-check-sm form-check-custom form-check-solid">
          <input className="form-check-input" type="checkbox" value="1" />
        </div> */}
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
            <img
              src={img ? `data:image/jpeg;base64,${img}` : "/blank-image.svg"}
              alt=""
            />
          </a>
          {/* <!--end::Thumbnail--> */}
          <div className="ms-5">
            {/* <!--begin::Title--> */}
            <a
              // href="/"
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
              state={product}
            >
              ویرایش
            </NavLink>
          </div>
          <button className="px-3" onClick={() => deleteProduct(product)}>
            حذف
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductsListItem;
