type Props = {};

const RightSideBar = async (props: Props) => {
  return (
    <section className=" flex flex-row h-screen w-fit pt-28 pb-4 pr-6 max-xl:hidden">
      <div className="flex flex-col justify-between gap-12 overflow-auto bg-white rounded-2xl px-12 py-16 ">
        <div className="flex flex-1 flex-col justify-start">
          <h3 className="text-black font-bold text-2xl">Nearby Events</h3>
          <div className="mt-7 flex w-[400px] flex-col gap-9"></div>
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
