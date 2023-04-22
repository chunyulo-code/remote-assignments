import React, { useState, useEffect } from "react";

function Counter({ id, num, setNum }) {
  return (
    <div className="counter">
      <button className="addOneBtn" onClick={setNum}>
        +1
      </button>
      <span className="numDisplay">{num}</span>
    </div>
  );
}

export default Counter;
