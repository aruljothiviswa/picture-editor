import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Layer {
  draw: (ctx: CanvasRenderingContext2D) => void;
}

interface CanvasState {
  layers: Layer[];
}

const initialState: CanvasState = {
  layers: [],
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    addLayer: (state, action: PayloadAction<Layer>) => {
      state.layers.push(action.payload);
    },
  },
});

export const { addLayer } = canvasSlice.actions;
export default canvasSlice.reducer;
