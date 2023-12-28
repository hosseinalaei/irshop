import React, { useCallback, useState } from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDrag } from "react-dnd";
import { NavLink, useHref, useLocation, useNavigate } from "react-router-dom";
import { DragDropContext } from "@hello-pangea/dnd";
import { Droppable } from "@hello-pangea/dnd";
import { Draggable } from "@hello-pangea/dnd";
import useAxios from "../../../../hooks/useAxios";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

const AddSpecCategory = () => {
  const location = useLocation();

  const selectedGroup = location.state;
  const [specs, setSpecs] = useState([]);
  const [groupName, setGroupName] = useState(selectedGroup?.name || []);
  const httpRequest = useAxios();
  const navigate = useNavigate();
  const [items1, setItems1] = useState(selectedGroup?.group || []);

  // console.log(
  //   "selectedGroupselectedGroupselectedGroupselectedGroup",
  //   selectedGroup
  // );

  const [items2, setItems2] = useState([]);
  useEffect(() => {
    if (specs?.length > 0) {
      let filteredArray1 = specs.filter(
        (obj1) => !items1.some((obj2) => obj2.id === obj1.id)
      );

      // setUpdatedArr(filteredArray1);
      setItems2(filteredArray1);
    }
  }, [specs]);

  useEffect(() => {
    items2?.filter((item) => items1?.map((it) => it?.id !== item?.id));
  }, [items1, items2]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const sourceList = result.source.droppableId;
    const destinationList = result.destination.droppableId;
    const sourceItems = sourceList === "list-1" ? items1 : items2;
    const destinationItems = destinationList === "list-1" ? items1 : items2;

    const [movedItem] = sourceItems.splice(result.source.index, 1);
    destinationItems.splice(result.destination.index, 0, movedItem);

    // setItems1([...items1]);
    // setItems2([...items2]);
  };

  const getSpecs = () => {
    // setLoading(true);
    // axiosService.get("/Specification/getAllSpecs")
    httpRequest({
      url: "/Specification/getActiveAttributegroup",
      method: "GET",
    }).then((res) => {
      setSpecs(res?.data);
      // setLoading(false);
    });
  };

  const addGroupSpec = () => {
    const body = {
      id: uuidv4(),
      isDelete: false,
      attributeGroupsId: items1?.map((value) => value?.id),
      name: groupName,
    };

    httpRequest({
      url: "/Specification/registerAttributeCategory",
      method: "POST",
      data: body,
    }).then((res) => {
      if (res?.status === "Success") {
        // setShowToast("Success");
        setTimeout(() => {
          getSpecs();
          toast.success("عملیات با موفقیت انجام شد", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            // progress: undefined,
            theme: "light",
            style: { fontFamily: "inherit" },
          });
          setTimeout(() => {
            navigate("/admin/specification/categories");
          }, 500);
        }, 500);
      } else {
        // setShowToast("error");
      }
    });
  };

  const updateGroup = () => {
    // setLoading(true);
    console.log("items1items1items1items1items1", items1);
    const requestBody = {
      id: selectedGroup?.id,
      isDelete: selectedGroup?.isDelete,
      attributeGroupsId: items1.map((item) => item?.id),
      name: groupName,
    };

    // axiosService .put("/Policy/updatePolicy", requestBody)
    httpRequest({
      url: "/Specification/updateAttributeCategory",
      method: "PUT",
      data: requestBody,
    }).then((res) => {
      if (res?.status === "Success") {
        getSpecs();
        toast.success("عملیات با موفقیت انجام شد", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          // progress: undefined,
          theme: "light",
          style: { fontFamily: "inherit" },
        });
        setTimeout(() => {
          navigate("/admin/specification/categories");
        }, 500);
      } else {
        toast.error("مشکلی رخ داده است", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          // progress: undefined,
          theme: "light",
          style: { fontFamily: "inherit" },
        });
      }
      // res?.status === "Success"
      //   ? toast.success("عملیات با موفقیت انجام شد", {
      //       position: "top-left",
      //       autoClose: 3000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       // progress: undefined,
      //       theme: "light",
      //       style: { fontFamily: "inherit" },
      //     })
      //   : toast.error("مشکلی رخ داده است", {
      //       position: "top-left",
      //       autoClose: 3000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       // progress: undefined,
      //       theme: "light",
      //       style: { fontFamily: "inherit" },
      //     });
    });
    // .finally(() => setLoading(false));
  };

  useEffect(() => {
    getSpecs();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="flex-column-fluid">
        <div className="container-xxl">
          <div className="m-3 page-title d-flex flex-column justify-content-center">
            <h1 className="my-0 page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center">
              لیست دسته‌بندی ویژگی‌ها
            </h1>

            <ul className="pt-1 my-0 breadcrumb breadcrumb-separatorless fw-semibold fs-7">
              <NavLink
                to="/"
                className="text-lg font-bold text-black hover:text-red-500"
              >
                ویژگی‌ها
              </NavLink>

              <li className="breadcrumb-item">/</li>
              <li className="text-lg font-bold text-black hover:text-red-500">
                دسته‌بندی ویژگی‌ها
              </li>

              {/* <li className="breadcrumb-item text-muted">نقش‌ها</li> */}
            </ul>
          </div>
          <div className="p-10 card card-flush">
            <div className="w-full gap-2 py-5 card-header align-items-center gap-md-5">
              {/* <div className="card-title"></div> */}
              <div className="w-1/3 mb-10 fv-row">
                <label className="mb-2 fs-5 fw-bold form-label">
                  <span className="required">نام گروه</span>
                </label>
                <input
                  className="form-control form-control-solid"
                  placeholder="نام گروه را وارد کنید"
                  name="spec_value"
                  onChange={(e) => setGroupName(e.target.value)}
                  value={groupName}
                />
              </div>

              <div className="flex justify-between w-full mx-10">
                {/* <div> */}
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="list-1" type="COLUMN">
                    {(provided, snapshot) => (
                      <div
                        className={`mx-10 ${
                          snapshot.isDraggingOver
                            ? "bg-blue-200"
                            : "bg-gray-200"
                        } px-10 py-5 rounded-lg w-1/2`}
                        ref={provided.innerRef}
                        // style={{
                        //   backgroundColor: snapshot.isDraggingOver
                        //     ? "blue"
                        //     : "grey",
                        // }}
                        {...provided.droppableProps}
                      >
                        <h2>ویژگی‌های گروه:</h2>
                        {items1.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                {item.name}
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                    )}
                  </Droppable>
                  <Droppable droppableId="list-2" type="COLUMN">
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        className={`mx-10 ${
                          snapshot.isDraggingOver
                            ? "bg-blue-200"
                            : "bg-gray-200"
                        } px-10 py-5 rounded-lg w-1/2`}
                        // style={{
                        //   backgroundColor: snapshot.isDraggingOver
                        //     ? "blue"
                        //     : "grey",
                        // }}
                        {...provided.droppableProps}
                      >
                        <h2>همه‌ی ویژگی‌ها:</h2>
                        {items2.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                {item.name}
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
                {/* </div> */}
              </div>
            </div>
            <button
              type="submit"
              onClick={() => {
                selectedGroup ? updateGroup() : addGroupSpec();
              }}
              className="px-10 py-2 text-2xl font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSpecCategory;
