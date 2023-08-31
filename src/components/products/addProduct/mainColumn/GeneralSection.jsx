import React from "react";

const GeneralSection = ({ product, setProduct }) => {
  return (
    <>
      <div className="py-4 card card-flush">
        <div className="card-header">
          <div className="card-title">
            <h2>عمومی</h2>
          </div>
        </div>
        <div className="pt-0 card-body">
          <div className="mb-10 fv-row">
            <label className="required form-label">نام محصول</label>
            <input
              type="text"
              name="product_name"
              className="mb-2 form-control"
              placeholder="نام محصول"
              value={product?.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
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
              className="mb-2 form-control"
              placeholder="توضیحات کوتاه"
              value={product?.shortDescription}
              onChange={(e) =>
                setProduct({ ...product, shortDescription: e.target.value })
              }
            />
          </div>

          <div>
            <label className="form-label">توضیحات</label>
            <div className="mb-2 min-h-200px">
              <textarea
                className="mb-2 form-control"
                value={product?.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
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
