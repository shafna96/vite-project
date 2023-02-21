import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Services from "./component/Services";

import ItemMaster from "./screens/itemMaster";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      {/* <ItemMaster /> */}
    </>
  );
}

export default App;
