import React, { useState } from "react";

function Banner() {
  const [text, setText] = useState("Welcome Message");
  function handleClick() {
    setText("Have a Good Time!");
  }
  return (
    <div class="banner" onClick={handleClick}>
      {text}
    </div>
  );
}

export default Banner;
