import "./App.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Naves } from "./navs.tsx";
import {
  Footer,
  Navbar,
  Topbar,
  CursorGlow,
  Goupyadown,
} from "./components/index.js";
const App = () => {
  return (
    <BrowserRouter>
      <CursorGlow />
      <div className="font-sans z-10 relative">
        {/* <Topbar /> */}
        <Navbar />
        <Naves />
        <Footer />
      </div>
      <Goupyadown />
    </BrowserRouter>
  );
};

export default App;
