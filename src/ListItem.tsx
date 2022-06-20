import React, { ElementType, useState } from "react";

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
          autoFocus
          defaultValue={displayValue}
          onBlur={(e) => {
            setEditing(false);
            setDisplayValue(currentValue);
          }}
          onChange={(e) => setCurrentValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && currentValue) {
              setEditing(false);
              setDisplayValue(currentValue);
            }
          }}
        />
      ) : (
        <>
          <span onClick={() => setEditing(true)}>{displayValue}</span>{" "}
          <button onClick={deleteSelf}>X</button>
        </>
      )}
    </li>
  );
}
