import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const MenuItem = ({ item }) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={item?.url}
        className={`text-xl  ${
          pathname === item?.url ? "text-blue-700" : "text-gray-950"
        } hover:text-blue-600 p-3 py-2`}
      >
        {item?.name}
      </Link>
    </>
  );
};

export default MenuItem;
