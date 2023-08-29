"use client";
import React, { useEffect, useState } from "react";
import data from "./roles.json";
import AddNewRole from "./AddNewRole";
import EditRole from "./EditRole";
import { axiosService } from "@/api.js/axiosService";

const Roles = () => {
  // const roles = data?.roles;
  const [roles, setRoles] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState({});

  const showEditModalFun = (item: object) => {
    setShowEditModal(true);
    setSelectedRole(item);
  };

  const getRoles = () => {
    axiosService
      .get("/AdminAccount/getActiveRoles")
      .then((res) => console.log(res));
  };

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <>
      {/* <div id="app_content_container" className="app-container container-xxl"> */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
        {roles &&
          roles?.map((item: any, index: any) => (
            <div key={index} className="col-md-4">
              <div className="card card-flush h-md-100">
                <div className="card-header">
                  <div className="card-title">
                    <h2>{item?.title}</h2>
                  </div>
                </div>
                <div className="pt-1 card-body">
                  <div className="mb-5 text-gray-600 fw-bold">
                    سطح دسترسی: {item?.accessLevel}
                  </div>
                  {/* <div className="text-gray-600 d-flex flex-column"> */}
                  {/* {item?.permisions?.map((permision, index) => (
                    <div key={index} className="py-2 d-flex align-items-center">
                      <span className="bullet bg-primary me-3"></span>
                      {permision?.text}
                    </div>
                  ))} */}

                  {/* <div className="py-2 d-flex align-items-center">
                    <span className="bullet bg-primary me-3"></span>
                    <em>and 7 more...</em>
                  </div> */}
                  {/* </div> */}
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
  );
};

export default Roles;
