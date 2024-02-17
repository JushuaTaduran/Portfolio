import Contact from "../../component/Contact";
import Footer from "../../component/Footer";
import Gallery from "../../component/Gallery";
import Hero from "../../component/Hero";
import Services from "../../component/Services";
import Testimonials from "../../component/Testimonials";

const Home = () => {
  return (
    <main className="bg-[#fdfdfd] dark:bg-[#121212] dark:text-[#dbdbdb]">
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
