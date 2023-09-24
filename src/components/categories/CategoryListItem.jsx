import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosService } from "../../services/axiosService";
import { toast } from "react-toastify";
import ConfirmationDialog from "../common/Confirm";

const CategoryListItem = ({ category, getCategories }) => {
  const [img, setImg] = useState(null);

  const getPic = () => {
    const body = {
      id: category?.id,
      mediaFieldName: "categoryImageName",
    };
    axiosService
      .post("/Media/GetMedia", body)
      .then((res) => {
        setImg(res?.data);
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
    axiosService.put("/Category/updateCategory", body).then((res) => {
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
                href="#"
                className="mb-1 text-gray-800 text-hover-primary fs-5 fw-bold"
                data-kt-ecommerce-category-filter="category_name"
              >
                {category?.title}
              </a>
              {/* <!--end::Title--> */}
              {/* <!--begin::Description--> */}
              <div className="text-muted fs-7 fw-bold">
                {category?.urlTitle}
              </div>
              {/* <!--end::Description--> */}
            </div>
          </div>
        </td>
        {/* <td>
          
          <div className="badge badge-light-success">Automated</div>
          
        </td> */}
        <td className="text-end">
          <div className="flex ">
            <div className="px-3">
              <NavLink
                to={{
                  pathname: `/categories/edit-category/id=${category?.id}`,
                }}
                state={category}
              >
                {/* <a href="/products/add-product" className=""> */}
                ویرایش
                {/* </a> */}
              </NavLink>
            </div>
            <button
              className="px-3 "
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
