import "./App.css";
import CTA from "./component/CTA";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Testimonial from "./component/Testimonial";

import ItemMaster from "./screens/itemMaster";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonial />
      <CTA />
      <Footer />
      {/* <ItemMaster /> */}
    </>
  );
}

export default App;
