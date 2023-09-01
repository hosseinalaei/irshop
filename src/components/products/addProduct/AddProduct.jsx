import React, { useEffect, useState } from "react";
import MainColumn from "./mainColumn/MainColumn";
import { axiosService } from "../../../services/axiosService";
import AsideColumn from "./asideColumn/AsideColumn";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

const AddProduct = () => {
  const params = useParams();
  // console.log("mmmmmmmmmmmmmmm", params);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    shortDescription: "",
    policy: "",
    categoryId: "",
    status: true,
    gallery: [],
    originImage: [],
    color: [],
    special: false,
    isDelete: false,
  });

  console.log("llllllllllllll", product);

  // console.log("productColorproductColorproductColorproductColor", productColor);

  const submitProduct = (e) => {
    e.preventDefault();
    if (product?.name && product?.shortDescription) {
      const requestBody = new FormData();

      product?.name && requestBody?.append("ProductName", product?.name);

      product?.shortDescription &&
        requestBody?.append("ShortDescription", product?.shortDescription);

      product?.description &&
        requestBody?.append("description", product?.description);

      product?.price && requestBody.append("price", product?.price);

      product?.categoryId &&
        requestBody?.append("ProductCategoryId", product?.categoryId);

      product?.status && requestBody.append("IsExists", product?.status);

      product?.originImage &&
        requestBody.append("productOriginImage", [
          {
            originImage: product?.originImage,
          },
        ]);

      requestBody.append("id", uuidv4());

      product?.policy && requestBody.append("policyId", product?.policy);

      product?.gallery.length > 0 &&
        requestBody.append(
          "ProductGalleries",
          JSON.stringify(product?.gallery)
        );

      product?.color?.length > 0 &&
        requestBody.append("ProductColor", JSON.stringify(product?.color));

      product?.special && requestBody.append("IsSpecial", product?.special);

      axiosService
        .post(
          "/AdminProducts/registerProduct",
          requestBody,
          "multipart/form-data"
        )
        .then((res) => console.log(res));
    }
  };

  const getProductForEdit = () => {
    axiosService
      .get(`/AdminProducts/get-product-for-edit/${params?.id}`)
      .then((res) => {
        console.log("getProductForEditgetProductForEdit", res);
        // const selectedProduct = res?.data
        // setProduct({
        //   name: "",
        //   description: "",
        //   shortDescription: "",
        //   policy: "",
        //   categoryId: "",
        //   status: true,
        //   gallery: [],
        //   originImage: [],
        //   color: [],
        //   special: false,
        //   isDelete: false,
        // })
      });
  };

  useEffect(() => {
    params?.id && getProductForEdit();
  }, [params?.id]);

  return (
    <div className="d-flex flex-column flex-column-fluid">
      <div className="py-3 app-toolbar py-lg-0">
        <div className="app-container container-xxl d-flex flex-stack">
          <div className="page-title d-flex flex-column justify-content-center me-3">
            <h1 className="my-0 page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center">
              محصول جدید
            </h1>

            <ul className="pt-1 my-0 breadcrumb breadcrumb-separatorless fw-semibold fs-7">
              <li className="breadcrumb-item text-muted">
                <a href="/" className="text-muted text-hover-primary">
                  صفحه اصلی
                </a>
              </li>

              <li className="breadcrumb-item">
                <span className="bg-gray-400 bullet w-5px h-2px"></span>
              </li>

              <li className="breadcrumb-item text-muted">محصولات</li>

              <li className="breadcrumb-item">
                <span className="bg-gray-400 bullet w-5px h-2px"></span>
              </li>

              <li className="breadcrumb-item text-muted">محصول جدید</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="app-content flex-column-fluid">
        <div className="">
          <form className="form d-flex flex-column flex-lg-row">
            <AsideColumn setProduct={setProduct} product={product} />
            <MainColumn
              setProduct={setProduct}
              product={product}
              submitProduct={(e) => {
                submitProduct(e);
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
