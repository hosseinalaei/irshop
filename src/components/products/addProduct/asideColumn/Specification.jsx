import useAxios from "../../../../hooks/useAxios";
import { axiosService } from "../../../../services/axiosService";
import React, { useEffect, useState } from "react";

const Specification = ({ product, setProduct }) => {
  const httpRequest = useAxios();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [groups, setGroups] = useState([]);
  const [Specs, setSpecs] = useState([]);
  const [main, setMain] = useState([]);

  const getCategories = () => {
    httpRequest({
      url: "/Specification/getActiveAttributeCategory",
      method: "GET",
    }).then((res) => setCategories(res?.data));
  };

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
    }).then( (res) => {
      
      res?.data?.attributesId?.map(async (item) => {

       const specs =  await getSpecs(item)
        setGroups(prev => [...prev,{
          group: res?.data,
          values: specs
        }]);

      });
      

      // setMain({[res?.data?.name]})
    });
  };

  useEffect(() => {
    console.log(
      "selectedCategoryselectedCategoryselectedCategory",
      selectedCategory,
      // JSON.parse(selectedCategory),
      categories,
      groups
    );

    const category = categories?.find(item => item?.id === selectedCategory)

    category?.attributeGroupsId?.map(item => getGroups(item) )


    setGroups([])
    console.log(category);

    // JSON.parse(selectedCategory)?.attributeGroupsId?.map((item) =>
    //   getGroups(item)
    // );
  }, [selectedCategory]);

  console.log("ssssssssssssssssssssssssssssssssss", Specs,groups);

  const getSpecs = async (id) => {
    const body = {
      id: id,
    };
 const res=await httpRequest({
      url: "/Specification/getAttributesbyId",
      method: "POST",
      data: body,
    })

    return res?.data
  };

  // useEffect(() => {
  //   getSpecs();
  // }, []);

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
            // onChange={(e) =>
            //   setProduct({
            //     ...product,
            //     specification: [
            //       ...product?.specification,
            //       { productSpecificationId: e.target.value },
            //     ],
            //   })
            // }
          >
            <option></option>
            {categories?.length > 0 ? (
              categories?.map((item, index) => (
                <option key={index} value={item.id}>
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
          {groups?.map((item) => (
            <div className="relative p-5 mb-3 border border-black rounded-md">
              <div className="absolute text-lg bg-white right-5 -top-3 ">
                {item?.values?.name}
              </div>

              <div className="">
                <select
                  className="mb-2 form-select"
                  value={product?.specification}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      specification: [
                        ...product?.specification,
                        { productSpecificationId: e.target.value },
                      ],
                    })
                  }
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specification;