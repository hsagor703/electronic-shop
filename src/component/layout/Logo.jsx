import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="flex items-center">
        <Image className=""
          alt="Hero-Kids-Logo"
          src={"/assets/logo.png"}
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
