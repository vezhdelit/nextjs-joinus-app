import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Home = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/onboarding");
  }
  return (
    <>
      <h1 className="">JoinUs</h1>
      <section>Some more content</section>
    </>
  );
};

export default Home;
