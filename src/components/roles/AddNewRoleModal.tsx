import { axiosService } from "@/api.js/axiosService";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface AddNewRoleModalProps {
  setShowAddModal: any;
}

const AddNewRoleModal = ({ setShowAddModal }: AddNewRoleModalProps) => {
  const [roleName, setRoleName] = useState("");
  const [accessLevel, setAccessLevel] = useState("");
  const [roleTitle, setRoleTitle] = useState("");
  const addRole = () => {
    const body = {
      name: roleName,
      title: roleTitle,
      accessLevel: accessLevel,
    };
    axiosService.post("/AdminAccount/addrole", body).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="fixed z-50 w-full p-10 m-5 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl top-1/2 left-1/2 rounded-2xl">
        <div className="modal-dialog modal-dialog-centered mw-750px">
          <div className="modal-content">
            <div className="modal-header">
              {/* <!--begin::Modal title--> */}
              <h2 className="fw-bold">اضافه کردن نقش جدید</h2>
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
            <div className="mx-5 modal-body my-7">
              <form className="form">
                <div className="flex flex-col scroll-y me-n7">
                  <div className="mb-10 fv-row">
                    <label className="mb-2 fs-5 fw-bold form-label">
                      <span className="required">نام</span>
                    </label>
                    <input
                      className="form-control form-control-solid"
                      placeholder="نام نقش را وارد کنید"
                      name="role_name"
                      value={roleName}
                      onChange={(e) => setRoleName(e.target.value)}
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
                      value={roleTitle}
                      onChange={(e) => setRoleTitle(e.target.value)}
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
                      onChange={(e) => setAccessLevel(e.target.value)}
                      value={accessLevel}
                    />
                  </div>
                </div>
                <div className="text-center pt-15">
                  <button
                    type="reset"
                    className="btn btn-light me-3"
                    onClick={() => setShowAddModal(false)}
                  >
                    انصراف
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => {
                      addRole();
                      setShowAddModal(false);
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

export default AddNewRoleModal;
