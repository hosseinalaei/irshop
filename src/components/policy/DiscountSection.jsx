import React from "react";

const DiscountSection = ({ policy, setPolicy }) => {
  return (
    <div className="px-10 py-5">
      <h3 className="mb-3">تخفیف:</h3>
      <div className="flex-wrap gap-5 d-flex">
        <div className="fv-row w-100 flex-md-root">
          <label className="required form-label">اولویت تخفیف</label>
          <input
            type="text"
            className="mb-2 form-control"
            value={policy?.discount?.discountPriority}
            onChange={(e) =>
              setPolicy({
                ...policy,
                discount: {
                  ...policy.discount,
                  discountPriority: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="fv-row w-100 flex-md-root">
          <label className="form-label">نوع تخفیف</label>

          <input
            type="text"
            className="mb-2 form-control"
            value={policy?.discount?.discountType}
            onChange={(e) =>
              setPolicy({
                ...policy,
                discount: { ...policy.discount, discountType: e.target.value },
              })
            }
          />

          {/* <div className="text-muted fs-7">Set the product VAT about.</div> */}
        </div>
      </div>
      <div className="flex-wrap gap-5 d-flex">
        <div className="fv-row w-100 flex-md-root">
          <label className="form-label">discountPr</label>

          <input
            type="number"
            pattern="[0-9]*"
            className="mb-2 form-control"
            value={policy?.discount?.discountPr}
            onChange={(e) =>
              e.target.validity.valid &&
              setPolicy({
                ...policy,
                discount: { ...policy.discount, discountPr: e.target.value },
              })
            }
          />

          <div className="text-muted fs-7">لطفا عدد وارد کنید</div>
        </div>

        <div className="fv-row w-100 flex-md-root">
          <label className="form-label">زمان اعتبار سبد خرید</label>

          <input
            type="number"
            pattern="[0-9]*"
            className="mb-2 form-control"
            value={policy?.discount?.discountDuration}
            onChange={(e) =>
              e.target.validity.valid &&
              setPolicy({
                ...policy,
                discount: {
                  ...policy.discount,
                  discountDuration: e.target.value,
                },
              })
            }
          />

          <div className="text-muted fs-7">لطفا عدد وارد کنید</div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
