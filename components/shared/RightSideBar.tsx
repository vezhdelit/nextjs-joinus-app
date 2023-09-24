type Props = {};

const RightSideBar = async (props: Props) => {
  return (
    <section className=" flex h-screen w-fit flex-row pb-4 pr-6 pt-32 max-xl:hidden">
      <div className="flex flex-col justify-between gap-12 overflow-auto rounded-2xl bg-white px-12 py-16 ">
        <div className="flex flex-1 flex-col justify-start">
          <h3 className="text-2xl font-bold text-black">Nearby Events</h3>
          <div className="mt-7 flex w-[400px] flex-col gap-9"></div>
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
