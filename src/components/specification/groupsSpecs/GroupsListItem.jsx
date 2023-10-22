import React from "react";
import ConfirmationDialog from "../../common/Confirm";
import { NavLink } from "react-router-dom";

export const GroupsListItem = ({ group }) => {
  return (
    <tr
      // onClick={() => handleClickRow(product)}
      className="cursor-pointer hover:bg-slate-100"
    >
      <td>
        <div className="text-2xl badge-light-success">{group?.name}</div>
      </td>
      <td className="flex">
        {group?.values?.map((item) => (
          <div className="px-4 py-2 mx-3 text-center bg-gray-200 rounded-lg">
            {item?.value}
          </div>
        ))}
      </td>

      <td className="text-center">
        <div className="flex ">
          <NavLink
            className="px-2 py-1 mx-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
            // to={`/admin/products/edit-product/${product?.id}`}
            // state={product}
          >
            ویرایش
          </NavLink>

          <button
            className="px-2 py-1 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
            // onClick={(e) => {
            //   e.stopPropagation();
            //   setIsConfirmationOpen(true);
            // }}
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
  );
};
