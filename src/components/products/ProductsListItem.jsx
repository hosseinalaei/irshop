import { NavLink, useNavigate } from "react-router-dom";
import { axiosService } from "../../services/axiosService";
// import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ConfirmationDialog from "../common/Confirm";
import useAxios from "../../hooks/useAxios";
import { methods } from "underscore";

const ProductsListItem = ({ product, getProducts, setProduct }) => {
  const [img, setImg] = useState(null);
  const nav = useNavigate();
  const httpRequest = useAxios();

  const getPic = () => {
    const body = [
      {
        id: product?.id,
        mediaFieldName: "productImageName",
      },
    ];
    // axiosService.post("/Media/GetMedia", body)
    httpRequest({
      url: "/Media/GetMedia",
      method: "POST",
      data: body,
    })
      .then((res) => {
        setImg(res?.data[0]);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getPic();
  }, [product]);

  const deleteProduct = (product) => {
    const body = {
      ...product,
      isDelete: true,
    };

    // axiosService.put("/Products/updateProduct", body)
    httpRequest({
      url: "/Products/updateProduct",
      method: "PUT",
      data: body,
    })
      .then((res) => {
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
      })
      .finally(() => setIsConfirmationOpen(false));
  };

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleCancel = () => {
    setIsConfirmationOpen(false);
  };

  const handleClickRow = (product) => {
    nav(`/products/edit-product/id=${product?.id}`, { state: product });
  };

  return (
    <tr
      // onClick={() => handleClickRow(product)}
      className="cursor-pointer hover:bg-slate-100"
    >
      <td className="d-flex">
        <div className="symbol symbol-50px">
          <img
            src={
              img
                ? `data:image/jpeg;base64,${img.mediaFieldName}`
                : "/blank-image.svg"
            }
            alt=""
          />
        </div>
        <div className="ms-5">
          <div className="mb-1 text-gray-800 text-hover-primary fs-5 fw-bold">
            {product?.productName}
          </div>
          <div className="text-muted fs-7 fw-bold">
            {product?.shortDescription}
          </div>
        </div>
      </td>
      <td>
        <div className="text-2xl badge-light-success">
          {product?.productColor[0]?.price}
        </div>
      </td>
      <td className="text-center">
        <div className="flex ">
          <NavLink
            className="px-2 py-1 mx-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
            to={`/admin/products/edit-product/${product?.id}`}
            state={product}
          >
            ویرایش
          </NavLink>

          <button
            className="px-2 py-1 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setIsConfirmationOpen(true);
            }}
          >
            حذف
          </button>
          <ConfirmationDialog
            isOpen={isConfirmationOpen}
            setIsOpen={setIsConfirmationOpen}
            message="از حذف محصول اطمینان دارید؟"
            onConfirm={() => deleteProduct(product)}
            onCancel={handleCancel}
            confirmText="بله"
            cancelText="خیر"
          />
        </div>
      </td>
    </tr>
  );
};

export default ProductsListItem;
