import { axiosService } from "@/api.js/axiosService";
import React, { useState } from "react";

interface AddNewRoleModalProps {
  setShowAddModal: any;
}

const AddNewRoleModal = ({ setShowAddModal }: AddNewRoleModalProps) => {
  const [roleName, setRoleName] = useState("");
  const [accessLevel, setAccessLevel] = useState("");
  const addRole = () => {
    const body = {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      isDelete: true,
      createDate: "2023-08-21T19:52:26.553Z",
      lastUpdateDate: "2023-08-21T19:52:26.553Z",
      name: "string",
      title: "string",
      accessLevel: "string",
    };
    axiosService
      .post("/AdminAccount/addrole", body)
      .then((res) => console.log(res));
  };
  return (
    <>
      <div
        className="fixed z-50 w-full p-10 m-5 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl top-1/2 left-1/2 rounded-2xl"
        // style={{width:"500px"}}
        // id="kt_modal_update_role"
        // tabindex="-1"
        //   aria-hidden="true"
      >
        {/* <!--begin::Modal dialog--> */}
        <div className="modal-dialog modal-dialog-centered mw-750px">
          {/* <!--begin::Modal content--> */}
          <div className="modal-content">
            {/* <!--begin::Modal header--> */}
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
            {/* <!--end::Modal header--> */}
            {/* <!--begin::Modal body--> */}
            <div className="mx-5 modal-body my-7">
              {/* <!--begin::Form--> */}
              <form className="form">
                {/* <!--begin::Scroll--> */}
                <div className="flex flex-col scroll-y me-n7">
                  {/* <!--begin::Input group--> */}
                  <div className="mb-10 fv-row">
                    {/* <!--begin::Label--> */}
                    <label className="mb-2 fs-5 fw-bold form-label">
                      <span className="required">نام</span>
                    </label>
                    {/* <!--end::Label--> */}
                    {/* <!--begin::Input--> */}
                    <input
                      className="form-control form-control-solid"
                      placeholder="نام نقش را وارد کنید"
                      name="role_name"
                      value={roleName}
                      onChange={(e) => setRoleName(e.target.value)}
                    />
                    {/* <!--end::Input--> */}
                  </div>
                  {/* <!--end::Input group--> */}
                  {/* <!--begin::Input group--> */}
                  <div className="mb-10 fv-row">
                    {/* <!--begin::Label--> */}
                    <label className="mb-2 fs-5 fw-bold form-label">
                      <span className="required">سطح دسترسی</span>
                    </label>
                    {/* <!--end::Label--> */}
                    {/* <!--begin::Input--> */}
                    <input
                      className="form-control form-control-solid"
                      placeholder="سطح دسترسی را وارد کنید"
                      name="role_name"
                      onChange={(e) => setAccessLevel(e.target.value)}
                      value={accessLevel}
                    />
                    {/* <!--end::Input--> */}
                  </div>
                  {/* <!--end::Input group--> */}
                  {/* <!--begin::Permissions--> */}
                  {/* <div className="fv-row"> */}
                  {/* <!--begin::Label--> */}
                  {/* <label className="mb-2 fs-5 fw-bold form-label"> */}
                  {/* Role Permissions */}
                  {/* </label> */}
                  {/* <!--end::Label--> */}
                  {/* <!--begin::Table wrapper--> */}
                  {/* <div className="table-responsive"></div> */}
                  {/* <!--end::Table wrapper--> */}
                  {/* </div> */}
                  {/* <!--end::Permissions--> */}
                </div>
                {/* <!--end::Scroll--> */}
                {/* <!--begin::Actions--> */}
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
