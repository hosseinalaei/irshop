import React, { useState } from "react";
import GroupsListHead from "./GroupsListHead";
import { GroupsListItem } from "./GroupsListItem";
import Pagination from "../../common/Pagination";

const GroupsList = ({ groups, values, getGroups }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = values?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="card card-flush">
      <div className="pt-0 overflow-scroll card-body">
        {/* <!--begin::Table--> */}
        <table
          className="table align-middle table-row-dashed fs-6 gy-5"
          id="kt_ecommerce_category_table"
        >
          <GroupsListHead />
          <tbody className="text-gray-600 fw-semibold">
            {currentItems?.map((item, index) => (
              <GroupsListItem
                key={index}
                group={item}
                getGroups={getGroups}
                // getSpecs={getSpecs}
              />
            ))}
            {/* <ProductsListItem />
    <ProductsListItem />
    <ProductsListItem /> */}
          </tbody>
          {/* <!--end::Table body--> */}
        </table>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(groups?.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
        {/* <!--end::Table--> */}
      </div>
    </div>
  );
};

export default GroupsList;
