import { About, Chances, Footer, Navbar } from "@/components";
import { CarCom } from "@/components/CarCom";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <CarCom />
      <Chances />
      <Footer />
    </div>
  );
}
