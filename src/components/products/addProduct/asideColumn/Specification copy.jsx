import useAxios from "../../../../hooks/useAxios";
import React, { useEffect, useState } from "react";

const Specification = ({ product, setProduct }) => {
  const httpRequest = useAxios();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);

  const getCategories = () => {
    httpRequest({
      url: "/Specification/getActiveAttributeCategory",
      method: "GET",
    }).then((res) => setCategories(res?.data));
  };

  const getGroups = (id) => {
    console.log("sssssssssssssssssssssssssssssssssssssss");
    const body = {
      id: id,
    };
    httpRequest({
      url: "/Specification/getAttributegroupById",
      method: "POST",
      data: body,
    }).then((res) => {
      res?.data?.attributesId?.map(async (item) => {
        const specs = await getSpecs(item);
        setGroups((prev) => [
          ...prev,
          {
            group: res?.data,
            values: specs,
          },
        ]);
      });
    });
  };

  // console.log("ggggggggg", groups);

  const getSpecs = async (id) => {
    const body = {
      id: id,
    };
    const res = await httpRequest({
      url: "/Specification/getAttributesbyId",
      method: "POST",
      data: body,
    });

    return res?.data;
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    // console.log("productproductproduct", product);
    product &&
      product?.productSpecific &&
      setSelectedCategory(product?.productSpecific?.attributeCategoryId);

    if (product) {
      // groups?.map((group) => {
      // product?.productSpecific?.spec?.map((item) => {
      // console.log(
      //   "111111111111111",
      //   item
      //   // group,
      //   // group?.group?.id === item?.groupId

      // console.log("itemmmmmmmm", item);
      // );

      //   setSelectedValue([
      //   ...selectedValue,
      //   {
      //       groupId: item?.groupId,
      //       specId: item?.value,
      //     },
      //   ]);
      // });
      setSelectedValue([...product.productSpecific.spec]);

      // });
    }
  }, [product, groups]);

  console.log("wwwwwwwwwww", selectedValue);

  useEffect(() => {
    if (categories?.length > 0 && selectedCategory) {
      // Clear groups before adding new ones
      setGroups([]);

      const category = categories?.find(
        (item) => item?.id === selectedCategory
      );
      // console.log("categorycategorycategory", category);

      // Use forEach to call getGroups separately for each group
      category?.attributeGroupsId?.forEach((item) => {
        getGroups(item);
      });

      // console.log(
      //   "selectedCategoryselectedCategoryselectedCategory",
      //   selectedCategory,
      //   categories,
      //   groups
      // );
    }
  }, [selectedCategory, categories]);

  const addSpecs = (attId, groupId) => {
    // const findedSpec = product?.productSpecific?.spec?.findIndex(
    //   (item) => item?.groupId === groupId
    // );

    // console.log("44444444", attId, groupId);

    const findedSpec = (product?.productSpecific?.spec || []).findIndex(
      (item) => item?.groupId === groupId
    );

    // console.log(
    //   "selectedCategoryselectedCategoryselectedCategoryselectedCategory",
    //   selectedCategory
    // );

    if (findedSpec === -1) {
      setProduct({
        ...product,
        productSpecific: {
          attributeCategoryId: selectedCategory,
          spec: [
            ...product?.productSpecific?.spec,
            {
              groupId,
              value: attId,
            },
          ],
        },
      });
    } else {
      const updatedSpec = product?.productSpecific?.spec?.map((item, index) =>
        index === findedSpec ? { ...item, value: attId } : item
      );

      setProduct({
        ...product,
        productSpecific: {
          ...product?.productSpecific,
          spec: updatedSpec,
        },
      });
    }
  };
  console.log("product", product);

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

        <div className="w-1/2 mx-2 ">
          {groups
            ?.filter(function (item, pos) {
              return (
                groups.findIndex((el) => el.values.id === item.values.id) ===
                pos
              );
            })
            .map((item) => {
              let prd = selectedValue
                .map((val) => {
                  let a = [];
                  console.log("grop ", item.group.id);
                  console.log("val.groupId", val.groupId);
                  item.group.id === val.groupId && a.push(val);
                  return a;
                })
                .filter(Boolean);
              console.log("itemmmmmmmm", prd);

              return (
                <div className="relative p-5 mb-3 border border-black rounded-md">
                  <div className="absolute text-lg bg-white right-5 -top-3 ">
                    {item?.values?.name}
                  </div>

                  <div className="">
                    <select
                      className="mb-2 form-select"
                      value={prd[0].value}
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
                            <option key={index} value={item?.id}>
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
        </div>
      </div>
    </div>
  );
};

export default Specification;
