import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import Results from "@/components/Results";
import ServicesHero from "@/components/ServicesHero";
import ServicesItem from "@/components/ServicesItem";
import Teams from "@/components/Teams";
import Testimonials from "@/components/Testimonials";
import Workflow from "@/components/Workflow";

export default function Home() {
  return (
    <main className="w-full flex flex-col relative overflow-hidden text-white">
      <Header />
      <Hero />
      <ServicesHero />
      <ServicesItem />
      <Workflow />
      <Results />
      <Testimonials />
      <Partner />
      <Teams />
      <Contact />
      <Footer />
    </main>
  );
}
