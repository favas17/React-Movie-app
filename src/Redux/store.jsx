import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import {LoadState,SaveState} from "../Redux/localStorage"
// loading the persisted state from local Storage

const persistedStorage = LoadState();

// creating the store using redux toolkit

const store = configureStore({
    reducer: {
        user:userReducer,
    },
    preloadedState:persistedStorage
});

// subscribing to the store changes

store.subscribe(()=>{
// everytime the store updates save the current state of the userSlice to the localstorage;
    SaveState(
        store.getState()
    )
})

export default store