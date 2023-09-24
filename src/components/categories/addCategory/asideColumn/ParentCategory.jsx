import React, { useEffect, useState } from "react";
import { axiosService } from "../../../../services/axiosService";

const ParentCategory = ({ category, setCategory }) => {
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    axiosService
      .get("/Category/product-active-categories")
      .then((res) => setCategories(res?.data));
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <div className="py-4 card card-flush">
        <div className="card-header">
          <div className="card-title">
            <h2>دسته‌بندی محصول</h2>
          </div>
        </div>
        <div className="pt-0 card-body">
          <label className="form-label">دسته‌بندی‌ها</label>
          <select
            className="mb-2 form-select"
            // data-control="select2"
            // data-allow-clear="true"
            // multiple

            placeholder="انتخاب کنید"
            onChange={(e) =>
              setCategory({ ...category, parentId: e.target.value })
            }
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
            className="mb-10 btn btn-light-primary btn-sm"
          >
            <i className="ki-outline ki-plus fs-2"></i>Create new category
          </a> */}
          {/* <label className="form-label d-block">Tags</label>
          <input
            id="kt_ecommerce_add_product_tags"
            name="kt_ecommerce_add_product_tags"
            className="mb-2 form-control"
            value=""
          />
          <div className="text-muted fs-7">Add tags to a product.</div> */}
        </div>
      </div>
    </>
  );
};

export default ParentCategory;
