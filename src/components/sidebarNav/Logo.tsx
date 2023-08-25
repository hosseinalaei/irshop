import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <a href="/">
      <Image
        width={150}
        height={150}
        alt="Logo"
        src="/demo23.svg"
        className="h-20px h-lg-25px theme-light-show"
      />
    </a>
  );
};

export default Logo;
