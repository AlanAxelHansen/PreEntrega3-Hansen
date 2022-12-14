import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import CartContextProvider from "../components/CartContext"
import Cart from "../components/Cart";

const Home = () => {
    return (
        <BrowserRouter>
        <CartContextProvider>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </CartContextProvider>
        </BrowserRouter>
        
    );
}

export default Home;