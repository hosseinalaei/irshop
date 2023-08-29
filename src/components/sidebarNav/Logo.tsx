import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <a href="/">
      <Image
        width={150}
        height={200}
        alt="Logo"
        src="/LOGO-96.09-c2.png"
        className="theme-light-show"
      />
    </a>
  );
};

export default Logo;
