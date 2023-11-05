import React from "react";
import Button from "../../common/Button";
import GroupsList from "./CategoriesList";
import Loading from "../../common/Loading";
import { ToastContainer } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import { useState } from "react";
import { useEffect } from "react";
import CategoriesList from "./CategoriesList";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [groups, setGroups] = useState([]);

  const httpRequest = useAxios();

  const getCategorySpecs = () => {
    // setLoading(true);
    httpRequest({
      url: "/Specification/getActiveAttributeCategory",
      method: "GET",
    }).then((res) => {
      setCategories(res?.data);
      // setLoading(false);
    });
  };
  const getGroups = () => {
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

  useEffect(() => {
    getCategorySpecs();
    getGroups();
  }, []);

  const [values, setValues] = useState([]);

  useEffect(() => {
    const valuesExp = categories?.reduce((result, category) => {
      const categoryObject = { ...category, group: null };

      categoryObject.group = category?.attributeGroupsId
        ?.map((item) => groups?.find((spec) => spec?.id === item))
        .filter((item) => item);

      if (categoryObject?.group?.length > 0) {
        result.push(categoryObject);
      }

      return result;
    }, []);
    setValues(valuesExp);
    // console.log("valuesvaluesvaluesvaluesvaluesvaluesvalues", values);
  }, [categories, groups]);

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
                    onClick={() =>
                      nav("/admin/specification/categories/add-category")
                    }
                  >
                    دسته‌بندی جدید
                  </Button>
                </div>
              </div>
              <CategoriesList
                categories={categories}
                values={values}
                getCategories={getCategorySpecs}
                // getProducts={getGroups}
              />
            </div>
          </div>
        </div>
      </>
      {/* )} */}
    </>
  );
};

export default Categories;
