import React, { useState } from "react";
import { axiosService } from "../../services/axiosService";
import { ToastContainer, toast } from "react-toastify";

const EditRole = ({ setShowEditModal, selectedRole }) => {
  const [editedRole, setEditedRole] = useState({
    name: selectedRole?.name,
    title: selectedRole?.title,
    accessLevel: selectedRole?.accessLevel,
    isDelete: selectedRole?.isDelete,
    id: selectedRole?.id,
  });

  const updateRole = () => {
    const body = {
      name: editedRole?.name,
      title: editedRole?.title,
      accessLevel: editedRole?.accessLevel,
      isDelete: editedRole?.isDelete,
      id: editedRole?.id,
    };
    axiosService.put("/Role/updateRole", body).then((res) => {
      res?.status === "Success"
        ? toast.success("عملیات با موفقیت انجام شد", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            // progress: undefined,
            theme: "light",
            style: { fontFamily: "inherit" },
          })
        : toast.error("مشکلی رخ داده است", {
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
    });
  };
  return (
    <>
      <ToastContainer />
      <div
        style={{ height: "80%", overflow: "scroll" }}
        className="fixed z-50 w-full p-0 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl top-1/2 left-1/2 rounded-2xl"
      >
        <div className="modal-dialog modal-dialog-centered mw-750px">
          <div className="modal-content ">
            <div className="sticky top-0 z-20 w-full px-5 pt-5 pb-3 bg-white modal-header">
              {/* <!--begin::Modal title--> */}
              <h2 className="fw-bold">ویرایش نقش</h2>
              {/* <!--end::Modal title--> */}
              {/* <!--begin::Close--> */}
              <div
                className="btn btn-icon btn-sm btn-active-icon-primary"
                data-kt-roles-modal-action="close"
              >
                <i className="ki-outline ki-cross fs-1"></i>
              </div>
              {/* <!--end::Close--> */}
            </div>
            <div className="p-10 pt-0 mx-5 modal-body ">
              <form className="form">
                <div className="flex flex-col scroll-y me-n7">
                  <div className="mb-10 ">
                    <label className="mb-2 fs-5 fw-bold form-label">
                      <span className="required">نام</span>
                    </label>
                    <input
                      className="form-control form-control-solid"
                      placeholder="نام نقش را وارد کنید"
                      name="role_name"
                      value={editedRole?.name}
                      onChange={(e) =>
                        setEditedRole({ ...editedRole, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-10 fv-row">
                    <label className="mb-2 fs-5 fw-bold form-label">
                      <span className="required">عنوان</span>
                    </label>
                    <input
                      className="form-control form-control-solid"
                      placeholder="عنوان نقش را وارد کنید"
                      name="role_title"
                      value={editedRole?.title}
                      onChange={(e) =>
                        setEditedRole({ ...editedRole, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-10 fv-row">
                    <label className="mb-2 fs-5 fw-bold form-label">
                      <span className="required">سطح دسترسی</span>
                    </label>
                    <input
                      className="form-control form-control-solid"
                      placeholder="سطح دسترسی را وارد کنید"
                      name="role_accessibility"
                      value={editedRole?.accessLevel}
                      onChange={(e) =>
                        setEditedRole({
                          ...editedRole,
                          accessLevel: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-10 fv-row">
                    <label className="mb-2 fs-5 fw-bold form-label">
                      <span className="required">Is Delete</span>
                    </label>
                    <select
                      className="mb-2 form-select"
                      value={editedRole?.isDelete}
                      // onChange={(e) =>
                      //   setRole({ ...role, isDelete: e.target.value })
                      // }
                    >
                      <option></option>
                      <option value={true}>بله</option>
                      <option value={false} selected>
                        خیر
                      </option>
                    </select>
                  </div>
                </div>
                <div className="text-left">
                  <button
                    type="reset"
                    className="btn btn-light me-3"
                    onClick={() => setShowEditModal(false)}
                  >
                    انصراف
                  </button>

                  <button
                    type="submit"
                    onClick={() => {
                      updateRole();
                      setShowEditModal(false);
                    }}
                    className="px-10 py-2 text-2xl font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  >
                    ثبت
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditRole;
