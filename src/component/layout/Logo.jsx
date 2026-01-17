import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '../../../public/assests/logo.png'
const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="flex items-center">
        <Image className=""
          alt="electronic-shop-Logo"
          src={logo}
          width={60}
          height={60}
        />
        <h1 className="text-xl font-bold">
          <span className="text-indigo-500">Naap</span> Electronic
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
