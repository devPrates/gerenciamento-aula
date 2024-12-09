import About from "@/components/page/about";
import Contact from "@/components/page/Contact";
import { Footer } from "@/components/page/Footer";
import Hero from "@/components/page/Hero";
import Navbar from "@/components/page/Navbar";
import ServicesComponent from "@/components/page/Services";
import Times from "@/components/page/Times";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Times />
      <About />
      <ServicesComponent />
      <Contact />
      <Footer />
    </div>
  );
}
