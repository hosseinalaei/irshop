import useAxios from "../../../../hooks/useAxios";
import { axiosService } from "../../../../services/axiosService";
import React, { useEffect, useState } from "react";

const Specification = ({ product, setProduct }) => {
  const [Specs, setSpecs] = useState([]);
  const httpRequest = useAxios();

  const getSpecs = () => {
    // axiosService
    //   .get("/Specification/getAllSpecs")
    httpRequest({
      url: "/Specification/getAllSpecs",
      method: "GET",
    }).then((res) => setSpecs(res?.data));
  };

  useEffect(() => {
    getSpecs();
  }, []);
  return (
    <div className="py-4 card card-flush">
      <div className="card-header">
        <div className="card-title">
          <h2>ویژگی‌ها</h2>
        </div>
      </div>
      <div className="pt-0 card-body">
        <select
          className="mb-2 form-select"
          value={product?.specification}
          onChange={(e) =>
            setProduct({
              ...product,
              specification: [
                ...product?.specification,
                { productSpecificationId: e.target.value },
              ],
            })
          }
        >
          <option></option>
          {Specs?.length > 0 ? (
            Specs?.map((item, index) => (
              <option key={index} value={item?.id}>
                {item?.specTitle} - {item?.specValue}
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

export default Specification;
