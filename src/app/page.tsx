import About from "@/components/page/about";
import Contact from "@/components/page/Contact";
import { Footer } from "@/components/page/Footer";
import Hero from "@/components/page/Hero";
import Navbar from "@/components/page/Navbar";
import Rooms from "@/components/page/Rooms";
import ServicesComponent from "@/components/page/Services";

export default function Home() {
  return (
    <div className="dark:bg-background">
      <Navbar />
      <Hero />
      <Rooms />
      <About />
      <ServicesComponent />
      <Contact />
      <Footer />
    </div>
  );
}
