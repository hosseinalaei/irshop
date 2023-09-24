import React, { useState } from "react";
import PropTypes from "prop-types";

const ConfirmationDialog = ({
  isOpen,
  setIsOpen,
  message,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
}) => {
  const [dialogOpen, setDialogOpen] = useState(isOpen);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  const handleConfirm = () => {
    onConfirm();
    closeDialog();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    closeDialog();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="z-50 p-6 bg-white rounded-lg shadow-lg ">
            <p className="mb-4 text-lg text-gray-800">{message}</p>
            <div className="flex justify-evenly">
              <button
                className="px-6 py-2 mr-2 text-white bg-green-500 rounded-md"
                onClick={handleConfirm}
              >
                {confirmText || "Confirm"}
              </button>
              <button
                className="px-6 py-2 text-white bg-red-500 rounded-md"
                onClick={handleCancel}
              >
                {cancelText || "Cancel"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ConfirmationDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
};

export default ConfirmationDialog;
