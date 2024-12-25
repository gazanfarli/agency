import React from "react";
import Image from "next/image"
import Logo from "@/assets/logo.png";;

export const Navlogo = () => {
  return (
    <div>
      <Image width={100} height={30} src={Logo} alt="logo" />
    </div>
  );
};
