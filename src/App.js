import React, { useState } from "react";

import "./App.css";

import Form from "./components/Form";

export default () => {
  const [dataItems, setDataItems] = useState([]);

  const toggleComplete = i =>
    setDataItems(
      dataItems.map(
        (dataItems, k) =>
          k === i
            ? {
                ...dataItems,
                complete: !dataItems.complete
              }
            : dataItems
      )
    );

  return (
    <div className="App">
      <Form
        onSubmit={text =>
          setDataItems([
            {
              text,
              complete: false
            },
            ...dataItems
          ])
        }
      />
      <div>
        {dataItems.map(({ text, complete }, i) => (
          // keys should have unique ID testing only
          <div
            key={text}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => setDataItems([])}>reset</button>
    </div>
  );
};
