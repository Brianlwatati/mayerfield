import Contact from "./components/sections/Contact";
import Menu from "./components/sections/menusection/Menu";
import Reviews from "./components/sections/Reviews";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
