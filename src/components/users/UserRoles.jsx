import React, { useEffect, useState } from "react";
import { axiosService } from "../../services/axiosService";
import useAxios from "../../hooks/useAxios";

const UserRoles = ({ role }) => {
  const [roleObject, setRoleObject] = useState(null);

  const httpRequest = useAxios();

  const getRoleById = () => {
    const body = {
      roleId: role?.roleId,
    };
    // axiosService.post("/Role/getRolebyId", body)
    httpRequest({
      url: '/Role/getRolebyId',
      method:'POST',
      data: body,
    })
      .then((res) => setRoleObject(res?.data));
  };

  useEffect(() => {
    getRoleById();
  }, []);
  return <div key={role?.roleId}>{roleObject?.name}</div>;
};

export default UserRoles;
