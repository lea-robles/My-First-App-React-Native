import { configureStore } from "@reduxjs/toolkit"
import shopReducer from "../features/shopSlice" 
//shopReducer es shopSlice lo mismo con cartReducer y authReducer renombrado para que coincidan los nombres
import { setupListeners } from "@reduxjs/toolkit/query"
import { shopApi } from "../services/shopService"
import cartReducer from "../features/cartSlice "
import { authApi } from "../services/authService"
import authReducer from "../features/authSlice"

const store = configureStore({
    reducer: {
        shopReducer,
        cartReducer,
        authReducer,
        [shopApi.reducerPath] : shopApi.reducer,
        [authApi.reducerPath] : authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware)
})

setupListeners(store.dispatch)

export default store