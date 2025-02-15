import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/tabBar/Navbar";
import Footer from "./components/footer/Footer";
import SearchBar from "./components/tabBar/SearchBar";
import PrivateRoute from "./components/routes/PrivateRoute"; // Import PrivateRoute
import User from "./pages/User";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <SearchBar />
      <Routes>
        {/* Các trang không yêu cầu đăng nhập */}
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/user" element={<User />} />
        <Route path="/wishlist" element={<Wishlist/>} />

        {/* Các trang yêu cầu đăng nhập */}
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/place-order" element={<PrivateRoute><PlaceOrder /></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
