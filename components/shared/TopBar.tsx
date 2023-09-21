import React from "react";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <nav className="fixed z-30 w-full  px-8 py-4">
      <div className=" bg-white flex w-full items-center justify-between px-8 py-6 rounded-2xl">
        <div>Logo</div>
      </div>
    </nav>
  );
};

export default TopBar;
