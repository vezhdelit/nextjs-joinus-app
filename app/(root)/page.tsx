import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

const Home = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/onboarding");
  }
  return (
    <section className="flex h-screen w-full  flex-1 flex-col gap-6  px-6 pt-32 max-sm:pb-28 max-sm:pt-6 sm:pb-40 md:pb-4">
      <div className=" rounded-2xl bg-white px-8 py-4">
        <h1>New York City</h1>
      </div>
      <div className=" flex  flex-1 overflow-auto rounded-2xl bg-white">
        <Image
          src={"https://i.imgur.com/FJ4KMbI.png"}
          alt=""
          width={2000}
          height={500}
          className="rounded-2xl object-cover"
        ></Image>
      </div>
    </section>
  );
};

export default Home;
