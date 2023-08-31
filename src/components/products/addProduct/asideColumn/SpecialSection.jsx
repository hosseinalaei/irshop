import React from "react";

const SpecialSection = ({ product, setProduct }) => {
  return (
    <div className="py-4 card card-flush">
      <div className="card-header">
        <div className="card-title">
          <h2>Is special</h2>
        </div>
      </div>
      <div className="pt-0 card-body">
        <select
          className="mb-2 form-select"
          value={product?.special}
          onChange={(e) => setProduct({ ...product, special: e.target.value })}
        >
          <option></option>
          <option value={true} selected>
            بله
          </option>
          <option value={false} selected>
            خیر
          </option>
        </select>
        {/* <div className="text-muted fs-7">وضعیت موجودی محصول را انتخاب کنید</div> */}
      </div>
    </div>
  );
};

export default SpecialSection;
