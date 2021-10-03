import { createSlice } from '@reduxjs/toolkit';

const uiSliceState = { cartIsVisible: false}; 

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiSliceState,
    reducers: {
        toggle(state){  
            state.cartIsVisible = !state.cartIsVisible
        }
    }
});


export const uiActions = uiSlice.actions;

export default uiSlice;