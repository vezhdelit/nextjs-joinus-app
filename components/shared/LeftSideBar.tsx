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
    <section className="custom-scrollbar sticky overflow-auto flex flex-row h-screen pl-6 pt-28 pb-4 max-md:hidden">
      <div className="flex flex-col items-center py-12 bg-white rounded-2xl">
        <div className="flex w-full flex-1 flex-col">
          {sidebarLinks.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;

            return (
              <Link
                href={link.route}
                key={link.label}
                className={`hover:bg-lightsky/50 relative flex items-center justify-start gap-6 py-4 px-12 ${
                  isActive && " bg-lightsky  text-sky-500 font-bold"
                }`}
              >
                <svg
                  height="40px"
                  viewBox="0 0 12 12"
                  width="40px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Layer_3">
                    <circle
                      cx="6"
                      cy="6"
                      fill={`${isActive ? "#3FAFEE" : "#D3D3D3"}`}
                      r="6"
                    />
                  </g>
                </svg>
                {/* <Image src={} alt={link.label} width={24} height={24} /> */}
                <p className=" text-xl max-lg:hidden">{link.label}</p>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col w-full ">
          <SignedIn>
            <SignOutButton signOutCallback={() => router.push("/sign-in")}>
              <div className=" hover:bg-lightsky/50 flex items-center cursor-pointer gap-6 py-4 px-12">
                <svg
                  height="40px"
                  viewBox="0 0 12 12"
                  width="40px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Layer_3">
                    <circle cx="6" cy="6" fill="#D3D3D3" r="6" />
                  </g>
                </svg>
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
