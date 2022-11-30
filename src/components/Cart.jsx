import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {

    const {cartList} = useContext(CartContext)

    return (
        <>
            <h1>Tu Carrito</h1>
            {
                cartList.length === 0
                ? <span>Vacio</span>
                : cartList.map(item => <div>Nombre: {item.name} - Cantridad: {item.qty} - precio: {item.price}</div>)
            }
        </>
    );
};

export default Cart;