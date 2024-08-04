import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

type InitialState = {
    value: number
};
const initialState: InitialState = {
    value: 0,
}

const counter1Slice = createSlice({
    name: "counter1Slice",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});
export const store = configureStore({
    reducer: {
        counter1SliceState: counter1Slice.reducer
    }
})

export const {
    increment,
    incrementByAmount,
    decrement
} = counter1Slice.actions
type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
type AppSelector = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<AppSelector>()