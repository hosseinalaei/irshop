import React from "react";
import { NavLink } from "react-router-dom";
import UserRoles from "./UserRoles";
import { axiosService } from "../../services/axiosService";
import { toast } from "react-toastify";

const UsersListItem = ({
  user,
  setShowEditModal,
  setSelectedUser,
  getUsers,
}) => {
  const deleteUser = (user) => {
    const body = {
      ...user,
      isDelete: true,
    };

    axiosService.post("/Account/updateUser", body).then((res) => {
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
          getUsers();
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
          <button className="px-3" onClick={() => deleteUser(user)}>
            حذف
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UsersListItem;
