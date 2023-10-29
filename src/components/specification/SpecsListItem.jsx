import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ConfirmationDialog from "../common/Confirm";
import EditSpec from "./EditSpec";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";

const SpecsListItem = ({ spec, getSpecs }) => {
  const [eidtItem, setEditItem] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const httpRequest = useAxios();

  const deleteSpec = (spec) => {
    const body = {
      ...spec,
      isDelete: true,
    };

    // axiosService.put("/Specification/updateSpecification", body)
    httpRequest({
      url: "/Specification/updateAttributes",
      method: "PUT",
      data: body,
    }).then((res) => {
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

  const handleCancel = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <>
      {eidtItem && (
        <EditSpec selectedSpec={spec} setShowEditModal={setEditItem} />
      )}
      <ConfirmationDialog
        isOpen={isConfirmationOpen}
        setIsOpen={setIsConfirmationOpen}
        message="از حذف محصول اطمینان دارید؟"
        onConfirm={() => deleteSpec(spec)}
        onCancel={handleCancel}
        confirmText="بله"
        cancelText="خیر"
      />
      <tr
        // onClick={() => handleClickRow(product)}
        className="cursor-pointer hover:bg-slate-100"
        // onClick={() => setIsConfirmationOpen(true)}
      >
        <td>
          <div className="text-2xl">{spec?.name}</div>
        </td>
        {/* <td>
          <div className="text-2xl badge-light-success">{spec?.specTitle}</div>
        </td> */}
        <td className="flex">
          {spec?.value?.map((item) => (
            <div className="px-5 py-1 mx-2 text-2xl bg-gray-200 rounded-lg">
              {item?.name}
            </div>
          ))}
        </td>
        <td className="text-center">
          <div className="flex ">
            <NavLink
              className="px-2 py-1 mx-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              onClick={() => setEditItem(true)}
            >
              ویرایش
            </NavLink>

            <button
              className="px-2 py-1 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setIsConfirmationOpen(true);
              }}
            >
              حذف
            </button>
            <ConfirmationDialog
              // isOpen={isConfirmationOpen}
              // setIsOpen={setIsConfirmationOpen}
              // message="از حذف محصول اطمینان دارید؟"
              // onConfirm={() => deleteProduct(product)}
              // onCancel={handleCancel}
              confirmText="بله"
              cancelText="خیر"
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default SpecsListItem;
