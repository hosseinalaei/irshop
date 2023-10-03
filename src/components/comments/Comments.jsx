import React, { useEffect, useState } from "react";
import { axiosService } from "../../services/axiosService";
import CommentsListHead from "./CommentsListHead";
import { convertToPersianDate } from "../../utils/dateConverter";
import { ToastContainer, toast } from "react-toastify";
import ConfirmationDialog from "../common/Confirm";

const Comments = () => {
  const [comments, setComments] = useState();
  const [clickedComment, setClickedComment] = useState(null);
  const getComments = () => {
    // const body = {
    //   id: "a82d0e7b-f577-45ae-aca5-4ff3d036c628",
    // };
    axiosService.post("/Comment/getAllcomments").then((res) => {
      console.log(res);

      const filteredComment = res?.data?.filter((item) => !item?.isDelete);

      setComments(filteredComment);
    });
  };

  useEffect(() => {
    getComments();
    getUsers();
  }, []);

  const deleteComment = () => {
    const comment = clickedComment;
    console.log("commentcommentcommentcommentcommentcomment", comment);
    const body = {
      ...comment,

      isDelete: true,
    };

    axiosService
      ?.put("/Comment/updateComment", body)
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
            getComments();
          }, 1000);
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
  const acceptComment = (index) => {
    const comment = comments[index];

    console.log("commentcommentcommentcommentcommentcomment", comment, index);

    const body = {
      ...comment,

      isPublish: true,
    };

    axiosService
      ?.put("/Comment/updateComment", body)
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
            getComments();
          }, 1000);
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

  const deniedComment = (index) => {
    const comment = comments[index];

    console.log("commentcommentcommentcommentcommentcomment", comment, index);

    const body = {
      ...comment,

      isPublish: true,
    };

    axiosService
      ?.put("/Comment/updateComment", body)
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
            getComments();
          }, 1000);
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
                // if (!comment?.isDelete) {
                const user = users?.filter(
                  (item) => item?.id === comment?.userId
                );

                return (
                  <tr key={index}>
                    <td class="flex justify-center">
                      {comment?.isPublish ? (
                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      ) : (
                        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                      )}
                    </td>
                    <td class="fw-bold text-right">
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
                        {comment?.isPublish ? (
                          <button
                            className="px-3 "
                            onClick={() => deniedComment(index)}
                          >
                            عدم انتشار
                          </button>
                        ) : (
                          <button
                            className="px-3 "
                            onClick={() => acceptComment(index)}
                          >
                            تایید
                          </button>
                        )}

                        <button
                          className="px-3 "
                          onClick={() => {
                            setClickedComment(comment);
                            setIsConfirmationOpen(true);
                          }}
                        >
                          حذف
                        </button>
                      </div>
                      <ConfirmationDialog
                        isOpen={isConfirmationOpen}
                        setIsOpen={setIsConfirmationOpen}
                        message="از حذف نظر اطمینان دارید؟"
                        onConfirm={() => deleteComment()}
                        onCancel={handleCancel}
                        confirmText="بله"
                        cancelText="خیر"
                      />
                    </td>
                  </tr>
                );
                // }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Comments;
