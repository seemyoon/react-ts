import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {postService} from "../../services/api.service";

const loadPosts = createAsyncThunk(
    "postSlice/loadPosts",
    async (_, thunkAPI) => {
        try {
            const response = await postService.getAll()
            return thunkAPI.fulfillWithValue(response)
        } catch (e) {
            const axiosError = e as AxiosError
            return thunkAPI.rejectWithValue(axiosError)
        }
    }
)
export default loadPosts;