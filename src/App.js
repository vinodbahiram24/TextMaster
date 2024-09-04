import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#36393F";
      document.body.style.color = "white";
      showAlert("DarkMode has been enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("LightMode has been enabled!", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextMaster"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} showAlert={showAlert} />} />
         
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
          
        </Routes>     
        {/* <About/> */}
        </div>
        </Router>
    </>
  );
}

export default App;
