import AddProduct from "@/components/products/addProduct/AddProduct";
import React from "react";

const page = ({ params }: any) => {
  return <AddProduct id={params.id} />;
};

export default page;
