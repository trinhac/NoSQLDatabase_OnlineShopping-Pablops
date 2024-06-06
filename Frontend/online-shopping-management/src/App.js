// import './App.css'
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SellerProfile from "./components/SellerProfile/SellerProfile";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile/:sellerUsername" element={<SellerProfile />} /> {/* Add route for SellerProfile */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;