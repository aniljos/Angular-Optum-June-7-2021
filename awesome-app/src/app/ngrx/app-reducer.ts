import { AppState, CartItem } from "./app-state";

//immutable
const initState = new AppState();
initState.cart = [];


export const appReducer = function(currentState=initState, action){

    if(action.type === "ADD_TO_CART"){

        debugger;
        const cartItem: CartItem = action.payload;
        const cart = [...currentState.cart];
        cart.push(cartItem);
        //return the new/updated state
        return {
            ...currentState,
            cart
        };
    }
    if(action.type === "REMOVE_FROM_CART"){

        debugger;
        const productId: number = action.data;
        const cart = [...currentState.cart];
        const index = cart.findIndex(item => item.product.id === productId);
        if(index !== -1){
            cart.splice(index, 1);
            return {
                ...currentState,
                cart
            };
        };

    }

    return currentState;
}