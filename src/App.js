import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import ScrollToTop from "./ScrollToTop";
import { useEffect } from "react";
import { initExitTracking } from "./utils/analytics";
import { HelmetProvider } from "react-helmet-async";

function App() {
  useEffect(() => {
    // Initialize exit intent and engagement tracking
    initExitTracking();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
