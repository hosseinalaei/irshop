import { axiosService } from "@/api.js/axiosService";
import React, { useEffect, useState } from "react";

const PolicySection = ({ setProductPolicy, productPolicy }: any) => {
  const [policies, setPolicies] = useState([]);

  const getPolicy = () => {
    axiosService
      .get("/AdminProducts/getActivePolicies")
      .then((res) => setPolicies(res?.data));
  };

  useEffect(() => {
    getPolicy();
  }, []);
  return (
    <div className="py-4 card card-flush">
      <div className="card-header">
        <div className="card-title">
          <h2>سیاست (policy)</h2>
        </div>
        {/* <div className="card-toolbar">
          <div
            className={`rounded-circle  w-15px h-15px ${
              productStatus ? "bg-success" : "bg-red-500"
            }`}
            id="kt_ecommerce_add_product_status"
          ></div>
        </div> */}
      </div>
      <div className="pt-0 card-body">
        <select
          className="mb-2 form-select"
          value={productPolicy}
          onChange={(e) => setProductPolicy(e.target.value)}
        >
          <option></option>
          {policies?.map((item, index) => (
            <option key={index} value="true" selected>
              موجود
            </option>
          ))}
          <option value="true" selected>
            موجود
          </option>
          <option value="false">ناموجود</option>
        </select>
        {/* <div className="text-muted fs-7">وضعیت موجودی محصول را انتخاب کنید</div> */}
      </div>
    </div>
  );
};

export default PolicySection;
