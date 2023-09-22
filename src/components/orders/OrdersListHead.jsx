import React from "react";

const OrdersListHead = () => {
  return (
    <thead>
      <tr class=" text-gray-400 fw-bold fs-7 text-uppercase gs-0">
        {/* <th class="text-center w-10px pe-2">
          <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
            <input
              class="form-check-input"
              type="checkbox"
              data-kt-check="true"
              data-kt-check-target="#kt_ecommerce_sales_table .form-check-input"
              value="1"
            />
          </div>
        </th> */}
        <th class="min-w-175px">کاربر</th>
        <th class="text-center min-w-70px">وضعیت</th>
        <th class="text-center min-w-100px">مبلغ کل</th>
        <th class="text-center min-w-100px">تاریخ سفارش</th>
        <th class="text-center min-w-100px">تاریخ ویرایش</th>
        <th class="text-center min-w-100px"></th>
      </tr>
    </thead>
  );
};

export default OrdersListHead;
