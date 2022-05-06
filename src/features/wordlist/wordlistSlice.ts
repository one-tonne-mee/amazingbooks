import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { RootState, AppThunk } from "../../app/store";

export interface WordlistState {
  words: string[];
}

const initialState: WordlistState = {
  words: [],
};

export const wordSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<string>) => {
      state.words.push(action.payload);
    },
    ejectWord: (state, action: PayloadAction<number>) => {
      state.words = [
        ...state.words.slice(0, action.payload),
        ...state.words.slice(action.payload + 1, state.words.length),
      ];
    },
  },
});

export const { addWord, ejectWord } = wordSlice.actions;

export const selectWordList = (state: RootState) => state.wordList.words;

export default wordSlice.reducer;
