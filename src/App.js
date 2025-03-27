import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Naves } from "./navs.tsx";
import { Footer, Navbar, Topbar } from "./components/index.js";
const App = () => {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Topbar />
        <Navbar />
        <Naves />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
