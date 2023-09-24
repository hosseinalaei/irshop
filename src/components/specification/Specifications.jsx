import React, { useEffect, useState } from "react";
import AddSpec from "./AddSpec";
import ConfirmationDialog from "../common/Confirm";
import { axiosService } from "../../services/axiosService";
import { ToastContainer, toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import Loading from "../common/Loading";
import AddCard from "./AddCard";
import EditSpec from "./EditSpec";

const Specifications = ({ product, setProduct }) => {
  const [specs, setSpecs] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedSpec, setSelectedRole] = useState({});
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState("");

  useEffect(() => {
    if (showToast === "Success") {
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
    } else if (showToast === "Error") {
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
  }, [showToast]);

  const showEditModalFun = (item) => {
    setShowEditModal(true);
    setSelectedRole(item);
  };

  const getSpecs = () => {
    setLoading(true);
    axiosService.get("/Specification/getAllSpecs").then((res) => {
      setSpecs(res?.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getSpecs();
  }, []);

  const [showAddModal, setShowAddModal] = useState(false);

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleCancel = () => {
    setIsConfirmationOpen(false);
  };

  const deleteSpec = (spec) => {
    const body = {
      ...spec,
      isDelete: true,
    };

    axiosService.put("/Specification/updateSpecification", body).then((res) => {
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
        setIsConfirmationOpen(false);
        setTimeout(() => {
          getSpecs();
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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ToastContainer />
          <div className="m-3 page-title d-flex flex-column justify-content-center">
            <h1 className="my-0 page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center">
              ویژگی‌ها
            </h1>

            <ul className="pt-1 my-0 breadcrumb breadcrumb-separatorless fw-semibold fs-7">
              <NavLink
                to="/"
                className="text-lg font-bold text-black hover:text-red-500"
              >
                صفحه اصلی
              </NavLink>

              <li className="breadcrumb-item">/</li>
              <li className="text-lg font-bold text-black hover:text-red-500">
                ویژگی‌ها
              </li>

              {/* <li className="breadcrumb-item text-muted">نقش‌ها</li> */}
            </ul>
          </div>
          <div className="relative row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
            {specs &&
              specs?.map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="card card-flush h-md-100">
                    <div className="card-header">
                      <div className="card-title">
                        <h2>
                          {item?.specName} - ({item?.specTitle})
                        </h2>
                      </div>
                    </div>
                    <div className="pt-1 card-body">
                      <div className="mb-5 text-gray-600 fw-bold">
                        مقدار: {item?.specValue}
                      </div>
                    </div>
                    <div className="flex-wrap pt-0 card-footer">
                      <button
                        type="button"
                        className="my-1 btn btn-light btn-active-light-primary"
                        onClick={() => showEditModalFun(item)}
                      >
                        ویرایش
                      </button>
                      <button
                        type="button"
                        className="my-1 btn btn-light btn-active-light-primary"
                        onClick={() => setIsConfirmationOpen(true)}
                      >
                        حذف
                      </button>
                      <ConfirmationDialog
                        isOpen={isConfirmationOpen}
                        setIsOpen={setIsConfirmationOpen}
                        message="از حذف محصول اطمینان دارید؟"
                        onConfirm={() => deleteSpec(item)}
                        onCancel={handleCancel}
                        confirmText="بله"
                        cancelText="خیر"
                      />
                    </div>
                  </div>
                </div>
              ))}

            {(showAddModal || showEditModal) && (
              <div>
                <div
                  className="fixed top-0 left-0 z-50 w-full h-full bg-black opacity-50"
                  onClick={() =>
                    showAddModal
                      ? setShowAddModal(false)
                      : setShowEditModal(false)
                  }
                ></div>
              </div>
            )}
            <AddCard
              setShowToast={setShowToast}
              setShowAddModal={setShowAddModal}
              showAddModal={showAddModal}
              getSpecs={getSpecs}
            />

            {showEditModal && (
              // <div className="z-50 w-1/2 h-full bg-black">
              <EditSpec
                setShowEditModal={setShowEditModal}
                selectedSpec={selectedSpec}
                getSpecs={getSpecs}
              />
              // </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Specifications;
