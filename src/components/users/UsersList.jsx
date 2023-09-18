import React, { useEffect, useState } from "react";
import { axiosService } from "../../services/axiosService";
import { NavLink } from "react-router-dom";
import UsersListHead from "./UsersListHead";
import UsersListItem from "./UsersListItem";
import Loading from "../common/Loading";
import EditUser from "./EditUser";
import { ToastContainer, toast } from "react-toastify";

const UsersList = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showToast, setShowToast] = useState("");

  const getUsers = () => {
    axiosService
      ?.get("/AdminAccount/getAllUsers")
      .then((res) => {
        setUsers(res?.data);
        setLoading(false);
        // console.log(res);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (showToast === "Success") {
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
    } else if (showToast === "Error") {
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
  }, [showToast]);

  useEffect(() => {
    getUsers();
  }, []);

  const [selectedUser, setSelectedUser] = useState({});

  return (
    <>
      <ToastContainer />
      {loading ? (
        <Loading />
      ) : (
        <div class="card">
          <div class="card-body py-4">
            <table
              class="table align-middle table-row-dashed fs-6 gy-5"
              id="kt_table_users"
            >
              <UsersListHead />
              <tbody class="text-gray-600 fw-semibold">
                {users?.map((user) => (
                  <UsersListItem
                    user={user}
                    key={user?.id}
                    setShowEditModal={setShowEditModal}
                    setSelectedUser={setSelectedUser}
                    getUsers={getUsers}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {showEditModal && (
        <div>
          <div
            className="fixed top-0 left-0 z-50 w-full h-full bg-black opacity-50"
            onClick={() => setShowEditModal(false)}
          >
            {/* Clicking on the backdrop should close the modal */}
          </div>
        </div>
      )}
      {showEditModal && (
        <EditUser
          setShowEditModal={setShowEditModal}
          setShowToast={setShowToast}
          selectedUser={selectedUser}
        />
      )}
    </>
  );
};

export default UsersList;
