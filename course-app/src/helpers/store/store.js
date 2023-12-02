import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./server";
import appSlice from "./slice";

const store = configureStore({
  reducer: {
    app: appSlice,
    [Api.reducerPath]: Api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

export default store;