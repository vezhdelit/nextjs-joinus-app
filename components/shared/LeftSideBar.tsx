"use client";

import { sidebarLinks } from "@/constants";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

const LeftSideBar = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className=" sticky  flex h-screen flex-row pb-4 pl-6 pt-32  max-md:hidden">
      <div className=" custom-scrollbar flex  flex-col items-center overflow-auto rounded-2xl bg-white py-12">
        <div className="flex w-full flex-1 flex-col">
          {sidebarLinks.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;

            return (
              <Link
                href={link.route}
                key={link.label}
                className={`relative flex items-center justify-start gap-6 px-12 py-4 hover:bg-lightsky/50 ${
                  isActive && " bg-lightsky  font-bold text-sky-500"
                }`}
              >
                <Image
                  src={link.imgURL}
                  alt="logo"
                  width={36}
                  height={36}
                  className={` blue-icon ${isActive && "filter-blue"}`}
                />

                <p className=" text-xl max-lg:hidden">{link.label}</p>
              </Link>
            );
          })}
        </div>

        <div className="flex w-full flex-col ">
          <SignedIn>
            <SignOutButton signOutCallback={() => router.push("/sign-in")}>
              <div className=" flex cursor-pointer items-center gap-6 px-12 py-4 hover:bg-lightsky/50">
                <Image
                  src="/assets/logout.svg"
                  alt="logo"
                  width={36}
                  height={36}
                />

                <p className="text-xl max-lg:hidden">Logout</p>
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </section>
  );
};

export default LeftSideBar;
