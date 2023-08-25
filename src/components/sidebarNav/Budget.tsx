import React from "react";

const Budget = () => {
  return (
    <div className="mb-3 d-flex mb-lg-6">
      {/* <!--begin::Stat--> */}
      <div className="px-4 py-2 border border-gray-300 border-dashed rounded min-w-100px w-100 me-6">
        {/* <!--begin::Date--> */}
        <span className="text-gray-500 fs-6 fw-bold">درآمد</span>
        {/* <!--end::Date--> */}
        {/* <!--begin::Label--> */}
        <div className="fs-2 fw-bold text-success">$14,350</div>
        {/* <!--end::Label--> */}
      </div>
      {/* <!--end::Stat--> */}
      {/* <!--begin::Stat--> */}
      <div className="px-4 py-2 border border-gray-300 border-dashed rounded min-w-100px w-100">
        {/* <!--begin::Date--> */}
        <span className="text-gray-500 fs-6 fw-bold">هزینه</span>
        {/* <!--end::Date--> */}
        {/* <!--begin::Label--> */}
        <div className="fs-2 fw-bold text-danger">$8,029</div>
        {/* <!--end::Label--> */}
      </div>
      {/* <!--end::Stat--> */}
    </div>
  );
};

export default Budget;
