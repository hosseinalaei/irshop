import React, { useEffect, useState } from "react";
import AddNewRole from "../roles/AddNewRole";
import EditRole from "../roles/EditRole";
import { axiosService } from "../../services/axiosService";
import AddNewPolicy from "./AddNewPolicy";
import { NavLink, useParams } from "react-router-dom";
import Loading from "../common/Loading";
import { ToastContainer, toast } from "react-toastify";

const PoliciesList = () => {
  const [policies, setPolicies] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState({});
  const [loading, setLoading] = useState(true);

  const getPolicies = () => {
    axiosService
      .get("/Policy/getActivePolicies")
      .then((res) => {
        setPolicies(res?.data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getPolicies();
  }, []);

  const deletePolicy = (id) => {
    const body = {
      id: id,
      isDelete: true,
    };

    axiosService.put("/Policy/updatePolicy", body).then((res) => {
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
          getPolicies();
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
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ToastContainer />
          <div className="m-3 page-title d-flex flex-column justify-content-center">
            <h1 className="my-0 page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center">
              لیست سیاست‌ها
            </h1>

            <ul className="pt-1 my-0 breadcrumb breadcrumb-separatorless fw-semibold fs-7">
              <NavLink
                to="/"
                className="text-lg font-bold text-black hover:text-red-500"
              >
                صفحه اصلی
              </NavLink>

              <li className="breadcrumb-item">/</li>
              <li className="text-lg font-bold text-black hover:text-red-500">
                سیاست‌ها
              </li>
            </ul>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
            {policies &&
              policies?.map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="card card-flush h-md-100">
                    <div className="pb-0 mb-0 card-header">
                      <div className="mb-0 card-title">
                        <h2>{item?.title}</h2>
                      </div>
                      <div className="mb-0 card-title">
                        <h2>تعداد محصول : {item?.productCount}</h2>
                      </div>
                    </div>
                    <hr className="mt-0" />
                    <div className="pt-1 card-body">
                      <div className="flex">
                        <div>
                          <div className="-mr-2 text-xl font-bold text-blue-800">
                            سبد خرید:
                          </div>
                          <div className="text-gray-600 fw-bold">
                            نوع سبد خرید: {item?.basketType}
                          </div>
                          <div className="py-2 text-gray-600 fw-bold">
                            تعداد محصول در سبد خرید: {item?.basketProductCount}
                          </div>
                          <div className="py-2 text-gray-600 fw-bold">
                            اولویت : {item?.basketPriority}
                          </div>
                          <div className="py-2 text-gray-600 fw-bold">
                            basketSpecial: {item?.basketSpecial}
                          </div>
                          <div className="py-2 text-gray-600 fw-bold">
                            زمان سبد خرید: {item?.basketDuration}
                          </div>
                        </div>
                        <div>
                          <div className="-mr-2 text-xl font-bold text-blue-800">
                            تخفیف:
                          </div>
                          <div className="text-gray-600 fw-bold">
                            نوع تخفیف: {item?.discountType}
                          </div>
                          <div className="py-2 text-gray-600 fw-bold">
                            تعداد محصول در سبد خرید: {item?.basketProductCount}
                          </div>
                          <div className="py-2 text-gray-600 fw-bold">
                            اولویت : {item?.discountPriority}
                          </div>
                          <div className="py-2 text-gray-600 fw-bold">
                            discountPr : {item?.discountPr}
                          </div>
                          <div className="py-2 text-gray-600 fw-bold">
                            زمان تخفیف: {item?.discountDuration}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-wrap pt-0 card-footer">
                      <NavLink
                        to={{
                          pathname: `/policies/edit-policy/id=${item?.id}`,
                        }}
                        state={item}
                        type="button"
                        className="mx-3 my-1 btn btn-light btn-active-light-primary"
                        // onClick={() => showEditModalFun(item)}
                      >
                        ویرایش
                      </NavLink>
                      <button onClick={() => deletePolicy(item?.id)}>
                        حذف
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            <AddNewPolicy />
            {showEditModal && (
              // <div className="z-50 w-1/2 h-full bg-black">
              <EditRole
                setShowEditModal={setShowEditModal}
                selectedRole={selectedPolicy}
              />
              // </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default PoliciesList;
