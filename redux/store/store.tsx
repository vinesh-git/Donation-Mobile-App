import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/User";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from "redux-persist";
import categoriesReducer  from "../reducers/Categories";
import donationReducer from "../reducers/Donation";

const combinedReducers = combineReducers({
    user : userReducer,
    categories : categoriesReducer ,
    donations : donationReducer,
})

const configure = {
    key : 'root',
    storage : AsyncStorage,
    version : 1,
    whitelist : ['user','categories','donations'],
}
const persistedReducer = persistReducer(configure,combinedReducers);

const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false,
    })
})

export default store;

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof combinedReducers>;
export type AppDispatch = typeof store.dispatch;

