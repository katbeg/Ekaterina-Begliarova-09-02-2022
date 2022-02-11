import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeatherAction = createAsyncThunk(
    'weather/fetch',
    async (payload, {rejectWithValue, getState, dispatch}) => {
        try{
            const {data} = await axios.get(``);
            return data;
        } catch (error){
            if(!error?.response){
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        });
        builder.addCase(fetchWeatherAction.rejected, (state, action) => {
            state.weather = undefined;
            state.loading = false;
            state.error = action?.payload;
        });

    },
})

export default weatherSlice.reducer;