import { createSlice } from "@reduxjs/toolkit"

export const shopSlice = createSlice ({
    name: 'shop',
    initialState: {
        categorySelected: '',
        productIdSelected: 0,
        products: [],
        productsFilteredByCategory: []
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload
            state.productsFilteredByCategory = state.products.filter(item => item.category === state.categorySelected)
        },
        setProductIdSelected: (state, action) => {
            state.productIdSelected = action.payload
        }
    }
})

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer