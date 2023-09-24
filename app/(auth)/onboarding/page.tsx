import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

type Props = {};

const OnBoardPage = async (props: Props) => {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <section className="bg-midnight mt-9 rounded-lg p-10">
        <h1 className=" text-center text-2xl font-bold text-white">
          Complete your profile
        </h1>
      </section>
    </main>
  );
};

export default OnBoardPage;
