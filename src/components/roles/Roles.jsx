import React, { useEffect, useState } from "react";
import AddNewRole from "./AddNewRole";
import EditRole from "./EditRole";
import { axiosService } from "../../services/axiosService";
import Loading from "../common/Loading";
import { NavLink } from "react-router-dom";

const Roles = () => {
  // const roles = data?.roles;
  const [roles, setRoles] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState({});
  const [loading, setLoading] = useState(true);

  const showEditModalFun = (item) => {
    setShowEditModal(true);
    setSelectedRole(item);
  };

  const getRoles = () => {
    setLoading(true);
    axiosService.get("/AdminAccount/getActiveRoles").then((res) => {
      setRoles(res?.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
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
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
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
                      {/* <a
                href="../../demo23/dist/apps/user-management/roles/view.html"
                className="my-1 btn btn-light btn-active-primary me-2"
              >
                View Role
              </a> */}
                      <button
                        type="button"
                        className="my-1 btn btn-light btn-active-light-primary"
                        onClick={() => showEditModalFun(item)}
                      >
                        ویرایش
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            <AddNewRole />
            {showEditModal && (
              // <div className="z-50 w-1/2 h-full bg-black">
              <EditRole
                setShowEditModal={setShowEditModal}
                selectedRole={selectedRole}
              />
              // </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Roles;
