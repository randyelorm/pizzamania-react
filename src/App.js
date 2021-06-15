
import './App.css';
import Navbar from "./Components/navbar/Navbar"
import Carousel from "./Components/Carousel/Carousel"
import AboutUs from "./Components/aboutus/AboutUs"
import PizzaTypes from "./Components/pizzatypes/PizzaTypes"
import Footer from "./Components/footer/Footer"

function App() {
  return (
    <div>
       <Navbar/>
       <Carousel/>
       <AboutUs/>
       <PizzaTypes/>
       <Footer/>
       
    </div>
  );
}

export default App;
