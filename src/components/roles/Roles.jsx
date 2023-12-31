import React, { useContext, useEffect, useState } from "react";
import AddNewRole from "./AddNewRole";
import EditRole from "./EditRole";
import { axiosService } from "../../services/axiosService";
import Loading from "../common/Loading";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ConfirmationDialog from "../common/Confirm";
import axios from "axios";
import useAxios from "../../hooks/useAxios";
import AuthContext from "../../contexts/AuthContext";

const Roles = () => {
  // const roles = data?.roles;

  const [roles, setRoles] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState({});
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState("");
  const httpRequest = useAxios();
  const { setAccessToken } = useContext(AuthContext);

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
  const accessToken = localStorage.getItem("user-token");

  const getRoles = () => {
    httpRequest({
      url: "/Role/getActiveRoles",
      method: "GET",
    }).then((res) => {
      setRoles(res.data);
      setLoading(false);
    });

    // axios({
    //   baseURL:'https://138.201.167.230:5050',
    //   url: '/Role/getActiveRoles',
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${accessToken}`
    //   }})
    // setLoading(true);
    // axiosService.get("/Role/getActiveRoles").then((res) => {
    //   setRoles(res?.data);
    //   setLoading(false);
    // });
  };

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    setAccessToken(token);
    getRoles();
  }, []);

  const [showAddModal, setShowAddModal] = useState(false);

  const deleteRole = (id) => {
    const body = {
      id: id,
      isDelete: true,
    };

    // axiosService.put("/Role/updateRole", body)
    httpRequest({
      url: "/Role/updateRole",
      method: "PUT",
      data: body,
    }).then((res) => {
      if (res?.status === "Success") {
        setIsConfirmationOpen({ id: "" });
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
          getRoles();
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
  const [isConfirmationOpen, setIsConfirmationOpen] = useState({ id: "" });

  const handleCancel = () => {
    setIsConfirmationOpen(false);
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
              نقش‌ها
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
                نقش‌ها
              </li>

              {/* <li className="breadcrumb-item text-muted">نقش‌ها</li> */}
            </ul>
          </div>
          <div className="relative row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
            {roles &&
              roles?.map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="card card-flush h-md-100">
                    <div className="card-header">
                      <div className="card-title">
                        <h2>
                          {item?.name} - ({item?.title})
                        </h2>
                      </div>
                    </div>
                    <div className="pt-1 card-body">
                      <div className="mb-5 text-gray-600 fw-bold">
                        سطح دسترسی: {item?.accessLevel}
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
                        onClick={() => setIsConfirmationOpen({ id: item?.id })}
                      >
                        حذف
                      </button>
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
                >
                  {/* Clicking on the backdrop should close the modal */}
                </div>
              </div>
            )}
            <AddNewRole
              setShowToast={setShowToast}
              setShowAddModal={setShowAddModal}
              showAddModal={showAddModal}
              getRoles={getRoles}
            />

            {showEditModal && (
              // <div className="z-50 w-1/2 h-full bg-black">
              <EditRole
                setShowEditModal={setShowEditModal}
                selectedRole={selectedRole}
                getRoles={getRoles}
              />
              // </div>
            )}
          </div>
          {isConfirmationOpen?.id && (
            <div className="flex items-center justify-center">
              <ConfirmationDialog
                isOpen={isConfirmationOpen}
                setIsOpen={() => setIsConfirmationOpen({ id: "" })}
                message="از حذف نقش اطمینان دارید؟"
                onConfirm={() => deleteRole(isConfirmationOpen?.id)}
                onCancel={handleCancel}
                confirmText="بله"
                cancelText="خیر"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Roles;
