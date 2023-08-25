import React from "react";

interface EditRoleProps {
  setShowEditModal: any;
  selectedRole: any;
}

const EditRole = ({ setShowEditModal, selectedRole }: EditRoleProps) => {
  return (
    <>
      <div
        className="fixed z-50 w-full m-5 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl top-1/2 left-1/2 p-28 rounded-2xl"
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
              <h2 className="fw-bold">Update Role</h2>
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
            <div className="mx-5 modal-body scroll-y my-7">
              {/* <!--begin::Form--> */}
              <form id="kt_modal_update_role_form" className="form" action="#">
                {/* <!--begin::Scroll--> */}
                <div
                  className="d-flex flex-column scroll-y me-n7 pe-7"
                  id="kt_modal_update_role_scroll"
                  data-kt-scroll="true"
                  data-kt-scroll-activate="{default: false, lg: true}"
                  data-kt-scroll-max-height="auto"
                  data-kt-scroll-dependencies="#kt_modal_update_role_header"
                  data-kt-scroll-wrappers="#kt_modal_update_role_scroll"
                  data-kt-scroll-offset="300px"
                >
                  {/* <!--begin::Input group--> */}
                  <div className="mb-10 fv-row">
                    {/* <!--begin::Label--> */}
                    <label className="mb-2 fs-5 fw-bold form-label">
                      <span className="required">Role name</span>
                    </label>
                    {/* <!--end::Label--> */}
                    {/* <!--begin::Input--> */}
                    <input
                      className="form-control form-control-solid"
                      placeholder="Enter a role name"
                      name="role_name"
                      value={selectedRole?.title}
                    />
                    {/* <!--end::Input--> */}
                  </div>
                  {/* <!--end::Input group--> */}
                  {/* <!--begin::Permissions--> */}
                  <div className="fv-row">
                    {/* <!--begin::Label--> */}
                    <label className="mb-2 fs-5 fw-bold form-label">
                      Role Permissions
                    </label>
                    {/* <!--end::Label--> */}
                    {/* <!--begin::Table wrapper--> */}
                    <div className="table-responsive"></div>
                    {/* <!--end::Table wrapper--> */}
                  </div>
                  {/* <!--end::Permissions--> */}
                </div>
                {/* <!--end::Scroll--> */}
                {/* <!--begin::Actions--> */}
                <div className="text-center pt-15">
                  <button
                    type="reset"
                    className="btn btn-light me-3"
                    onClick={() => setShowEditModal(false)}
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => setShowEditModal(false)}
                  >
                    <span className="indicator-label">Submit</span>
                    <span className="indicator-progress">
                      Please wait...
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
