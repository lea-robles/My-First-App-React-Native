import { configureStore } from "@reduxjs/toolkit"
import shopReducer from "../features/shopSlice" 
//shopReducer es shopSlice renombrado para que coincidan los nomnbres
import { setupListeners } from "@reduxjs/toolkit/query"
import { shopApi } from "../services/shopService"

const store = configureStore({
    reducer: {
        shopReducer,
        [shopApi.reducerPath] : shopApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch)

export default store