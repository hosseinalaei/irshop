import React from "react";

const CommentsListHead = () => {
  return (
    <thead>
      <tr class="text-end text-gray-400 fw-bold fs-7 text-uppercase gs-0">
        {/* <th class="text-end w-10px pe-2">
          <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
            <input
              class="form-check-input"
              type="checkbox"
            />
          </div>
        </th> */}
        <th class="text-end min-w-175px">کاربر</th>
        <th class="text-end min-w-175px">کامنت</th>
        <th class="text-end min-w-100px fs-7">تاریخ</th>
      </tr>
    </thead>
  );
};

export default CommentsListHead;
