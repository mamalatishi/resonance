import {configureStore} from '@reduxjs/toolkit';
import selectedProductsSlice from '../features/selectedProducts'

const store = configureStore({
    reducer:{
        selectedProducts:selectedProductsSlice
    }
})

export default store;