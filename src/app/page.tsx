import About from "@/components/page/about";
import Contact from "@/components/page/Contact";
import { Footer } from "@/components/page/Footer";
import Hero from "@/components/page/Hero";
import Navbar from "@/components/page/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
