import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        angka: 0,
    },
    reducers: {
        increment: (state) => {
            return {
                ...state,
                angka: state.angka + 1,
            };
        },
        decrement: (state) => {
            return {
                ...state,
                angka: state.angka - 1,
            };
        },
        reset: (state) => {
            return {
                ...state,
                angka: 0,
            };
        },
    },
});

const { actions: counterAction, reducer: counterReducer } = counterSlice;

export { counterAction, counterReducer }
export default counterSlice