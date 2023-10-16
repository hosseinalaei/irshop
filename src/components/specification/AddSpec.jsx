import React, { useState } from "react";
import { axiosService } from "../../services/axiosService";
import { v4 as uuidv4 } from "uuid";
import useAxios from "../../hooks/useAxios";

const AddSpec = ({ setShowAddModal, setShowToast, getSpecs }) => {
  const [spec, setSpec] = useState({
    specName: "",
    specTitle: "",
    specValue: "",
    isDelete: false,
  });

  const httpRequest = useAxios();
  const addSpec = () => {
    const body = {
      specName: spec?.specName,
      specTitle: spec?.specTitle,
      specValue: spec?.specValue,
      isDelete: spec?.isDelete,
      id: uuidv4(),
    };
    // axiosService .post("/Specification/registerSpecification", body)
    httpRequest({
      url:'/Specification/registerSpecification',
      method:'POST',
      data: body,
    })
      .then((res) => {
        if (res?.status === "Success") {
          setShowToast("Success");
          setTimeout(() => {
            getSpecs();
          }, 500);
        } else {
          setShowToast("error");
        }
      });
  };

  return (
    <div
      style={{ height: "80%", overflow: "scroll" }}
      className="fixed z-50 w-full p-0 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl top-1/2 left-1/2 rounded-2xl"
    >
      <div className="modal-dialog modal-dialog-centered mw-750px">
        <div className="modal-content ">
          <div className="sticky top-0 z-20 w-full px-5 pt-5 pb-3 bg-white modal-header">
            {/* <!--begin::Modal title--> */}
            <h2 className="fw-bold">افزودن ویژگی جدید</h2>
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
                    placeholder="نام ویژگی را وارد کنید"
                    name="spec_name"
                    value={spec?.specName}
                    onChange={(e) =>
                      setSpec({ ...spec, specName: e.target.value })
                    }
                  />
                </div>
                <div className="mb-10 fv-row">
                  <label className="mb-2 fs-5 fw-bold form-label">
                    <span className="required">عنوان</span>
                  </label>
                  <input
                    className="form-control form-control-solid"
                    placeholder="عنوان ویژگی را وارد کنید"
                    name="spec_title"
                    value={spec?.specTitle}
                    onChange={(e) =>
                      setSpec({ ...spec, specTitle: e.target.value })
                    }
                  />
                </div>
                <div className="mb-10 fv-row">
                  <label className="mb-2 fs-5 fw-bold form-label">
                    <span className="required">مقدار</span>
                  </label>
                  <input
                    className="form-control form-control-solid"
                    placeholder="مقدار را وارد کنید"
                    name="spec_value"
                    onChange={(e) =>
                      setSpec({ ...spec, specValue: e.target.value })
                    }
                    value={spec?.specValue}
                  />
                </div>
                <div className="mb-10 fv-row">
                  <label className="mb-2 fs-5 fw-bold form-label">
                    <span className="required">Is Delete</span>
                  </label>
                  <select
                    className="mb-2 form-select"
                    value={spec?.isDelete}
                    onChange={(e) =>
                      setSpec({ ...spec, isDelete: e.target.value })
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
                  className="btn btn-light me-3"
                  onClick={() => setShowAddModal(false)}
                >
                  انصراف
                </button>

                <button
                  type="submit"
                  onClick={() => {
                    addSpec();
                    setShowAddModal(false);
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
  );
};

export default AddSpec;
