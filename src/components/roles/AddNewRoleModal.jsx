import { axiosService } from "../../services/axiosService";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useAxios from "../../hooks/useAxios";

const AddNewRoleModal = ({ setShowAddModal, setShowToast, getRoles }) => {
  const [role, setRole] = useState({
    name: "",
    title: "",
    accessLevel: "",
    isDelete: false,
  });

  const httpRequest = useAxios();

  const addRole = () => {
    const body = {
      name: role?.name,
      title: role?.title,
      accessLevel: role?.accessLevel,
      isDelete: role?.isDelete,
      id: uuidv4(),
    };
    // axiosService.post("/Role/addrole", body)
    httpRequest({
      url: '/Role/addrole',
      method: 'POST',
      data: body,
    })
    .then((res) => {
      if (res?.status === "Success") {
        setShowToast("Success");
        setTimeout(() => {
          getRoles();
        }, 500);
      } else {
        setShowToast("error");
      }
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
            <div className="p-10 pt-0 mx-5 modal-body ">
              <form className="form">
                <div className="flex flex-col scroll-y me-n7">
                  <div className="mb-10 ">
                    <label className="mb-2 fs-5 fw-bold form-label">
                      <span className="required">نام</span>
                    </label>
                    <input
                      className="form-control"
                      placeholder="نام نقش را وارد کنید"
                      name="role_name"
                      value={role?.name}
                      onChange={(e) =>
                        setRole({ ...role, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-10 fv-row">
                    <label className="mb-2 fs-5 fw-bold form-label">
                      <span className="required">عنوان</span>
                    </label>
                    <input
                      className="form-control"
                      placeholder="عنوان نقش را وارد کنید"
                      name="role_title"
                      value={role?.title}
                      onChange={(e) =>
                        setRole({ ...role, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-10 fv-row">
                    <label className="mb-2 fs-5 fw-bold form-label">
                      <span className="required">سطح دسترسی</span>
                    </label>
                    <input
                      className="form-control"
                      placeholder="سطح دسترسی را وارد کنید"
                      name="role_accessibility"
                      onChange={(e) =>
                        setRole({ ...role, accessLevel: e.target.value })
                      }
                      value={role?.accessLevel}
                    />
                  </div>
                  <div className="mb-10 fv-row">
                    <label className="mb-2 fs-5 fw-bold form-label">
                      <span className="required">Is Delete</span>
                    </label>
                    <select
                      className="mb-2 form-select"
                      value={role?.isDelete}
                      onChange={(e) =>
                        setRole({ ...role, isDelete: e.target.value })
                      }
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
                    className="px-10 py-3 bg-slate-200 me-3 rounded-md  hover:bg-slate-300"
                    onClick={() => setShowAddModal(false)}
                  >
                    انصراف
                  </button>

                  <button
                    type="submit"
                    onClick={() => {
                      addRole();
                      setShowAddModal(false);
                    }}
                    className="px-10 py-2 text-2xl text-white bg-blue-500 rounded-md hover:bg-blue-600"
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

export default AddNewRoleModal;
