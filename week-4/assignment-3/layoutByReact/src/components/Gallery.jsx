import React, { useState } from "react";

function Gallery() {
  const [boxCount, setBoxCount] = useState(4);
  const boxElems = [];

  for (let i = 0; i < boxCount; i++) {
    boxElems.push(<div class="box">Content Box {i + 1}</div>);
  }

  function addBox() {
    setBoxCount((prev) => prev + 4);
  }

  return (
    <div class="gallery">
      <h2 class="gallery-title">Section Title</h2>
      <div class="boxes">{boxElems}</div>
      <button class="action-button" onClick={addBox}>
        Call to Action
      </button>
    </div>
  );
}

export default Gallery;
