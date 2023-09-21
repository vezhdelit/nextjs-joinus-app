type Props = {};

const RightSideBar = async (props: Props) => {
  return (
    <section className="flex flex-row h-screen w-fit pt-28 pb-4 pr-8">
      <div className="flex flex-col justify-between gap-12 overflow-auto bg-white rounded-2xl px-10 pb-6 pt-28 max-xl:hidden">
        <div className="flex flex-1 flex-col justify-start">
          <h3 className="text-black">Suggested Communities</h3>
          <div className="mt-7 flex w-[350px] flex-col gap-9"></div>
        </div>
        <div className="flex flex-1 flex-col justify-start">
          <h3 className="text-black">Suggested Users</h3>
          <div className="mt-7 flex w-[350px] flex-col gap-10"></div>
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
