import Banner from "@/components/home/Banner";
import { cormorant, jakarta } from "./layout";
import Featured from "@/components/home/Featured";
import FaqSection from "@/components/home/FaqSection";
import EmergencyContact from "@/components/home/EmergencyContact";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Featured />
      <FaqSection />
      <EmergencyContact />
      <Footer />
    </>
  );
}
