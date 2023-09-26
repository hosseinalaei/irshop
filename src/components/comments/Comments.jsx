import React, { useEffect, useState } from "react";
import { axiosService } from "../../services/axiosService";
import CommentsListHead from "./CommentsListHead";
import { convertToPersianDate } from "../../utils/dateConverter";
import { ToastContainer, toast } from "react-toastify";
import ConfirmationDialog from "../common/Confirm";

const Comments = () => {
  const [comments, setComments] = useState();
  const getComments = () => {
    // const body = {
    //   id: "a82d0e7b-f577-45ae-aca5-4ff3d036c628",
    // };
    axiosService.post("/Comment/getAllcomments").then((res) => {
      console.log(res);
      setComments(res?.data);
    });
  };

  useEffect(() => {
    getComments();
    getUsers();
  }, []);

  const deleteComment = (comment) => {
    const body = {
      ...comment,

      isDelete: true,
    };

    axiosService?.put("/Comment/updateComment", body).then((res) => {
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
  const acceptComment = (comment) => {
    const body = {
      ...comment,

      isPublish: true,
    };

    axiosService?.put("/Comment/updateComment", body).then((res) => {
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

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axiosService?.get("/User/getAllUsers").then((res) => {
      setUsers(res?.data);
    });
  };

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleCancel = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <>
      <ToastContainer />
      <div class="card card-flush py-4">
        <div class="card-body pt-0">
          <table class="table table-row-dashed fs-6 gy-5 my-0">
            <CommentsListHead />
            <tbody>
              {comments?.map((comment, index) => {
                const user = users?.filter(
                  (item) => item?.id === comment?.userId
                );

                return (
                  <tr key={index}>
                    <td class="fw-bold text-center">
                      {user[0]?.firstName} {user[0]?.lastName}
                    </td>
                    <td class="text-center text-gray-600 fw-bold">
                      {comment?.text}
                    </td>
                    <td class="text-center fw-semibold text-muted">
                      {convertToPersianDate(comment?.createDate)}
                    </td>
                    <td className="text-center">
                      <div className="flex">
                        <button
                          className="px-3 "
                          onClick={() => acceptComment(comment)}
                        >
                          تایید
                        </button>
                        <button
                          className="px-3 "
                          onClick={() => setIsConfirmationOpen(true)}
                        >
                          حذف
                        </button>
                      </div>
                    </td>
                    <ConfirmationDialog
                      isOpen={isConfirmationOpen}
                      setIsOpen={setIsConfirmationOpen}
                      message="از حذف نظر اطمینان دارید؟"
                      onConfirm={() => deleteComment(comment)}
                      onCancel={handleCancel}
                      confirmText="بله"
                      cancelText="خیر"
                    />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Comments;
