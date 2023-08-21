import React, { useState } from "react";
import AddNewRoleModal from "./AddNewRoleModal";

const AddNewRole = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      {/* BEGIN::ADD NEW ROLE CARD */}
      <div className="col-md-4">
        {/* <!--begin::Card--> */}
        <div className="card h-md-100">
          {/* <!--begin::Card body--> */}
          <div className="card-body d-flex flex-center">
            {/* <!--begin::Button--> */}
            <button
              type="button"
              className="btn btn-clear d-flex flex-column flex-center"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_add_role"
              onClick={() => setShowAddModal(true)}
            >
              {/* <!--begin::Illustration--> */}
              <img src="4.png" alt="" className="mw-100 mh-150px mb-7" />
              {/* <!--end::Illustration--> */}
              {/* <!--begin::Label--> */}
              <div className="text-gray-600 fw-bold fs-3 text-hover-primary">
                Add New Role
              </div>
              {/* <!--end::Label--> */}
            </button>
            {/* <!--begin::Button--> */}
          </div>
          {/* <!--begin::Card body--> */}
        </div>
        {/* <!--begin::Card--> */}
      </div>
      {showAddModal && <AddNewRoleModal setShowAddModal={setShowAddModal} />}
    </>
  );
};

export default AddNewRole;
