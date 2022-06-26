import React, { useState, useEffect } from "react";
import "./App.css";
import ListItem from "./ListItem";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(0);
  const [wordList, setWordList] = useState<string[]>([
    // "lorem",
    // // "ipsum",
    // // "dolor",
    // "avec",
  ]);
  const [cycleTime, setCycleTime] = useState<number | null>(null);
  const [wordIndex, setWordIndex] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [timeOutId, setTimeoutId] = useState();

  const resetAction = () => {
    setTimeLeft(null);
    setWordIndex(null);
    setCycleTime(null);
    clearTimeout(timeOutId);
    setTimeoutId(undefined);
  };
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
          resetAction();
        }
      } else {
        WaitSeconds(1, setTimeoutId).then(() => {
          console.log("still running");
          setTimeLeft(timeLeft - 1);
        });
      }
    }
  }, [timeLeft, cycleTime]);
  return (
    <div className="App forty centered-col">
      {page === 0 && (
        <>
          {wordList.length ? (
            <ul className="wordlist">
              {wordList.map((w, i) => (
                <ListItem
                  key={w}
                  displayValue={w}
                  setDisplayValue={(newValue) =>
                    setWordList([
                      ...wordList.slice(0, i),
                      newValue,
                      ...wordList.slice(i + 1, wordList.length),
                    ])
                  }
                  deleteSelf={() =>
                    setWordList([
                      ...wordList.slice(0, i),
                      ...wordList.slice(i + 1, wordList.length),
                    ])
                  }
                />
              ))}
            </ul>
          ) : null}
          <div className="input">
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
              className="cta-btn"
              onClick={() => {
                setWordList([...wordList, inputValue]);
                setInputValue("");
              }}
              disabled={!inputValue}
            >
              Add
            </button>
          </div>
          <div className="cta">
            <button
              className="cta-btn"
              disabled={wordList.length === 0}
              onClick={() => setWordList([])}
            >
              Clear all
            </button>
            <button
              className="cta-btn"
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
            <button
              className={`jitterbug jitterbug-${timeLeft}`}
              onClick={() => {
                if (wordIndex === wordList.length - 1) {
                  // end, so reset
                  resetAction();
                } else {
                  clearTimeout(timeOutId);
                  setWordIndex(wordIndex + 1);
                  setTimeLeft(cycleTime);
                }
              }}
            >
              {wordList[wordIndex as number]} {timeLeft}
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default App;

async function WaitSeconds(t: number, setTimeoutId: (a: any) => void) {
  await new Promise((r) => setTimeoutId(setTimeout(r, t * 1000)));
}
