import React, { useEffect, useState } from "react";
import OrdersListHead from "./OrdersListHead";
import OrdersList from "./OrdersList";
import { axiosService } from "../../services/axiosService";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    axiosService
      ?.get("/Order/getAllOpenOrders")
      .then((res) => setOrders(res?.data));
  };

  useEffect(() => {
    getOrders();
  }, []);
  return (
    <>
      <div id="kt_app_content" class="app-content flex-column-fluid">
        <div id="kt_app_content_container" class="app-container container-xxl">
          <div class="card card-flush">
            <div class="card-header align-items-center py-5 gap-2 gap-md-5">
              <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
                <div class="w-100 mw-150px">
                  <select
                    class="form-select form-select-solid"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Status"
                    data-kt-ecommerce-order-filter="status"
                  >
                    <option></option>
                    <option value="all">All</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Completed">Completed</option>
                    <option value="Denied">Denied</option>
                    <option value="Expired">Expired</option>
                    <option value="Failed">Failed</option>
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Refunded">Refunded</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Delivering">Delivering</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <table
                class="table align-middle table-row-dashed fs-6 gy-5"
                id="kt_ecommerce_sales_table"
              >
                <OrdersListHead />

                <tbody class="fw-semibold text-gray-600">
                  {orders?.map((order) => (
                    <OrdersList order={order} key={order?.id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
