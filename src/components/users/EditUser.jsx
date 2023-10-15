import React, { useEffect, useState } from "react";
import { axiosService } from "../../services/axiosService";
// import { ToastContainer, toast } from "react-toastify";

const EditUser = ({ setShowEditModal, selectedUser, setShowToast }) => {
  const [editedRole, setEditedRole] = useState({
    firstName: selectedUser?.firstName,
    lastName: selectedUser?.lastName,
    address: selectedUser?.address,
    phoneNumber: selectedUser?.phoneNumber,
    userRoles: selectedUser?.userRoles,
  });
  const [roles, setRoles] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [rolesName, setRolesName] = useState([]);

  //   console.log("selectedUserselectedUserselectedUser", selectedUser);

  //   console.log("editedRoleeditedRoleeditedRoleeditedRole", editedRole);

  const getRoles = () => {
    axiosService.get("/Role/getActiveRoles").then((res) => {
      setRoles(res?.data);
    });
  };

  useEffect(() => {
    getRoles();
  }, []);

  useEffect(() => {
    editedRole?.userRoles?.length > 0 &&
      editedRole?.userRoles?.map((item) => {
        const role = roles.find((role) => role?.id === item?.roleId);

        setRolesName([...rolesName, role]);
      });
  }, [roles]);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
      setEditedRole({
        ...editedRole,
        userRoles: editedRole?.userRoles?.filter(
          (item) => item?.roleId !== option
        ),
      });
      setRolesName(rolesName?.filter((item) => item?.id !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
      if (editedRole?.userRoles) {
        setEditedRole({
          ...editedRole,
          userRoles: [
            ...editedRole?.userRoles,
            { roleId: option, assignDate: new Date() },
          ],
        });
      }

      const role = roles.find((role) => role?.id === option);
      setRolesName([...rolesName, role]);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const updateUser = (id, userRoles) => {
    const body = {
      id: id,
      userRoles: editedRole?.userRoles,
    };

    axiosService.post("/User/updateUser", body).then((res) => {
      if (res?.status === "Success") {
        setShowToast("Success");
      } else {
        setShowToast("error");
      }
    });
  };

  return (
    <>
      <div
        style={{ height: "80%", overflow: "scroll" }}
        className="fixed z-50 w-1/3 p-0 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl top-1/2 left-1/2 rounded-2xl"
      >
        <div className="modal-dialog modal-dialog-centered mw-750px">
          <div className="modal-content ">
            <div className="sticky top-0 z-20 w-full px-5 pt-5 pb-3 bg-white modal-header">
              <h2 className="fw-bold">ویرایش کاربر</h2>

              <div
                className="btn btn-icon btn-sm btn-active-icon-primary"
                data-kt-roles-modal-action="close"
              >
                <i className="ki-outline ki-cross fs-1"></i>
              </div>
            </div>
            <div className="p-10 pt-0 mx-5 modal-body ">
              <form className="form">
                <div className="flex flex-col scroll-y me-n7">
                  <div className="mb-10 ">
                    <label className="mb-2 fs-5 fw-bold form-label">
                      <span className="required">نام</span>
                    </label>
                    <input
                      className="form-control form-control-solid"
                      placeholder="نام کاربر را وارد کنید"
                      name="user_firstName"
                      value={editedRole?.firstName}
                      onChange={(e) =>
                        setEditedRole({
                          ...editedRole,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-10 fv-row">
                    <label className="mb-2 fs-5 fw-bold form-label">
                      <span className="required">نام خانوادگی</span>
                    </label>
                    <input
                      className="form-control form-control-solid"
                      placeholder="نام خانوادگی را وارد کنید"
                      name="user_lastName"
                      value={editedRole?.lastName}
                      onChange={(e) =>
                        setEditedRole({
                          ...editedRole,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="pt-0 card-body">
                    <div>
                      <h2>نقش‌ها</h2>
                      {/* <ul>
                        {selectedOptions.map((selectedOption) => {
                          const role = roles?.find(
                            (option) => option.id === selectedOption
                          );
                          return <li key={selectedOption}>{role?.name}</li>;
                        })}
                      </ul> */}
                    </div>
                    <div className="flex form-select" onClick={toggleDropdown}>
                      {rolesName?.length > 0 ? (
                        rolesName?.map((item, index) => (
                          <div key={index} className="mx-2 ">
                            {item?.name}
                          </div>
                        ))
                      ) : (
                        <div>انتخاب کنید</div>
                      )}
                    </div>

                    {isOpen && (
                      <div className="px-2 py-3 border">
                        {roles?.map((option) => (
                          <div key={option.id} className="mb-2 text-xl">
                            <input
                              className="mx-2"
                              type="checkbox"
                              value={option.id}
                              checked={selectedOptions.includes(option.id)}
                              onChange={() => toggleOption(option.id)}
                            />
                            <label>{option.name}</label>
                          </div>
                        ))}
                      </div>
                    )}

                    {/*                    
                    <label className="form-label">دسته‌بندی‌ها</label>
                    <select
                      //   multiple
                      //   onChange={handleSelectRolesChange}
                      value={editedRole?.userRoles}
                      className="mb-2 form-select"
                      // data-control="select2"
                      // data-allow-clear="true"
                      //   multiple
                      placeholder="انتخاب کنید"
                      onChange={(e) =>
                        setEditedRole({
                          ...editedRole,
                          userRoles: e.target.value,
                        })
                      }
                    >
                       <option>انتخاب کنید</option> 
                      {roles?.map((role) => (
                        <option>
                          
                          <option key={role?.id} value={role?.id}>
                            // {role?.name}
                            
                          </option>
                          
                        </option>
                      ))}
                    </select>
                    <div className="text-muted fs-7 mb-7">
                      دسته‌بندی محصول را اضافه کنید
                    </div> */}
                  </div>
                </div>
                <div className="text-left">
                  <button
                    type="reset"
                    className="btn btn-light me-3"
                    onClick={() => setShowEditModal(false)}
                  >
                    انصراف
                  </button>

                  <button
                    type="submit"
                    onClick={() => {
                      updateUser(selectedUser?.id);
                      setShowEditModal(false);
                    }}
                    className="px-10 py-2 text-2xl font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  >
                    ثبت
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
