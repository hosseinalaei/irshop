import React, { useEffect, useState } from "react";
import AddNewRole from "../roles/AddNewRole";
import EditRole from "../roles/EditRole";
import { axiosService } from "../../services/axiosService";
import AddNewPolicy from "./AddNewPolicy";

const PoliciesList = () => {
  const [policies, setPolicies] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState({});

  const showEditModalFun = (item) => {
    setShowEditModal(true);
    setSelectedPolicy(item);
  };

  const getPolicies = () => {
    axiosService.get("/AdminProducts/getActivePolicies").then((res) => {
      console.log(res);
      setPolicies(res?.data);
    });
  };

  useEffect(() => {
    getPolicies();
  }, []);
  return (
    <>
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
                  <button
                    type="button"
                    className="my-1 btn btn-light btn-active-light-primary"
                    onClick={() => showEditModalFun(item)}
                  >
                    ویرایش
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
  );
};

export default PoliciesList;
