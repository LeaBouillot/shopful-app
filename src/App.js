import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Hero from "./Components/Hero/Hero";
import Popular from "./Components/Popular/Popular";
import Offers from "./Components/Offers/Offers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Popular />
        <Offers />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
