import React from "react";
import AppPublicidad from "./components/AppPublicidad";
import CartWidget from "./components/CartWidget";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer greeting= {"No se encontraron productos!"} />
    <AppPublicidad/>
    <Footer/>
    </div>
 
  );
}

export default App;
