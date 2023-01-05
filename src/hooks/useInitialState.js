import { useState } from "react"

const initialState = {
    cart: []
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = (id) => {        
        const copystate = [...state.cart]
        const index = copystate.findIndex(item => item.id === id)
        copystate.splice(index, 1)
        setState({
            ...state,
            cart: [...copystate]
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;