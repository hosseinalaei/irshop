import { axiosService } from "../../../services/axiosService";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ product, setProduct }) => {
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
            value={product?.categoryId[0]?.productCategoryId}
            placeholder="انتخاب کنید"
            onChange={(e) =>
              setProduct({
                ...product,
                categoryId: [{ productCategoryId: e.target.value }],
              })
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
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
