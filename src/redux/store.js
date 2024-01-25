import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themeSlice';
import authReducer from './features/auth/authSlice'

export default configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
    },
});