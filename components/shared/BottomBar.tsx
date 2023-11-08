"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {};

const BottomBar = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="fixed bottom-0 z-10 w-full p-4 px-6 pb-4 md:hidden">
      <div className=" xs:gap-5 flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-4">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${
                isActive && " bg-sky-100/70  font-bold text-sky-500"
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={28}
                height={28}
                className={` blue-icon ${isActive && " filter-blue"}`}
              />
              <p className=" max-sm:hidden">{link.label.split(/\s+/)[0]}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default BottomBar;
