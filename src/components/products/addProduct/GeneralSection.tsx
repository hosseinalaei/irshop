import { axiosService } from "@/api.js/axiosService";
import React, { useState } from "react";

const GeneralSection = ({
  setProductDetails,
  productDetails,
  productName,
  setProductName,
  productDescription,
  setProductDescription,
  setShortDescription,
  shortDescription,
}: any) => {
  return (
    <>
      <div className="card card-flush py-4">
        <div className="card-header">
          <div className="card-title">
            <h2>عمومی</h2>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="mb-10 fv-row">
            <label className="required form-label">نام محصول</label>
            <input
              type="text"
              name="product_name"
              className="form-control mb-2"
              placeholder="نام محصول"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <div className="text-muted fs-7">
              نام محصول را منحصر به فرد انتخاب کنید
            </div>
          </div>
          <div className="mb-10 fv-row">
            <label className="required form-label">توضیحات کوتاه</label>
            <input
              type="text"
              name="short-description"
              className="form-control mb-2"
              placeholder="توضیحات کوتاه"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
            {/* <div className="text-muted fs-7">
              نام محصول را منحصر به فرد انتخاب کنید
            </div> */}
          </div>

          <div>
            <label className="form-label">توضیحات</label>
            <div className="min-h-200px mb-2">
              <textarea
                className="form-control mb-2"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="توضیحات"
                rows={10}
                name="product_description"
              />
            </div>
            <div className="text-muted fs-7">
              توضیحات برای بهتر دیده شدن محصول
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralSection;
