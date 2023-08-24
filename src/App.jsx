import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App bg-base-200">
      <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color="209, 23, 138"
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'input[type="checkbox"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
