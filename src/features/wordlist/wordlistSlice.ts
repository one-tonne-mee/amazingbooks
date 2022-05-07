import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

export interface WordlistState {
  words: string[];
  runTime: number;
  timeLeft: number;
  wordIndex: number;
  abortController: null | AbortController;
}

const initialState: WordlistState = {
  words: [],
  runTime: 5,
  timeLeft: 5,
  wordIndex: -1,
  abortController: null,
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
    setRunTime: (state, action: PayloadAction<number>) => {
      state.runTime = action.payload;
      state.timeLeft = action.payload;
    },
    incrementWordIndex: (state) => {
      if (state.wordIndex < state.words.length) {
        state.wordIndex += 1;
      } else {
        state.wordIndex = -1;
      }
    },
    advanceWord: (state) => {
      state.timeLeft = state.runTime;
      state.wordIndex += 1;
    },
    resetTimersAndIndex: (state) => {
      state.timeLeft = state.runTime;
      state.wordIndex = -1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(decrementTimerAsync.fulfilled, (state) => {
      if (state.timeLeft > 0) {
        console.log(`state.timeLeft ${state.timeLeft}`);
        state.timeLeft -= 1;
      } else {
        console.log(
          `state.timeLeft ${state.timeLeft} state.runTime ${state.runTime}`
        );
        state.timeLeft = state.runTime;
      }
    });
  },
});

export const {
  addWord,
  ejectWord,
  setRunTime,
  incrementWordIndex,
  advanceWord,
  resetTimersAndIndex,
} = wordSlice.actions;

export const selectWordList = (state: RootState) => state.wordList.words;
export const selectRunTime = (state: RootState) => state.wordList.runTime;
export const selectWordIndex = (state: RootState) => state.wordList.wordIndex;
export const selectTimeLeft = (state: RootState) => state.wordList.timeLeft;

export const decrementTimerAsync = createAsyncThunk(
  "wordList/countDownTime",
  async (_, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const response = await new Promise((resolve) => {
      setTimeout(() => resolve(null), 1000);
    });
    const state = getState() as RootState;
    console.log(`State ${JSON.stringify(state)}`);
    if (state.wordList.timeLeft > 0) {
      dispatch(decrementTimerAsync()); // call itself recursively
      // dispatch(decrementTimer());
    } else {
      dispatch(increaseWordIndexThunk());
    }
  }
);

export const increaseWordIndexThunk = createAsyncThunk(
  "wordList/increaseWordIndex",
  async (_, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const state = getState() as RootState;
    const { wordIndex, words } = state.wordList;
    if (wordIndex === words.length - 1) {
      // stop all activity and reset
      dispatch(resetTimersAndIndex());
    } else {
      // fire off the increase, and set the count down to go
      dispatch(incrementWordIndex());
      dispatch(decrementTimerAsync());
    }
  }
);

export default wordSlice.reducer;
