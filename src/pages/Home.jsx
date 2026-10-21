import Hero from "../components/Hero";
import Collections from "../components/Collections";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <Services />
      <About />
      <Contact />
    </>
  );
}
