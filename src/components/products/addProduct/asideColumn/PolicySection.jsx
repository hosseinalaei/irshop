import { axiosService } from "../../../../services/axiosService";
import React, { useEffect, useState } from "react";

const PolicySection = ({ product, setProduct }) => {
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
      </div>
      <div className="pt-0 card-body">
        <select
          className="mb-2 form-select"
          value={product?.policy}
          onChange={(e) => setProduct({ ...product, policy: e.target.value })}
        >
          <option></option>
          {policies?.length > 0 ? (
            policies?.map((item, index) => (
              <option key={index} value={item?.id}>
                {item?.title}
              </option>
            ))
          ) : (
            <div>موردی وجود ندارد</div>
          )}
        </select>
      </div>
    </div>
  );
};

export default PolicySection;
