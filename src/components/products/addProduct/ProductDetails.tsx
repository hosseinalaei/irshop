import { axiosService } from "@/api.js/axiosService";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ setProductCategoryId }: any) => {
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    axiosService
      .get("/Products/product-active-categories")
      .then((res) => setCategories(res.data));
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <div className="card card-flush py-4">
        <div className="card-header">
          <div className="card-title">
            <h2>دسته‌بندی محصول</h2>
          </div>
        </div>
        <div className="card-body pt-0">
          <label className="form-label">دسته‌بندی‌ها</label>
          <select
            className="form-select mb-2"
            // data-control="select2"
            // data-allow-clear="true"
            // multiple
            placeholder="انتخاب کنید"
            onChange={(e) => setProductCategoryId(e.target.value)}
          >
            <option>انتخاب کنید</option>
            {categories?.map((category) => (
              <option key={category?.id} value={category?.id}>
                {category?.title}
              </option>
            ))}
          </select>
          <div className="text-muted fs-7 mb-7">
            دسته‌بندی محصول را اضافه کنید
          </div>
          {/* <a
            href="../../demo23/dist/apps/ecommerce/catalog/add-category.html"
            className="btn btn-light-primary btn-sm mb-10"
          >
            <i className="ki-outline ki-plus fs-2"></i>Create new category
          </a> */}
          {/* <label className="form-label d-block">Tags</label>
          <input
            id="kt_ecommerce_add_product_tags"
            name="kt_ecommerce_add_product_tags"
            className="form-control mb-2"
            value=""
          />
          <div className="text-muted fs-7">Add tags to a product.</div> */}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
