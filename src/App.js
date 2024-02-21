import About from "./compnants/About";
import Home from "./compnants/Home";
import Navbar from "./compnants/Navbar";
import Skills from "./compnants/Skills";
import Work from "./compnants/Work";
import Contact1 from "./compnants/Contact1";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact1/>
    </div>
  );
}

export default App;
