import React, { useEffect, useState } from "react";
import DiscountSection from "./DiscountSection";
import BasketSection from "./BasketSection";
import { axiosService } from "../../services/axiosService";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useParams } from "react-router-dom";

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
      id: uuidv4(),
    };

    axiosService
      .put("/AdminProducts/updatePolicy", requestBody)
      .then((res) => console.log(res));
  };

  return (
    <div className="d-flex flex-column flex-column-fluid">
      <div className="py-3 app-toolbar py-lg-0">
        <div className="app-container container-xxl d-flex flex-stack">
          <div className="page-title d-flex flex-column justify-content-center me-3">
            <h1 className="my-0 page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center">
              سیاست جدید
            </h1>

            <ul className="pt-1 my-0 breadcrumb breadcrumb-separatorless fw-semibold fs-7">
              <li className="breadcrumb-item text-muted">
                <a href="/" className="text-muted text-hover-primary">
                  صفحه اصلی
                </a>
              </li>

              <li className="breadcrumb-item">
                <span className="bg-gray-400 bullet w-5px h-2px"></span>
              </li>

              <li className="breadcrumb-item text-muted">سیاست‌ها</li>

              <li className="breadcrumb-item">
                <span className="bg-gray-400 bullet w-5px h-2px"></span>
              </li>

              <li className="breadcrumb-item text-muted"> سیاست جدید</li>
            </ul>
          </div>
        </div>
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
                {/* <div className="px-10 mb-10 fv-row">
                  <label className="required form-label">product policy</label>
                  <input
                    type="text"
                    name="short-description"
                    className="mb-2 form-control"
                    placeholder="product policy"
                    value={policy?.productPolicy}
                    onChange={(e) =>
                      setPolicy({
                        ...policy,
                        productPolicy: e.target.value,
                      })
                    }
                  />
                </div> */}
              </div>
            </div>
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <div className="py-4 card card-flush">
                <DiscountSection policy={policy} setPolicy={setPolicy} />
              </div>
              <div className="py-4 card card-flush">
                <BasketSection policy={policy} setPolicy={setPolicy} />
              </div>
            </div>
          </form>
          <div className="d-flex justify-content-end">
            <button
              onClick={() => (selectedPolicy ? updatePolicy() : addPolicy())}
              id="kt_ecommerce_add_product_submit"
              className="btn btn-primary"
            >
              <span className="indicator-label">ثبت</span>
              <span className="indicator-progress">
                Please wait...
                <span className="align-middle spinner-border spinner-border-sm ms-2"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPolicy;
