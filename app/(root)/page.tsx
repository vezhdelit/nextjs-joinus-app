import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

const Home = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/onboarding");
  }
  return (
    <section className="flex w-full h-screen  flex-1 flex-col px-6 pb-4 gap-8 pt-28">
      <div className=" bg-white px-8 py-4 rounded-2xl">
        <h1>New York City</h1>
      </div>
      <div className="flex flex-1 bg-white rounded-2xl">
        <Image
          src={"https://i.imgur.com/FJ4KMbI.png"}
          alt=""
          width={2000}
          height={1000}
          className="object-cover rounded-2xl"
        ></Image>
      </div>
    </section>
  );
};

export default Home;
