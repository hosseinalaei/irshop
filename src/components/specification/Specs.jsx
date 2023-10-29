import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import useAxios from "../../hooks/useAxios";
import Loading from "../common/Loading";
import { ToastContainer } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import SpecsList from "./SpecsList";

const Specs = () => {
  const nav = useNavigate();
  const [specs, setSpecs] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedSpec, setSelectedRole] = useState({});
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState("");
  const httpRequest = useAxios();

  const getSpecs = () => {
    setLoading(true);
    // axiosService.get("/Specification/getAllSpecs")
    httpRequest({
      url: "/Specification/getAllAttributes",
      method: "GET",
    }).then((res) => {
      setSpecs(res?.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getSpecs();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ToastContainer />
          <div className="flex-column-fluid">
            <div className="container-xxl">
              <div className="m-3 page-title d-flex flex-column justify-content-center">
                <h1 className="my-0 page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center">
                  لیست محصولات
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
                    محصولات
                  </li>

                  {/* <li className="breadcrumb-item text-muted">نقش‌ها</li> */}
                </ul>
              </div>
              <div className="card card-flush">
                <div className="gap-2 py-5 card-header align-items-center gap-md-5">
                  <div className="card-title"></div>
                  <div className="card-toolbar">
                    <Button onClick={() => nav("/admin/add-specification")}>
                      ویژگی جدید
                    </Button>
                  </div>
                </div>
                <SpecsList specs={specs} getSpecs={getSpecs} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Specs;
