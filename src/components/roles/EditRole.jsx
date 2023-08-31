import React, { useState } from "react";
import { axiosService } from "../../services/axiosService";

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
    axiosService.put("/AdminAccount/updateRole", body).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
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
                    // onClick={() => setShowAddModal(false)}
                  >
                    انصراف
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => {
                      updateRole();
                      setShowEditModal(false);
                    }}
                  >
                    <span className="indicator-label">ثیت</span>
                    <span className="indicator-progress">
                      لطفا صبر کنید...
                      <span className="align-middle spinner-border spinner-border-sm ms-2"></span>
                    </span>
                  </button>
                </div>
                {/* <!--end::Actions--> */}
              </form>
              {/* <!--end::Form--> */}
            </div>
            {/* <!--end::Modal body--> */}
          </div>
          {/* <!--end::Modal content--> */}
        </div>
        {/* <!--end::Modal dialog--> */}
      </div>
    </>
  );
};

export default EditRole;