import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addWord, ejectWord, selectWordList } from "./wordlistSlice";
import styles from "./Wordlist.module.css";

export default function Wordlist() {
  const words = useAppSelector(selectWordList);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div>
      {words.map((word, idx) => (
        <div>
          {" "}
          {word} <button onClick={() => dispatch(ejectWord(idx))}>x</button>{" "}
        </div>
      ))}
      <input
        placeholder="Add a new word"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addWord(inputValue));
          setInputValue("");
        }}
      >
        Add Word
      </button>
    </div>
  );
}
