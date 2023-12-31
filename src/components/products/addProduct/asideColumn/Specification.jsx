import useAxios from "../../../../hooks/useAxios";
import React, { useEffect, useState } from "react";
import SelectComponent from "./SelectComponent";

const Specification = ({ product, setProduct }) => {
  const httpRequest = useAxios();
  const [categoriesSpec, setCategoriesSpec] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedValue, setSelectedValue] = useState();

  const [selectedSpecs, setSelectedSpecs] = useState({
    categoryId: "",
    groups: [
      // {
      //   groupId:"",
      //   specId:""
      // }
    ],
  });

  // {
  //   categoryId: "",
  //   groups:[
  //     {
  //       groupId:"",
  //       specId:""
  //     }
  //   ]
  // }

  const getCategoriesSpec = () => {
    httpRequest({
      url: "/Specification/getActiveAttributeCategory",
      method: "GET",
    }).then((res) => setCategoriesSpec(res?.data));
  };

  useEffect(() => {
    getCategoriesSpec();
  }, []);

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
    // console.log("productproductproduct", product);
    product &&
      product?.productSpecific &&
      setSelectedCategory(product?.productSpecific?.attributeCategoryId);

    if (product) {
      // groups?.map((group) => {
      product?.productSpecific?.spec?.map((item) => {
        // console.log(
        //   "111111111111111",
        //   item
        //   // group,
        //   // group?.group?.id === item?.groupId
        // );

        setSelectedValue({
          groupId: item?.groupId,
          specId: item?.value,
        });
      });
      // });
    }
  }, [product, groups]);

  useEffect(() => {
    if (categoriesSpec?.length > 0 && selectedCategory) {
      // Clear groups before adding new ones
      setGroups([]);

      const category = categoriesSpec?.find(
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
  }, [selectedCategory, categoriesSpec]);

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

  const getSelectedSpec = (groupId, specId) => {
    console.log(groupId, specId);

    const findedIndex = selectedSpecs?.groups?.findIndex(
      (item) => item?.groupId === groupId
    );
    if (findedIndex !== -1) {
      const updatedGroup = selectedSpecs?.groups?.map((group) => {
        return group?.groupId === groupId ? { ...group, specId } : group;
      });

      setSelectedSpecs({ ...selectedSpecs, groups: updatedGroup });
    } else {
      setSelectedSpecs({
        ...selectedSpecs,
        groups: [...selectedSpecs?.groups, { groupId, specId }],
      });
    }
  };

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
            value={selectedSpecs?.categoryId}
            onChange={(e) => {
              // setSelectedCategory(e.target.value);
              setSelectedSpecs({
                ...selectedSpecs,
                categoryId: e.target.value,
              });
            }}
          >
            <option></option>
            {categoriesSpec?.length > 0 ? (
              categoriesSpec?.map((item, index) => (
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
              // console.log("itemmmmmmmm", item);
              return (
                <div className="relative p-5 mb-3 border border-black rounded-md">
                  <div className="absolute text-lg bg-white right-5 -top-3 ">
                    {item?.values?.name}
                  </div>

                  <div className="">
                    <SelectComponent
                      options={item?.values?.value}
                      onChange={(value) =>
                        getSelectedSpec(item?.group?.id, value)
                      }
                    />
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
