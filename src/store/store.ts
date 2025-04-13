import { configureStore } from "@reduxjs/toolkit";
import toolsReducer from "./toolsSlice";
import canvasReducer from "./canvasSlice";

export const store = configureStore({
  reducer: {
    tools: toolsReducer,
    canvas: canvasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
