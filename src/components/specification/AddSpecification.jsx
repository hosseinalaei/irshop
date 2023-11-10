import React, { useState } from "react";
import Button from "../common/Button";
import useAxios from "../../hooks/useAxios";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { MuiChipsInput } from "mui-chips-input";

const AddSpecification = () => {
  // const [sepc, addSpec] = useState({
  //   name: "",
  //   value: "",
  // });

  const location = useLocation();
  const selectedAtt = location.state;
  // console.log("selectedAttselectedAttselectedAtt", selectedAtt);

  // const [spec, setSpec] = useState({
  //   specName: selectedAtt?.name || "",
  //   specTitle: selectedAtt?.title || "",
  //   specValue: selectedAtt?.value || "",
  //   isDelete: false,
  // });
  const [spec, setSpec] = useState({
    specName: selectedAtt?.name,
    specTitle: "",
    specValue: selectedAtt?.value.map((item) => item.name),
    isDelete: false,
  });

  const httpRequest = useAxios();
  const addSpec = () => {
    // const valueArray = spec?.specValue?.split(",");
    const body = {
      id: uuidv4(),
      isDelete: spec?.isDelete,
      name: spec?.specName,
      value: spec?.specValue?.map((item) => {
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

  const updateAtt = () => {
    // const valueArray = spec?.specValue?.split(",");
    // setLoading(true);
    const requestBody = {
      id: selectedAtt?.id,
      isDelete: selectedAtt?.isDelete,
      name: spec?.specName,
      value: spec?.specValue?.map((item) => {
        return { name: item };
      }),
    };

    // axiosService .put("/Policy/updatePolicy", requestBody)
    httpRequest({
      url: "/Specification/updateAttributes",
      method: "PUT",
      data: requestBody,
    }).then((res) => {
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
    // .finally(() => setLoading(false));
  };

  const [chips, setChips] = React.useState([]);

  const handleChange = (newChips) => {
    setChips(newChips);
  };

  console.log("chipschipschips", chips);

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
              value={spec?.specName}
              onChange={(e) => setSpec({ ...spec, specName: e.target.value })}
            />
          </div>
          {/* <div className="w-1/2 mb-5 mr-5">
            <label className="required form-label">عنوان</label>
            <input
              type="text"
              className="mb-2 form-control"
              placeholder="عنوان ویژگی"
              // value={values.price}
              onChange={(e) => setSpec({ ...spec, specTitle: e.target.value })}
            />
          </div> */}
          <div className="flex flex-col w-1/2 mb-5 mr-5">
            <label className="required form-label">مقدار</label>
            {/* <input
              type="text"
              className="mb-2 form-control"
              placeholder="مقدار ویژگی"
              // value={spec?.specValue?.map((item) => item.name).join(",")}
              value={spec?.specValue}
              onChange={(e) => setSpec({ ...spec, specValue: e.target.value })}
            /> */}
            <MuiChipsInput
              value={spec?.specValue}
              onChange={(chip) => setSpec({ ...spec, specValue: chip })}
              // size="small"
              InputProps={{
                className: "form-control !p-1.5 !pr-8 outline-none",
              }}
              // variant="outlined"
              placeholder="مقدار را وارد کنید"
              renderChip={(Component, key, props) => {
                return (
                  <Component
                    {...props}
                    key={key}
                    style={{ direction: "ltr" }}
                  />
                );
              }}
            />
          </div>
        </div>
        <Button
          className="self-end w-1/5"
          onClick={() => (selectedAtt?.id ? updateAtt() : addSpec())}
        >
          ثبت
        </Button>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddSpecification;
