import React from "react";
import Button from "../../common/Button";
import GroupsList from "./GroupsList";
import Loading from "../../common/Loading";
import { ToastContainer } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import { useState } from "react";
import { useEffect } from "react";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [specs, setSpecs] = useState([]);

  const httpRequest = useAxios();

  const getGroupSpecs = () => {
    // setLoading(true);
    // axiosService.get("/Specification/getAllSpecs")
    httpRequest({
      url: "/Specification/getActiveAttributegroup",
      method: "GET",
    }).then((res) => {
      setGroups(res?.data);
      // setLoading(false);
    });
  };
  const getSpecs = () => {
    // setLoading(true);
    // axiosService.get("/Specification/getAllSpecs")
    httpRequest({
      url: "/Specification/getActiveAttributes",
      method: "GET",
    }).then((res) => {
      setSpecs(res?.data);
      // setLoading(false);
    });
  };

  useEffect(() => {
    getGroupSpecs();
    getSpecs();
  }, []);

  const [values, setValues] = useState([]);

  useEffect(() => {
    const valuesExp = groups?.reduce((result, group) => {
      const groupObject = { ...group, spec: null }; // Create a group object with an initial "spec" property

      groupObject.spec = group?.attributesId
        ?.map((item) => specs?.find((spec) => spec?.id === item))
        .filter((item) => item);

      if (groupObject.spec.length > 0) {
        result.push(groupObject);
      }

      return result;
    }, []);
    setValues(valuesExp);
    console.log("valuesvaluesvaluesvaluesvaluesvaluesvalues", values);
  }, [groups, specs]);

  const nav = useNavigate();
  return (
    <>
      {/* {loading ? (
        <Loading />
      ) : ( */}
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
                  <Button
                    onClick={() => nav("/admin/specification/groups/add-group")}
                  >
                    گروه جدید
                  </Button>
                </div>
              </div>
              <GroupsList
                groups={groups}
                values={values}
                getGroups={getGroupSpecs}
                // getProducts={getSpecs}
              />
            </div>
          </div>
        </div>
      </>
      {/* )} */}
    </>
  );
};

export default Groups;
