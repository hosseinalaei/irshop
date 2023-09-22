import React, { useEffect, useState } from "react";
import { axiosService } from "../../services/axiosService";
import CommentsListHead from "./CommentsListHead";
import { convertToPersianDate } from "../../utils/dateConverter";

const Comments = () => {
  const [comments, setComments] = useState();
  const getComments = () => {
    const body = {
      id: "a82d0e7b-f577-45ae-aca5-4ff3d036c628",
    };
    axiosService.post("/Products/get-product-comments", body).then((res) => {
      console.log(res);
      setComments(res?.data);
    });
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <div class="card card-flush py-4">
        <div class="card-body pt-0">
          <table
            class="table table-row-dashed fs-6 gy-5 my-0"
            id="kt_ecommerce_add_product_reviews"
          >
            <CommentsListHead />
            <tbody>
              {comments?.map((comment) => (
                <tr>
                  {/* <td>
                    <div class="form-check form-check-sm form-check-custom form-check-solid mt-1">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="1"
                      />
                    </div>
                  </td> */}
                  {/* <td data-order="rating-5">
                    <div class="rating">
                      <div class="rating-label checked">
                        <i class="ki-outline ki-star fs-6"></i>
                      </div>
                      <div class="rating-label checked">
                        <i class="ki-outline ki-star fs-6"></i>
                      </div>
                      <div class="rating-label checked">
                        <i class="ki-outline ki-star fs-6"></i>
                      </div>
                      <div class="rating-label checked">
                        <i class="ki-outline ki-star fs-6"></i>
                      </div>
                      <div class="rating-label checked">
                        <i class="ki-outline ki-star fs-6"></i>
                      </div>
                    </div>
                  </td> */}
                  <td>
                    <a
                      href="../../demo23/dist/apps/inbox/reply.html"
                      class="d-flex text-dark text-gray-800 text-hover-primary"
                    >
                      <div class="symbol symbol-circle symbol-25px me-3">
                        <div class="symbol-label bg-light-danger">
                          <span class="text-danger">M</span>
                        </div>
                      </div>
                      <span class="fw-bold">Melody Macy</span>
                    </a>
                  </td>
                  <td class="text-gray-600 fw-bold">{comment?.text}</td>
                  <td class="text-end">
                    <span class="fw-semibold text-muted">
                      {convertToPersianDate(comment?.createDate)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Comments;
