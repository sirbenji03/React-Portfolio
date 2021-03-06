import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Particles
     id="tsparticles"
      params={{
        particles: {
          number: {
            value: 30,
            density:{
              enable: true,
              value_area: 900
            } 
          }
        }
      }}
    />
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Services/>
    <Experience/>
    <Portfolio/>
    <Contacts/>
    <Footer/>
   </>
  );
}

export default App;
