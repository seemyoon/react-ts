import {createSlice} from "@reduxjs/toolkit";
import {PostSliceType} from "../../models/PostModel/PostSliceType";
import loadPosts from "../reducers/post.extra.reducers";

const initialStatePost: PostSliceType={
    posts: []
}
export const postSlice = createSlice({
    name:"postSlice",
    initialState: initialStatePost,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected, (state, action) => {
            //     if error
            })
    }
})
export const postsActions = {
    ...postSlice.actions,
    loadPosts
}