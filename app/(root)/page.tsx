import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

const Home = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/onboarding");
  }
  return (
    <section className="flex w-full h-screen  flex-1 flex-col px-6  gap-6 pt-28  md:pb-4 sm:pb-40 max-sm:pb-28 max-sm:pt-6">
      <div className=" bg-white px-8 py-4 rounded-2xl">
        <h1>New York City</h1>
      </div>
      <div className="flex flex-1 bg-white rounded-2xl">
        <Image
          src={"https://i.imgur.com/FJ4KMbI.png"}
          alt=""
          width={2000}
          height={500}
          className="object-cover rounded-2xl"
        ></Image>
      </div>
    </section>
  );
};

export default Home;
