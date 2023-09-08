import React, { useEffect, useState } from "react";
import DiscountSection from "./DiscountSection";
import BasketSection from "./BasketSection";
import { axiosService } from "../../services/axiosService";
import { v4 as uuidv4 } from "uuid";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddPolicy = () => {
  const location = useLocation();
  const selectedPolicy = location.state;

  const [policy, setPolicy] = useState({
    title: selectedPolicy?.title,
    basket: {
      basketType: selectedPolicy?.basketType,
      basketPriority: selectedPolicy?.basketPriority,
      basketSpecial: selectedPolicy?.basketSpecial,
      basketProductCount: selectedPolicy?.basketProductCount,
      basketDuration: selectedPolicy?.basketDuration,
    },
    discount: {
      discountPr: selectedPolicy?.discountPr,
      discountDuration: selectedPolicy?.discountDuration,
      discountType: selectedPolicy?.discountType,
      discountPriority: selectedPolicy?.discountPriority,
    },
    productCount: selectedPolicy?.productCount,
    productPolicy: selectedPolicy?.productPolicy,
    id: selectedPolicy?.id,
  });

  // console.log("llllllllllllll", policy);

  const addPolicy = () => {
    const requestBody = {
      title: policy?.title,

      basketType: policy?.basket?.basketType,
      basketPriority: policy?.basket?.basketPriority,
      basketSpecial: policy?.basket?.basketSpecial,
      basketProductCount: policy?.basket?.basketProductCount,
      basketDuration: policy?.basket?.basketDuration,

      discountPr: policy?.discount?.discountPr,
      discountDuration: policy?.discount?.discountDuration,
      discountType: policy?.discount?.discountType,
      discountPriority: policy?.discount?.discountPriority,

      productCount: policy?.productCount,
      // productPolicy: policy?.productPolicy,
      id: uuidv4(),
      isDelete: false,
    };

    axiosService
      .post("/AdminProducts/registerPolicy", requestBody)
      .then((res) => console.log(res));
  };

  const updatePolicy = () => {
    const requestBody = {
      title: policy?.title,

      basketType: policy?.basket?.basketType,
      basketPriority: policy?.basket?.basketPriority,
      basketSpecial: policy?.basket?.basketSpecial,
      basketProductCount: policy?.basket?.basketProductCount,
      basketDuration: policy?.basket?.basketDuration,

      discountPr: policy?.discount?.discountPr,
      discountDuration: policy?.discount?.discountDuration,
      discountType: policy?.discount?.discountType,
      discountPriority: policy?.discount?.discountPriority,

      productCount: policy?.productCount,
      // productPolicy: policy?.productPolicy,
      id: policy?.id,
      isDelete: false,
    };

    axiosService.put("/AdminProducts/updatePolicy", requestBody).then((res) => {
      res?.status === "Success"
        ? toast.success("عملیات با موفقیت انجام شد", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            // progress: undefined,
            theme: "light",
            style: { fontFamily: "inherit" },
          })
        : toast.error("مشکلی رخ داده است", {
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
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="d-flex flex-column flex-column-fluid">
        <div className="m-3 page-title d-flex flex-column justify-content-center">
          <h1 className="my-0 page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center">
            افزودن policy
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
              افزودن policy
            </li>
          </ul>
        </div>
        <div className="app-content flex-column-fluid">
          <div className="">
            <form className="form d-flex flex-column flex-lg-row">
              <div className="mx-5 d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7">
                <div className="py-4 card card-flush">
                  <div className="px-10 mb-10 fv-row">
                    <label className="required form-label">عنوان</label>
                    <input
                      type="text"
                      name="short-description"
                      className="mb-2 form-control"
                      placeholder="عنوان"
                      value={policy?.title}
                      onChange={(e) =>
                        setPolicy({
                          ...policy,
                          title: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="px-10 mb-10 fv-row">
                    <label className="required form-label">تعداد محصول</label>
                    <input
                      type="number"
                      pattern="[0-9]*"
                      name="short-description"
                      className="mb-2 form-control"
                      placeholder="تعداد محصول"
                      value={policy?.productCount}
                      onChange={(e) =>
                        e.target.validity.valid &&
                        setPolicy({
                          ...policy,
                          productCount: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                <div className="card card-flush">
                  <DiscountSection policy={policy} setPolicy={setPolicy} />
                </div>
                <div className="card card-flush">
                  <BasketSection policy={policy} setPolicy={setPolicy} />
                </div>
              </div>
            </form>
            <div className="mt-5 d-flex justify-content-end">
              <button
                onClick={() => (selectedPolicy ? updatePolicy() : addPolicy())}
                className="px-10 py-2 text-2xl font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPolicy;
