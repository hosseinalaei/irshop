import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosService } from "../../services/axiosService";
import { toast } from "react-toastify";
import ConfirmationDialog from "../common/Confirm";
import useAxios from "../../hooks/useAxios";

const CategoryListItem = ({ category, getCategories }) => {
  const [img, setImg] = useState(null);

  const httpRequest = useAxios();

  const getPic = () => {
    const body = [
      {
        id: category?.id,
        mediaFieldName: "categoryImageName",
      },
    ];
    axiosService
      .post("/Media/GetMedia", body)
      .then((res) => {
        setImg(res?.data[0]);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getPic();
  }, []);

  const deleteCategory = (id) => {
    const body = {
      id,
      title: category?.title,
      urlTitle: category?.urlTitle,
      isDelete: true,
    };
    // axiosService.put("/Category/updateCategory", body)
    httpRequest({
      url: "/Category/updateCategory",
      method: "PUT",
      data: body,
    }).then((res) => {
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
          getCategories();
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

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleCancel = () => {
    setIsConfirmationOpen(false);
  };
  return (
    <>
      <tr>
        <td></td>
        <td>
          <div className="d-flex">
            <a href="#" className="symbol symbol-50px">
              <img
                src={
                  img
                    ? `data:image/jpeg;base64,${img.mediaFieldName}`
                    : "/blank-image.svg"
                }
                alt=""
              />
            </a>
            <div className="ms-5">
              <a
                href="#"
                className="mb-1 text-gray-800 text-hover-primary fs-5 fw-bold"
                data-kt-ecommerce-category-filter="category_name"
              >
                {category?.title}
              </a>
              <div className="text-muted fs-7 fw-bold">
                {category?.urlTitle}
              </div>
            </div>
          </div>
        </td>

        <td className="text-end">
          <div className="flex ">
            <NavLink
              className="px-2 py-1 mx-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              to={`/admin/categories/edit-category/${category?.id}`}
              state={category}
            >
              ویرایش
            </NavLink>

            <button
              className="px-2 py-1 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              onClick={() => setIsConfirmationOpen(true)}
            >
              حذف
            </button>
            <ConfirmationDialog
              isOpen={isConfirmationOpen}
              setIsOpen={setIsConfirmationOpen}
              message="از حذف دسته‌بندی اطمینان دارید؟"
              onConfirm={() => deleteCategory(category?.id)}
              onCancel={handleCancel}
              confirmText="بله"
              cancelText="خیر"
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default CategoryListItem;
