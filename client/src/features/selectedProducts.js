import {createSlice } from '@reduxjs/toolkit';

const selectedProductsSlice = createSlice({
    name:'selectedProducts',
    initialState:{
        productList:[],
        checkoutPrice:0,
    },
    reducers: {
        addProduct:(state,{payload}) => {
            state.productList.push(payload)
            state.checkoutPrice += payload.price
        },
        deleteProduct: (state, { payload }) => {
            const foundIndex = state.productList.findIndex((p) => {
                return p.product.id === payload.id
            })
            state.productList.splice(foundIndex,1)
            state.checkoutPrice = state.checkoutPrice - payload.price
        }
}});

export const {addProduct , deleteProduct} = selectedProductsSlice.actions;
export const getSelectedProducts = (state) => state.selectedProducts;
export default selectedProductsSlice.reducer;