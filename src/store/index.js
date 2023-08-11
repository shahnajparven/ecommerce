import { configureStore } from '@reduxjs/toolkit';
import demoReducer from './demoCreate/demoSlice';
import userReducer from './userSlice';


const store = configureStore({
    reducer: {
        demo: demoReducer,
        user: userReducer,
  
    },
});

export default store;
