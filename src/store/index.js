import { configureStore } from "@reduxjs/toolkit"
import shopReducer from "../features/shopSlice" 
//shopReducer es shopSlice renombrado para que coincidan los nomnbres

export default configureStore({
    reducer: {shopReducer}
})