import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Collections from "./components/Collections";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Collections />
      <About />
      <Contact />
      <Footer />
      <CartDrawer />
    </>
  );
}
