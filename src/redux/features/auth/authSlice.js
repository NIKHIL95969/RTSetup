import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loggedIn: false,
        user: null,
    },

    reducers: {
        login(state, action) {
            state.loggedIn = "ture";
            state.user = action.payload ? action.payload: "Demo user";
        },

        logout(state) {
            state.loggedIn  = false;
            state.user = null;
        }
    },

})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;