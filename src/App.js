import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Naves } from "./navs.tsx";
import { Footer, Navbar } from "./components/index.js";
const App = () => {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Navbar />
        <Naves />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
