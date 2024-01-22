import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        user: 'Leandro R',
        updatedAt: Date.now().toLocaleString(),
        items: [],
        total: 0
    },
    reducers: {
        addItem: (state, action) => {
            const isProductInCart = state.items.find(item => item.id === action.payload.id)
            if (!isProductInCart) {
                state.items.push(action.payload)
                const total = state.items.reduce(
                    (acc, current) => acc += current.price * current.quantity, 0
                )
                state.total = total
                state = {
                    ...state, total, updatedAt: Date.now().toLocaleString()
                }
            } else {
                const itemsUpdate = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity+= action.payload.quantity
                        return item
                    }
                    return item
                })
                const total = itemsUpdate.reduce(
                    (acc, current) => acc += current.price * current.quantity, 0
                )
                state.total = total
            }
        },
        removeItem: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0 && state.items[itemIndex].quantity > 1) {
                state.items[itemIndex].quantity -= 1;
                state.total -= action.payload.price;
            } else if (itemIndex >= 0) {
                state.items.splice(itemIndex, 1);
                state.total -= action.payload.price * action.payload.quantity;
            }
         },
        clearCart: (state, action) => {
            state.total = 0,
            state.items = []
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer