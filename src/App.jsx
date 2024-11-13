import About from "./components/About";
import FoodSlider from "./components/FoodSlider";
import FormTable from "./components/FormTable";
import Hero from "./components/Hero";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <FoodSlider />
      <FormTable />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
