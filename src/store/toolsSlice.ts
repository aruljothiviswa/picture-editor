import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToolsState {
  selectedTool: string;
  selectedColor: number;
  selectedShape: number;
}

const initialState: ToolsState = {
  selectedTool: '',
  selectedColor: 0,
  selectedShape: 0,
};

const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    setTool: (state, action: PayloadAction<string>) => {
      state.selectedTool = action.payload;
    },
    setColor: (state, action: PayloadAction<number>) => {
      state.selectedColor = action.payload;
    },
    setShape: (state, action: PayloadAction<number>) => {
      state.selectedShape = action.payload;
    },
  },
});

export const { setTool, setColor, setShape } = toolsSlice.actions;
export default toolsSlice.reducer;
