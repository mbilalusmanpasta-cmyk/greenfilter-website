import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import ScrollToTop from "./ScrollToTop";
import { useEffect } from "react";
import { initExitTracking } from "./utils/analytics";

function App() {
  useEffect(() => {
    // Initialize exit intent and engagement tracking
    initExitTracking();
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes />
      </Router>
    </>
  );
}

export default App;
