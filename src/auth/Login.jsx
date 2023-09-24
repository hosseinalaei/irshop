import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, FormikHelpers, Field, Form } from "formik";
import { axiosService } from "../services/axiosService";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [validationCode, setValidationCode] = useState(null);
  const [validationCodeInput, setValidationCodeInput] = useState(false);
  const [error, setError] = useState("");

  //   const getVerificationCode = (values) => {
  //     const body = {
  //         mobile: values?.phone_number,
  //       };

  //       axiosService.post("/Account/checkMobile", body).then((res) => {

  //         res?.status === "Success" && setValidationCodeInput(true);
  //       })

  //   }

  //   const submitLogin = ({phone_number,validation_code }) => {
  //     const requestBody = {
  //         mobile: phone_number,
  //             verifyCode: validation_code,
  //     }

  //     axiosService
  //           .post("/AdminAccount/adminLogin", requestBody)
  //           .then((res) => {
  //             console.log(res);

  //             const token = "121323313131";

  //             if (!token) {
  //               alert("Unable to login. Please try after some time.");
  //               return;
  //             }
  //             localStorage.clear();
  //             localStorage.setItem("user-token", token);
  //             setTimeout(() => {
  //               navigate("/");
  //             }, 500);

  //             //   res?.status === "Success" &&
  //           });
  //   }

  const submitLoginForm = (values) => {
    const body = {
      mobile: values?.phone_number,
    };
    !values?.validation_code
      ? axiosService.post("/User/checkMobile", body).then((res) => {
          console.log(res);
          res?.status === "Success" && setValidationCodeInput(true);
        })
      : axiosService
          .post("/User/adminLogin", {
            mobile: values?.phone_number,
            verifyCode: values?.validation_code,
          })
          .then((res) => {
            console.log(res);

            if (res?.status === "NotFound") {
              setError(res?.data?.message);
            }
            if (res?.status === "Success") {
              const token = res?.data?.token;

              if (!token) {
                setError("مشکلی رخ داده است. لطفا دوباره تلاش کنید");
                return;
              }
              localStorage.clear();
              localStorage.setItem("user-token", token);
              setTimeout(() => {
                navigate("/");
              }, 500);
            }
          });

    // const token = "12121212";

    // if (!token) {
    //   setError("مشکلی رخ داده است. لطفا دوباره تلاش کنید");
    //   return;
    // }
    // localStorage.clear();
    // localStorage.setItem("user-token", token);
    // setTimeout(() => {
    //   navigate("/");
    // }, 500);
  };

  return (
    <>
      <div className="flex flex-col flex-1 h-screen">
        <div className="flex flex-col lg:flex-row flex-column-fluid">
          <div className="flex flex-col order-2 p-10 flex-lg-row-fluid w-lg-50 lg:order-1">
            <div className="flex flex-col items-center justify-center flex-lg-row-fluid">
              <div className="p-10 w-lg-500px">
                {error && (
                  <div className="w-full px-3 py-3 mb-3 text-xl text-center text-white bg-red-600 rounded-md shadow-md">
                    {error}
                  </div>
                )}
                <Formik
                  initialValues={{
                    phone_number: "",
                    validation_code: "",
                  }}
                  onSubmit={(values) => {
                    submitLoginForm(values);
                  }}
                >
                  <Form className="form w-100">
                    <div className="text-center mb-11">
                      <h1 className="mb-3 text-dark fw-bolder">ورود</h1>
                    </div>
                    <div className="mb-8 fv-row">
                      <label htmlFor="phone_number">شماره همراه</label>
                      <Field
                        id="phone_number"
                        name="phone_number"
                        placeholder=""
                        className="bg-transparent form-control"
                      />
                    </div>

                    {validationCodeInput && (
                      <div className="mb-8 fv-row">
                        <label htmlFor="validation_code">کد امنیتی</label>
                        <Field
                          id="validation_code"
                          name="validation_code"
                          placeholder=""
                          className="bg-transparent form-control"
                        />
                      </div>
                    )}

                    <div className="grid mb-10">
                      {validationCode ? (
                        <button type="submit" className=" btn btn-primary">
                          ورود
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="py-5 text-lg font-semibold bg-blue-500 rounded-lg"
                          style={{ color: "#fff" }}
                        >
                          ارسال کد
                        </button>
                      )}
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
          <div
            className="flex order-1 flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-lg-2"
            style={{ backgroundImage: ' url("/assets/auth-bg.png")' }}
          >
            {/* <!--begin::Content--> */}
            <div className="px-5 d-flex flex-column flex-center py-7 py-lg-15 px-md-15 w-100">
              {/* <!--begin::Logo--> */}
              <a href="#" className="mb-0 mb-lg-12">
                <img
                  alt="Logo"
                  src="/LOGO-96.09-c2.png"
                  className="h-60px h-lg-75px"
                />
              </a>
              {/* <!--end::Logo--> */}
              {/* <!--begin::Image--> */}
              <img
                className="mx-auto mb-10 d-none d-lg-block w-275px w-md-50 w-xl-500px mb-lg-20"
                src="auth-screens.png"
                alt=""
              />
              {/* <!--end::Image--> */}
            </div>
            {/* <!--end::Content--> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
