import { cormorant, jakarta } from "./layout";

export default function Home() {
  return (
    <>
      <h1 className={`${jakarta.className} text-7xl font-medium leading-none`}>Your Health Deserves the <span className={`${cormorant.className} italic`}>Right Specialist</span></h1>
    </>
  );
}
