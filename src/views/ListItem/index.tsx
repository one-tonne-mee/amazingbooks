import React, { useState } from "react";
import "./ListItem.css";
interface ListItemProps {
  displayValue: string;
  setDisplayValue: (s: string) => void;
  deleteSelf: () => void;
}

export default function ListItem(props: ListItemProps) {
  const { displayValue, setDisplayValue, deleteSelf } = props;
  const [editing, setEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(displayValue);
  return (
    <li>
      {editing ? (
        <input
          className="entryfield one-rem"
          autoFocus
          defaultValue={displayValue}
          onBlur={(e) => {
            setEditing(false);
            setDisplayValue(currentValue);
          }}
          onChange={(e) => setCurrentValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (currentValue) {
                setEditing(false);
                setDisplayValue(currentValue);
              } else {
                deleteSelf();
              }
            }
          }}
        />
      ) : (
        <>
          <span className="wordlist-item" onClick={() => setEditing(true)}>
            {displayValue}
          </span>{" "}
          <button className="x-button" onClick={deleteSelf}>
            X
          </button>
        </>
      )}
    </li>
  );
}
