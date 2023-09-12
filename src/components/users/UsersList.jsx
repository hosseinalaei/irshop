import React, { useEffect, useState } from "react";
import { axiosService } from "../../services/axiosService";
import { NavLink } from "react-router-dom";
import UsersListHead from "./UsersListHead";
import UsersListItem from "./UsersListItem";
import Loading from "../common/Loading";

const UsersList = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axiosService
      ?.get("/AdminAccount/getAllUsers")
      .then((res) => {
        setUsers(res?.data);
        setLoading(false);
        console.log(res);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
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
                  <UsersListItem user={user} key={user?.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default UsersList;
