import {Routes, Route} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
     <NavigationBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
    </div>
  );
}

export default App;
