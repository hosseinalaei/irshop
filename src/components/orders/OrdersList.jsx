import React from "react";
import { axiosService } from "../../services/axiosService";

const OrdersList = ({ order }) => {
  console.log("oooooooooooooooooooo", order);

  const getUsers = () => {
    axiosService?.get("");
  };

  return (
    <>
      <tr>
        {/* <td>
          <div class="form-check form-check-sm form-check-custom form-check-solid">
            <input class="form-check-input" type="checkbox" value="1" />
          </div>
        </td> */}
        {/* <td data-kt-ecommerce-order-filter="order_id">
          <a href="#" class="text-gray-800 text-hover-primary fw-bold">
            13526
          </a>
        </td> */}
        <td className="text-center">
          <div class="d-flex align-items-center">
            {/* <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
              <a href="../../demo23/dist/apps/user-management/users/view.html">
                <div class="symbol-label">
                  <img
                    src="assets/media/avatars/300-13.jpg"
                    alt="John Miller"
                    class="w-100"
                  />
                </div>
              </a>
            </div> */}
            <div class="ms-5">
              <a href="#" class="text-gray-800 text-hover-primary fs-5 fw-bold">
                John Miller
              </a>
            </div>
          </div>
        </td>
        <td class="text-center pe-0" data-order="Denied">
          <div class="badge badge-light-danger">Denied</div>
        </td>
        <td class="text-center pe-0">
          <span class="fw-bold">{order?.totalPrice}</span>
        </td>
        <td class="text-center" data-order="2023-03-20">
          <span class="fw-bold">20/03/2023</span>
        </td>
        <td class="text-center" data-order="2023-03-21">
          <span class="fw-bold">21/03/2023</span>
        </td>
        <td class="text-center">
          <a
            href="#"
            class="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
          >
            Actions
            <i class="ki-outline ki-down fs-5 ms-1"></i>
          </a>

          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
            data-kt-menu="true"
          >
            <div class="menu-item px-3">
              <a
                href="../../demo23/dist/apps/ecommerce/sales/details.html"
                class="menu-link px-3"
              >
                View
              </a>
            </div>
            <div class="menu-item px-3">
              <a
                href="../../demo23/dist/apps/ecommerce/sales/edit-order.html"
                class="menu-link px-3"
              >
                Edit
              </a>
            </div>
            <div class="menu-item px-3">
              <a
                href="#"
                class="menu-link px-3"
                data-kt-ecommerce-order-filter="delete_row"
              >
                Delete
              </a>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default OrdersList;
