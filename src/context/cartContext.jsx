import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState);

// useReducer is a react hook 
// useReducer works is complex type 
// useefftct, usestate, useref, 
// cartReducer returns a condition 


export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);


    const addToCart = (product) => {
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        }) 
    }

    const removeFromCart = (product) => {
        const updatedList = state.cartList.filter(item=>item.id !== product.id)
        const updatedTotal = state.total - product.price;

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        }) 
    }

    const clearFromCart = () => {
        const updatedList = []
        const updatedTotal = 0

        dispatch({
            type: "CLEAR_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        }) 
    }



    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearFromCart
    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}


export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}
