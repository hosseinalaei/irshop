import React, { useEffect, useState } from "react";
import AddNewRole from "../roles/AddNewRole";
import EditRole from "../roles/EditRole";
import { axiosService } from "../../services/axiosService";
import AddNewPolicy from "./AddNewPolicy";
import { NavLink, useParams } from "react-router-dom";
import Loading from "../common/Loading";

const PoliciesList = () => {
  const [policies, setPolicies] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState({});
  const [loading, setLoading] = useState(true);

  const getPolicies = () => {
    axiosService
      .get("/AdminProducts/getActivePolicies")
      .then((res) => {
        setPolicies(res?.data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getPolicies();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
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
                      {/* <a
              href="../../demo23/dist/apps/user-management/roles/view.html"
              className="my-1 btn btn-light btn-active-primary me-2"
            >
              View Role
            </a> */}
                      <NavLink
                        to={{
                          pathname: `/policies/edit-policy/id=${item?.id}`,
                        }}
                        state={item}
                        type="button"
                        className="my-1 btn btn-light btn-active-light-primary"
                        // onClick={() => showEditModalFun(item)}
                      >
                        ویرایش
                      </NavLink>
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
