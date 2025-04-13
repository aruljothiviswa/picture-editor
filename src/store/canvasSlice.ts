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
    removeLayer: (state, action: PayloadAction<number>) => {
      state.layers.splice(action.payload, 1);
    },
    undo: (state) => {
      state.layers.pop();
    },
    clearLayers: (state) => {
      state.layers = [];
    },
  },
});

export const { addLayer, removeLayer, undo, clearLayers } = canvasSlice.actions;
export default canvasSlice.reducer;
