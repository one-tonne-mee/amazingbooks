import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(0);
  const [wordList, setWordList] = useState<string[]>([
    "lorem",
    // "ipsum",
    // "dolor",
    "avec",
  ]);
  const [cycleTime, setCycleTime] = useState<number | null>(null);
  const [wordIndex, setWordIndex] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (timeLeft !== null && cycleTime !== null) {
      if (timeLeft === 0) {
        if ((wordIndex as number) < wordList.length - 1) {
          // advance word
          setWordIndex((wordIndex as number) + 1);
          setTimeLeft(cycleTime);
        } else {
          console.log("Reset!");
          // reset
          setTimeLeft(null);
          setWordIndex(null);
          setCycleTime(null);
        }
      } else {
        WaitSeconds(1).then(() => {
          console.log("still running");
          setTimeLeft(timeLeft - 1);
        });
      }
    }
  }, [timeLeft, cycleTime]);
  return (
    <div className="App">
      {page === 0 && (
        <>
          {wordList.length ? (
            <div>
              {wordList.map((w) => (
                <div key={w}>{w}</div>
              ))}
            </div>
          ) : null}
          <div>
            <input
              value={inputValue}
              placeholder={"Add a word!"}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && inputValue) {
                  console.log("Setting ", inputValue);
                  setWordList([...wordList, inputValue]);
                  setInputValue("");
                }
              }}
            />
            <button
              onClick={() => {
                setWordList([...wordList, inputValue]);
                setInputValue("");
              }}
              disabled={!inputValue}
            >
              Add
            </button>
          </div>
          <div>
            <button onClick={() => setWordList([])}>Clear all</button>
            <button
              disabled={wordList.length === 0}
              onClick={() => {
                setPage(1);
              }}
            >
              Ready!
            </button>
          </div>
        </>
      )}

      {page === 1 && (
        <>
          {wordIndex === null ? (
            <>
              <button
                onClick={() => {
                  setPage(0);
                }}
              >
                Back
              </button>
              <button
                onClick={() => {
                  setWordIndex(0);
                  setCycleTime(5);
                  setTimeLeft(5);
                }}
              >
                Play!
              </button>
            </>
          ) : (
            <button>
              {wordList[wordIndex as number]} {timeLeft}
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default App;

async function WaitSeconds(t: number) {
  await new Promise((r) => setTimeout(r, t * 1000));
}
