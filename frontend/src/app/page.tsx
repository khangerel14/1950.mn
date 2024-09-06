import { About, Chances, Footer, Navbar, CarCom } from "@/components";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <About />
      <CarCom />
      <Chances />
      <Footer />
    </div>
  );
}
