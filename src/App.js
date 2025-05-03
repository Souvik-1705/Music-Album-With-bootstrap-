import {Routes, Route} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import ProductDetail from './pages/ProductDetail';
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import { AuthContextProvider} from "./store/AuthContext";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <AuthContextProvider>
     <NavigationBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
     </AuthContextProvider>
  );
}

export default App;
