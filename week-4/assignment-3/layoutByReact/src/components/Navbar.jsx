import React, { useState } from "react";

function Navbar() {
  const [showLsit, setShowList] = useState(false);

  function toggleListMobile() {
    setShowList((prev) => !prev);
  }

  return (
    <div className="navbar">
      <div className="logo">Website Title / Logo</div>
      <img
        className="hamburger-icon"
        src="../src/assets/menu-burger.svg"
        alt=""
        onClick={toggleListMobile}
      />
      <span
        className="closeBtn"
        style={{ display: showLsit ? "block" : "none" }}
        onClick={toggleListMobile}
      >
        X
      </span>
      <ul className={showLsit ? "lists-mobile" : "lists"}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  );
}

export default Navbar;
