import React, { useEffect, useState } from "react";
import { axiosService } from "../../services/axiosService";

const UserRoles = ({ role }) => {
  const [roleObject, setRoleObject] = useState(null);

  const getRoleById = () => {
    const body = {
      roleId: role?.roleId,
    };
    axiosService
      .post("/AdminAccount/getRolebyId", body)
      .then((res) => setRoleObject(res?.data));
  };

  useEffect(() => {
    getRoleById();
  }, []);
  return <div key={role?.roleId}>{roleObject?.name}</div>;
};

export default UserRoles;
