import React, { useState } from "react";
import AddNewRoleModal from "./AddSpec";

const AddCard = ({ setShowToast, setShowAddModal, showAddModal, getSpecs }) => {
  // const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <div className="col-md-4">
        <div className="card h-md-100">
          <div className="card-body d-flex flex-center">
            <button
              type="button"
              className="btn btn-clear d-flex flex-column flex-center"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_add_role"
              onClick={() => setShowAddModal(true)}
            >
              <img src="4.png" alt="" className="mw-100 mh-150px mb-7" />
              <div className="text-gray-600 fw-bold fs-3 text-hover-primary">
                افزودن ویژگی جدید
              </div>
            </button>
          </div>
        </div>
      </div>
      {showAddModal && (
        <AddNewRoleModal
          setShowAddModal={setShowAddModal}
          setShowToast={setShowToast}
          getSpecs={getSpecs}
        />
      )}
    </>
  );
};

export default AddCard;
