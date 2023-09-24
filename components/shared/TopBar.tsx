import { OrganizationSwitcher } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <nav className="fixed z-30 w-full  px-6 py-4 max-sm:hidden">
      <div className="flex w-full items-center justify-between rounded-2xl bg-white px-12 py-6">
        <Link href="/" className="flex flex-row items-center gap-2 ">
          <Image
            src="/assets/joinus-logo.png"
            alt="JoinUs! Logo"
            width={40}
            height={40}
            className=" object-contain"
          />
          <div>
            <h2 className=" text-lg font-bold leading-tight ">JoinUs!</h2>
            <p className=" text-sm  leading-3 text-gray-600">new friend&more</p>
          </div>
        </Link>

        <OrganizationSwitcher />
      </div>
    </nav>
  );
};

export default TopBar;
