import { combineReducers, configureStore } from "@reduxjs/toolkit";

import profileReducer from "./profile/profile.reducer";
import reposReducer from "./repos/repos.reducer";
import authReducer from "./auth/auth.reducer";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["isLoggedIn", "token", "currentUser"],
};

// Creating the root reducer by combining the reducers
const rootReducer = combineReducers({
  profile: profileReducer,
  repos: reposReducer,
  auth: persistReducer(persistConfig, authReducer),
});

// Creating the store with the root reducer
export const store = configureStore({ reducer: rootReducer });
export const persistor = persistStore(store);
