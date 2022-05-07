import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  addWord,
  ejectWord,
  advanceWord,
  setRunTime,
  selectRunTime,
  selectWordList,
  selectWordIndex,
  increaseWordIndexThunk,
  selectTimeLeft,
} from "./wordlistSlice";
import styles from "./Wordlist.module.css";

export default function Wordlist() {
  const words = useAppSelector(selectWordList);
  const runTime = useAppSelector(selectRunTime);
  const wordIndex = useAppSelector(selectWordIndex);
  const timeLeft = useAppSelector(selectTimeLeft);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.main}>
      {page === 0 && (
        <>
          <div className={styles.wordPane}>
            {words.map((word, idx) => (
              <div key={`${word}${idx}`}>
                {" "}
                {word}{" "}
                <button onClick={() => dispatch(ejectWord(idx))}>x</button>{" "}
              </div>
            ))}
          </div>
          <div className={styles.input}>
            <input
              className={styles.field}
              placeholder="Add a new word"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  dispatch(addWord(inputValue));
                  setInputValue("");
                }
              }}
            />
            <button
              onClick={() => {
                dispatch(addWord(inputValue));
                setInputValue("");
              }}
            >
              Add Word
            </button>

            <input
              className={styles.field}
              placeholder="Timer"
              value={runTime}
              type="number"
              min={2}
              onChange={(e) => {
                const { value } = e.target;
                const valueToSet = parseInt(value);
                dispatch(setRunTime(valueToSet));
              }}
            />
            <button
              disabled={!words.length}
              onClick={() => {
                setPage(1);
                setInputValue("");
              }}
            >
              Let's go
            </button>
          </div>
        </>
      )}
      {page === 1 && (
        <div className={styles.playList}>
          <button className={styles.input} onClick={() => setPage(0)}>
            Go Back
          </button>
          <div>
            {wordIndex === -1 ? (
              <button
                className={styles.input + " " + styles.mainButton}
                onClick={() => {
                  dispatch(increaseWordIndexThunk());
                }}
              >
                Play!
              </button>
            ) : (
              <>
                <button
                  className={`${styles.hitButton} time-${timeLeft}`}
                  onClick={() => dispatch(advanceWord())}
                >
                  {!!words[wordIndex] ? words[wordIndex] : null}
                </button>
                <div> {timeLeft} </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
