import { createSlice } from "@reduxjs/toolkit";

const grammarSlice = createSlice({
  name: "grammarArrayList",
  initialState: {
    default: '',
    dataGrammar: '',
    dataCategory: ''
  },
  reducers: {
    setDataGrammar: (state, action) => {
      state.dataGrammar = action.payload;
    },
   
  },
});

export default grammarSlice.reducer;
export const { setDataGrammar } = grammarSlice.actions;
