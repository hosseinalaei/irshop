import React, { useState } from "react";
import Button from "../common/Button";
import useAxios from "../../hooks/useAxios";
import { v4 as uuidv4 } from "uuid";

const AddSpecification = () => {
  // const [sepc, addSpec] = useState({
  //   name: "",
  //   value: "",
  // });

  const [spec, setSpec] = useState({
    specName: "",
    specTitle: "",
    specValue: "",
    isDelete: false,
  });

  const httpRequest = useAxios();
  const addSpec = () => {
    // const body = {
    //   specName: spec?.specName,
    //   specTitle: spec?.specTitle,
    //   specValue: spec?.specValue,
    //   isDelete: spec?.isDelete,
    //   id: uuidv4(),
    // };
    const valueArray = spec?.specValue?.split(",");
    const body = {
      id: uuidv4(),
      isDelete: spec?.isDelete,
      name: spec?.specName,
      value: valueArray?.map((item) => {
        return {
          id: uuidv4(),
          isDelete: false,
          name: item,
        };
      }),
    };
    // axiosService .post("/Specification/registerSpecification", body)
    httpRequest({
      url: "/Specification/registerAttributes",
      method: "POST",
      data: body,
    }).then((res) => {
      // if (res?.status === "Success") {
      //   setShowToast("Success");
      //   setTimeout(() => {
      //     getSpecs();
      //   }, 500);
      // } else {
      //   setShowToast("error");
      // }
    });
  };

  return (
    <>
      <div className="p-5 card card-flush">
        {/* <div className="gap-2 py-5 card-header align-items-center gap-md-5">
                  
                </div> */}
        <div className="flex justify-between py-0 card-body">
          <div className="w-1/2 mb-5">
            <label className="required form-label">نام</label>
            <input
              type="text"
              className="mb-2 form-control"
              placeholder="نام ویژگی"
              // value={values.price}
              onChange={(e) => setSpec({ ...spec, specName: e.target.value })}
            />
          </div>
          <div className="w-1/2 mb-5 mr-5">
            <label className="required form-label">عنوان</label>
            <input
              type="text"
              className="mb-2 form-control"
              placeholder="عنوان ویژگی"
              // value={values.price}
              onChange={(e) => setSpec({ ...spec, specTitle: e.target.value })}
            />
          </div>
          <div className="w-1/2 mb-5 mr-5">
            <label className="required form-label">مقدار</label>
            <input
              type="text"
              className="mb-2 form-control"
              placeholder="مقدار ویژگی"
              // value={values.price}
              onChange={(e) => setSpec({ ...spec, specValue: e.target.value })}
            />
          </div>
        </div>
        <Button className="self-end w-1/5" onClick={() => addSpec()}>
          ثبت
        </Button>
      </div>
    </>
  );
};

export default AddSpecification;
