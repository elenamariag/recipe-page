import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashBoard/DashBoard";
import Product from "./pages/product/Product";
import AddRecipe from "./pages/addRecipe/AddRecipe";
import MyRecipe from "./pages/myRecipe/MyRecipe";

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/product" element={<Product />} />
            <Route exact path="/addrecipe" element={<AddRecipe/>} />
            <Route exact path="/myrecipe" element={<MyRecipe/>} />

          </Routes>
        </Router>
      </div>
  )



}

export default App;
