import React from "react";

const UsersListHead = () => {
  return (
    <thead>
      <tr class=" text-muted fw-bold fs-7 text-uppercase gs-0">
        {/* <th class="w-10px pe-2">
          <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
            <input
              class="form-check-input"
              type="checkbox"
              data-kt-check="true"
              data-kt-check-target="#kt_table_users .form-check-input"
              value="1"
            />
          </div>
        </th> */}
        <th class="min-w-125px">نام</th>
        <th class="min-w-125px">نقش‌ها</th>
        <th class="min-w-125px">شماره تماس</th>
        <th class="min-w-125px">آدرس</th>
        {/* <th class="min-w-125px">Joined Date</th> */}
        <th class="text-end min-w-100px"></th>
      </tr>
    </thead>
  );
};

export default UsersListHead;
