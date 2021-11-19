import { createSlice } from "@reduxjs/toolkit";

const phraseSlice = createSlice({
  name: "pharseArrayList",
  initialState: {
    default: '',
    dataPhrase: ''

  },
  reducers: {
    setDataPhrase: (state, action) => {
      state.dataPhrase = action.payload;
    },
  },
});

export default phraseSlice.reducer;
export const { setDataPhrase } = phraseSlice.actions;
