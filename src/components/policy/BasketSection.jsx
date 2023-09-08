import React from "react";

const BasketSection = ({ policy, setPolicy }) => {
  return (
    <div className="px-10 py-5">
      <h3 className="mb-3">سبد خرید:</h3>

      <div className="flex-wrap gap-5 d-flex">
        <div className="fv-row w-100 flex-md-root">
          <label className="required form-label">اولویت سبد خرید</label>
          <input
            type="text"
            className="mb-2 form-control"
            value={policy?.basket?.basketPriority}
            onChange={(e) =>
              setPolicy({
                ...policy,
                basket: { ...policy.basket, basketPriority: e.target.value },
              })
            }
          />
        </div>
        <div className="fv-row w-100 flex-md-root">
          <label className="form-label">نوع سبد خرید</label>

          <input
            type="text"
            className="mb-2 form-control"
            value={policy?.basket?.basketType}
            onChange={(e) =>
              setPolicy({
                ...policy,
                basket: { ...policy.basket, basketType: e.target.value },
              })
            }
          />
        </div>
        <div className="fv-row w-100 flex-md-root">
          <label className="form-label">basketSpecial</label>

          <input
            type="text"
            className="mb-2 form-control"
            value={policy?.basket?.basketSpecial}
            onChange={(e) =>
              setPolicy({
                ...policy,
                basket: { ...policy.basket, basketSpecial: e.target.value },
              })
            }
          />
        </div>
      </div>
      <div className="flex-wrap gap-5 d-flex">
        <div className="fv-row w-100 flex-md-root">
          <label className="form-label">تعداد محصول در سبد</label>

          <input
            type="number"
            pattern="[0-9]*"
            className="mb-2 form-control"
            value={policy?.basket?.basketProductCount}
            onChange={(e) =>
              setPolicy(
                () =>
                  e.target.validity.valid && {
                    ...policy,
                    basket: {
                      ...policy.basket,
                      basketProductCount: e.target.value,
                    },
                  }
              )
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
            value={policy?.basket?.basketDuration}
            onChange={(e) =>
              e.target.validity.valid &&
              setPolicy({
                ...policy,
                basket: { ...policy.basket, basketDuration: e.target.value },
              })
            }
          />

          <div className="text-muted fs-7">لطفا عدد وارد کنید</div>
        </div>
      </div>
    </div>
  );
};

export default BasketSection;
