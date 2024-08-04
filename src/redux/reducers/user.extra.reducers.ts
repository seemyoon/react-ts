import {createAsyncThunk} from "@reduxjs/toolkit";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";

const loadUsers = createAsyncThunk(
    "userSlice/loadUser",
    async (_, thunkAPI) => {
        try {
            const response = await userService.getAll()
            return  thunkAPI.fulfillWithValue(response)
        } catch (e) {
            const axiosError = e as AxiosError;
            return thunkAPI.rejectWithValue(axiosError)
        }
    }
)

export default loadUsers