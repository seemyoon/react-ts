import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {postSlice} from "./slices/postSlice";

export const store = configureStore({
    reducer: {
        userSliceState: userSlice.reducer,
        postSliceState: postSlice.reducer,
    }
})
type AppSelector = typeof store.getState
export const useAppSelector = useSelector.withTypes<ReturnType<AppSelector>>()
type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()