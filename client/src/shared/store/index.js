import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import phraseSlice from "./slice/phrase";
import grammarSlice from "./slice/grammar";


const reducer = combineReducers({
  phraseSlice: phraseSlice,
  grammarSlice: grammarSlice
});

const store = configureStore({
  reducer,
  phraseSlice: phraseSlice,
  grammarSlice: grammarSlice
});
export default store;