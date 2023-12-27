import useAxios from "../../../../hooks/useAxios";
import React, { useCallback, useEffect, useState } from "react";

const Specification = ({ product, setProduct }) => {
  const httpRequest = useAxios();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  // const [categoriesGroupId, setCategoriesGroupId] = useState([]);
  const [attIds, setAttIds] = useState([]);
  const [atts, setAtts] = useState([]);
  const [group, setGroup] = useState(null);

  const getCategories = () => {
    httpRequest({
      url: "/Specification/getActiveAttributeCategory",
      method: "GET",
    }).then((res) => setCategories(res?.data));
  };

  const getGroupByID = (id) => {
    const body = {
      id,
    };
    httpRequest({
      url: "/Specification/getAttributegroupById",
      method: "POST",
      data: body,
    }).then((res) => {
      setGroup(res?.data);

      // setAttIds(res.data.attributesId);
    });
  };

  useEffect(() => {
    console.log("groupgroupgroup", group);

    group?.attributesId?.map((item) => getSpecs(item));
  }, [group?.id]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory && categories?.length > 0) {
      const findedCategory = categories?.flatMap(
        (item) => item.attributeGroupsId
      );
      // .filter(Boolean);

      console.log("finded", findedCategory);
      // const groups = findedCategory.attributeGroupsId;

      // console.log("groups", groups);

      findedCategory?.map((group) => getGroupByID(group));
    }
    // if (selectedCategory) {
    //   setCategoriesGroupId(
    //     selectedCategory?.map((item) => item.attributeGroupsId)
    //   );
    // }
  }, [selectedCategory, categories]);

  useEffect(() => {
    setSelectedCategory(product?.productSpecific?.attributeCategoryId);
  }, [product]);

  const getSpecs = async (id) => {
    const body = {
      id: id,
    };
    const res = await httpRequest({
      url: "/Specification/getAttributesbyId",
      method: "POST",
      data: body,
    });
    // console.log("resssssssssss", res.data);
    // setAtts([...atts, res?.data]);

    return res?.data;
  };

  console.log("attsatts", atts);

  // useEffect(() => {
  //   if (attIds) {
  //     attIds.map((item) => {
  //       const specs = getSpecs(item);
  //     });
  //   }
  // }, [attIds]);

  return (
    <div className="py-4 card card-flush">
      <div className="card-header">
        <div className="card-title">
          <h2>ویژگی‌ها</h2>
        </div>
      </div>
      <div className="flex justify-between w-full pt-0 card-body align-center ">
        <div className="w-1/2">
          <select
            className="mb-2 form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option></option>
            {categories?.length > 0 ? (
              categories?.map((item, index) => (
                <option key={index} value={item.id}>
                  {item?.name}
                </option>
              ))
            ) : (
              <div>موردی وجود ندارد</div>
            )}
          </select>
        </div>

        {/* <div className="w-1/2 mx-2 ">
          {groups
            ?.filter(function (item, pos) {
              return (
                groups.findIndex((el) => el.values.id === item.values.id) ===
                pos
              );
            })
            .map((item) => {
              return (
                <div className="relative p-5 mb-3 border border-black rounded-md">
                  <div className="absolute text-lg bg-white right-5 -top-3 ">
                    {item?.values?.name}
                  </div>

                  <div className="">
                    <select
                      className="mb-2 form-select"
                      value={product?.productSpecific}
                      onChange={(e) => {
                        addSpecs(e.target.value, item?.group?.id);
                        setSelectedValue({
                          groupId: item?.group?.id,
                          specId: e.target.value,
                        });
                      }}
                    >
                      <option></option>
                      {item?.values?.value?.length > 0 ? (
                        item?.values?.value?.map((item, index) => {
                          return (
                            <option key={index} value={selectedValue?.specId}>
                              {item?.name}
                            </option>
                          );
                        })
                      ) : (
                        <div>موردی وجود ندارد</div>
                      )}
                    </select>
                  </div>
                </div>
              );
            })}
        </div> */}
      </div>
    </div>
  );
};

export default Specification;
