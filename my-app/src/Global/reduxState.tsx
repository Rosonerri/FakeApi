import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    toggle: false,
    user: "" || null,
    product: [],
    cart: []
};

const reduxState = createSlice({
    name: "reduxState",
    initialState,
    reducers: {
    changeToggle: (state, {payload}) => {
        state.toggle = payload
    },

    loginUser: (state, {payload}) =>{
        state.user = payload;
    }, 

    logOut: (state) =>{
        state.user = null;
    },
    
        addProduct: (state, {payload}) => {
        state.product = payload
        }
    
    }
});

export const {changeToggle, loginUser, logOut, addProduct } = reduxState.actions

export default reduxState.reducer