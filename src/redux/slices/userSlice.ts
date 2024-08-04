import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import {UserSliceType} from "../../models/UserModel/UserSliceType";
import loadUsers from "../reducers/user.extra.reducers";

const initialStateUser: UserSliceType = {
    users: [],
    isLoaded: false
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialStateUser,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                // logic if error
            })
            .addMatcher(isFulfilled(loadUsers), (state) => {
                state.isLoaded = true
            })

    }
})
export const userActions = {
    ...userSlice.actions,
    loadUsers
}
