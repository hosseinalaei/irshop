import React from "react";
import { NavLink } from "react-router-dom";
import UserRoles from "./UserRoles";

const UsersListItem = ({ user, setShowEditModal, setSelectedUser }) => {
  return (
    <tr key={user?.id}>
      <td>
        <div class="form-check form-check-sm form-check-custom form-check-solid">
          <input class="form-check-input" type="checkbox" value="1" />
        </div>
      </td>
      <td class="d-flex align-items-center">
        {/* <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
      <a href="../../demo23/dist/apps/user-management/users/view.html">
        <div class="symbol-label">
          <img
            src="assets/media/avatars/300-6.jpg"
            alt="Emma Smith"
            class="w-100"
          />
        </div>
      </a>
    </div> */}

        <div class="d-flex flex-column">
          <a href="#" class="text-gray-800 text-hover-primary mb-1">
            {`${user?.firstName}  ${user?.lastName}`}
          </a>
          {/* <span>smith@kpmg.com</span> */}
        </div>
      </td>
      <td>
        {user?.userRoles?.map((role) => (
          <UserRoles role={role} />
        ))}
      </td>
      <td>
        <div class="badge badge-light fw-bold">{user?.phoneNumber}</div>
      </td>
      <td>{user?.address}</td>
      <td className="text-end">
        <div className="flex ">
          <div className="px-3">
            <button
              onClick={() => (setShowEditModal(true), setSelectedUser(user))}
              //   to={{
              //     pathname: `/products/edit-product/id=${product?.id}`,
              //   }}
              //   state={product}
            >
              ویرایش
            </button>
          </div>
          <div className="px-3 ">
            <a href="#" className="">
              حذف
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default UsersListItem;
