import Banner from "@/components/home/Banner";
import { cormorant, jakarta } from "./layout";
import Featured from "@/components/home/Featured";
import FaqSection from "@/components/home/FaqSection";

export default function Home() {
  return (
    <>
      <Banner />
      <Featured />
      <FaqSection />
    </>
  );
}
