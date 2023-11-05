import React from "react";
import ConfirmationDialog from "../../common/Confirm";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import useAxios from "../../../hooks/useAxios";

export const GroupsListItem = ({ group, getGroups }) => {
  const httpRequest = useAxios();

  const deleteGroup = (deleteGroup) => {
    delete deleteGroup?.spec;
    const body = {
      ...deleteGroup,
      isDelete: true,
    };
    // axiosService.put("/Category/updateCategory", body)
    httpRequest({
      url: "/Specification/updateAttributeGroup",
      method: "PUT",
      data: body,
    })
      .then((res) => {
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
          setTimeout(() => {
            getGroups();
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
      })
      .finally(() => setIsConfirmationOpen(false));
  };

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleCancel = () => {
    setIsConfirmationOpen(false);
  };
  return (
    <tr
      // onClick={() => handleClickRow(product)}
      className="cursor-pointer hover:bg-slate-100"
    >
      <td>
        <div className="text-2xl badge-light-success">{group?.name}</div>
      </td>
      <td className="flex flex-wrap">
        {group?.spec?.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 m-3 text-center bg-gray-200 rounded-lg"
          >
            {item?.name}
          </div>
        ))}
      </td>

      <td className="text-center">
        <div className="flex ">
          <NavLink
            className="px-2 py-1 mx-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
            to={`/admin/specification/groups/edit-group/${group?.id}`}
            state={group}
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
            isOpen={isConfirmationOpen}
            setIsOpen={setIsConfirmationOpen}
            message="از حذف محصول اطمینان دارید؟"
            onConfirm={() => deleteGroup(group)}
            onCancel={handleCancel}
            confirmText="بله"
            cancelText="خیر"
          />
        </div>
      </td>
    </tr>
  );
};
