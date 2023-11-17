import useAxios from "../../../../hooks/useAxios";
import React, { useEffect, useMemo, useState } from "react";

const Specification = ({ product, setProduct }) => {
  const httpRequest = useAxios();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [groups, setGroups] = useState([]);

  // console.log("productproductproductproductproductproductproduct", product);

  const getCategories = () => {
    httpRequest({
      url: "/Specification/getActiveAttributeCategory",
      method: "GET",
    }).then((res) => setCategories(res?.data));
  };

  useEffect(() => {
    if (product?.productSpecific?.attributeCategoryId) {
      setSelectedCategory(product?.productSpecific?.attributeCategoryId);
      console.log(
        "product?.productSpecificproduct?.productSpecific",
        product?.productSpecific
      );

      product?.productSpecific?.spec?.map(
        (item) => item?.groupId && getGroups(item?.groupId)
      );
    }
  }, [product?.productSpecific?.attributeCategoryId]);

  useEffect(() => {
    getCategories();
  }, []);

  const getGroups = (id) => {
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

      // setMain({[res?.data?.name]})
    });
  };

  useEffect(() => {
    if (
      selectedCategory &&
      categories?.length > 0 &&
      !product?.productSpecific?.attributeCategoryId
    ) {
      const category = categories?.find(
        (item) => item?.id === selectedCategory
      );

      selectedCategory &&
        category?.attributeGroupsId?.map((item) => getGroups(item));

      setGroups([]);
    }
  }, [selectedCategory]);

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

  const addSpecs = (attId, groupId) => {
    setSelectedSpec(attId);
    const findedSpec = product?.productSpecific?.spec?.findIndex(
      (item) => item?.value === attId
    );

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

  console.log(
    "product?.specificationproduct?.specificationproduct?.specification",
    product?.specification
  );

  const [selectedSpec, setSelectedSpec] = useState(null);

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
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
          >
            <option></option>
            {categories?.length > 0 ? (
              categories?.map((item, index) => (
                <option key={item.id} value={item.id}>
                  {/* {item?.specTitle} - {item?.specValue} */}
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
            ?.reduce((unique, item) => {
              const isDuplicate = unique.some(
                (existingItem) => existingItem?.values?.id === item?.values?.id
              );

              if (!isDuplicate) {
                unique.push(item);
              }

              return unique;
            }, [])
            ?.map((item) => {
              let selected = product?.productSpecific?.spec
                ?.map((i) => i?.groupId === item?.group?.id && i)
                ?.filter(Boolean)[0];

              // selected && setSelectedSpec(selected?.value);

              console.log(
                "selectedSpecselectedSpecselectedSpecselectedSpecselectedSpec",
                selectedSpec
              );

              return (
                <div
                  key={item?.values?.id}
                  className="relative p-5 mb-3 border border-black rounded-md"
                >
                  <div className="absolute text-lg bg-white right-5 -top-3 ">
                    {item?.values?.name}
                  </div>

                  <div className="">
                    <select
                      className="mb-2 form-select"
                      value={selectedSpec ? selectedSpec : selected?.value}
                      onChange={(e) => {
                        addSpecs(item?.group?.id, e.target.value);
                        // setSelectedSpec(e.target.value);
                        // selected = selected && e.target.value;
                      }}
                    >
                      <option></option>
                      {item?.values?.value?.length > 0 ? (
                        item?.values?.value?.map((item, index) => (
                          <option key={index} value={item?.id}>
                            {item?.name}
                          </option>
                        ))
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
