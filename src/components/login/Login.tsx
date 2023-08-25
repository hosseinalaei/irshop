import { Formik, FormikHelpers, Field, Form } from "formik";
import { axiosService } from "@/api.js/axiosService";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Values {
  phone_number: string;
  validation_code: string;
}

const Login = ({ setAuthenticated }: any) => {
  const router = useRouter();
  const [validationCode, setValidationCode] = useState(null);
  const [validationCodeInput, setValidationCodeInput] = useState(false);

  const login = (values: Values) => {
    const body = {
      mobile: values?.phone_number,
    };
    !values?.validation_code
      ? axiosService.post("/Account/checkMobile", body).then((res) => {
          console.log(res);
          res?.status === "Success" && setValidationCodeInput(true);
        })
      : axiosService
          .post("/AdminAccount/login", {
            mobile: values?.phone_number,
            verifyCode: values?.validation_code,
          })
          .then((res) => {
            console.log(res);
            res?.status === "Success" && setAuthenticated(true);
          });
  };
  return (
    <>
      <div className="flex flex-col flex-1">
        <div className="flex flex-col lg:flex-row flex-column-fluid">
          <div className="flex flex-col order-2 p-10 flex-lg-row-fluid w-lg-50 lg:order-1">
            <div className="flex flex-col items-center justify-center flex-lg-row-fluid">
              <div className="p-10 w-lg-500px">
                <Formik
                  initialValues={{
                    phone_number: "",
                    validation_code: "",
                  }}
                  onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                  ) => {
                    login(values);
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
            style={{ backgroundImage: ' url("auth-bg.png")' }}
          >
            {/* <!--begin::Content--> */}
            <div className="px-5 d-flex flex-column flex-center py-7 py-lg-15 px-md-15 w-100">
              {/* <!--begin::Logo--> */}
              <a href="#" className="mb-0 mb-lg-12">
                <img
                  alt="Logo"
                  src="custom-1.png"
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
