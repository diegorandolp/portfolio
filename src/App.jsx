import Header from './components/Header'
import './App.css'
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Ability from "./components/Ability.jsx";
import Project from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";

// Plomo: 262626
function App() {

  return (
    <div id="all">
      <Header/>
      <About/>
      <Main/>
      <Footer/>
      <button className="button2">Product design</button>
    </div>
  );
}

export default App
