import React from "react";

const GeneralSection = () => {
  return (
    <div className="py-4 card card-flush">
      <div className="card-header">
        <div className="card-title">
          <h2>عمومی</h2>
        </div>
      </div>

      <div className="pt-0 card-body">
        <div className="mb-10 fv-row">
          <label className="required form-label">نام دسته‌بندی</label>
          <input
            type="text"
            name="category_name"
            className="mb-2 form-control"
            placeholder="نام"
            value=""
          />
          <div className="text-muted fs-7">
            لطفا نام منحصر به فرد انتخاب کنید
          </div>
        </div>

        <div>
          <label className="form-label">آدرس url</label>
          <input
            type="text"
            name="category_url"
            className="mb-2 form-control"
            placeholder="آدرس"
            value=""
          />
          {/* <div className="text-muted fs-7">
            Set a description to the category for better visibility.
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GeneralSection;
