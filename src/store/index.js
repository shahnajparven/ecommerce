import { configureStore } from '@reduxjs/toolkit';
import demoReducer from './demoCreate/demoSlice';
import authReducer from './authSlice';
import userReducer from './user/userSlice';


const store = configureStore({
    reducer: {
        demo: demoReducer,
        auth: authReducer,
        user: userReducer,
  
    },
});

export default store;
