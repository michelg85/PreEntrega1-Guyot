import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "./components/itemdetailcontainer/ItemDetailContainer";
import NavBar from "./components/navbar/NavBar";
import AppPublicidad from "./components/apppublicidad/AppPublicidad";
import Error404 from "./components/error404/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import ThankYou from "./components/ThankYou/ThankYou";

function App() {
  return (
    <CartContextProvider>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/ThankYou/:id"} element={<ThankYou/>} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <AppPublicidad />
          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;