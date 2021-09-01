import {
  configureStore,
  getDefaultMiddleware,
  combineReducers
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import darkThemeReducer from "./theme/theme-slice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const themePersistConfig = {
  key: "theme",
  storage,
  whitelist: ["darkTheme"],
};

const themeReducer = combineReducers({
  darkTheme: darkThemeReducer,
});

const themePersistedReducer = persistReducer(themePersistConfig, themeReducer);

const store = configureStore({
  reducer: {
    theme: themePersistedReducer,
  },
  middleware
});

const persistor = persistStore(store);

export { store, persistor };