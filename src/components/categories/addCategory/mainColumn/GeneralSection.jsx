import React from "react";

const GeneralSection = ({ category, setCategory }) => {
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
            value={category.title}
            onChange={(e) =>
              setCategory({ ...category, title: e.target.value })
            }
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
            value={category.urlTitle}
            onChange={(e) =>
              setCategory({ ...category, urlTitle: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralSection;
