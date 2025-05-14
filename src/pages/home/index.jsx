import Contact from "../../component/Contact";
import Footer from "../../component/Footer";
import Hero from "../../component/Hero";
import Services from "../../component/Services";

const Home = () => {
  return (
    <main className="bg-background text-text">
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
