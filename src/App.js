import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import ScrollToTop from "./ScrollToTop";
function App() {
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
