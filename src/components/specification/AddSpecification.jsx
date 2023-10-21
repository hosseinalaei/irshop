import React, { useState } from "react";
import Button from "../common/Button";

const AddSpecification = () => {
  const [sepc, addSpec] = useState({
    name: "",
    value: "",
  });
  return (
    <>
      <div className="p-5 card card-flush">
        {/* <div className="gap-2 py-5 card-header align-items-center gap-md-5">
                  
                </div> */}
        <div className="flex justify-between pt-0 card-body">
          <div className="w-1/2 mb-10">
            <label className="required form-label">نام</label>
            <input
              type="text"
              className="mb-2 form-control"
              placeholder="نام ویژگی"
              // value={values.price}
              onChange={(e) => addSpec({ ...sepc, name: e.target.value })}
            />
          </div>
          <div className="w-1/2 mb-10 mr-5">
            <label className="required form-label">مقدار</label>
            <input
              type="text"
              className="mb-2 form-control"
              placeholder="مقدار ویژگی"
              // value={values.price}
              onChange={(e) => addSpec({ ...sepc, value: e.target.value })}
            />
          </div>
        </div>
        <Button className="w-1/5">ثبت</Button>
      </div>
    </>
  );
};

export default AddSpecification;
