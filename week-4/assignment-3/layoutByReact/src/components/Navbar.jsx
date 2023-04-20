import React, { useState } from "react";
import burgerIcon from "../assets/menu-burger.svg";

function Navbar() {
  const [showLsit, setShowList] = useState(false);

  const listText = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const liElements = listText.map((text) => {
    return <li>{text}</li>;
  });

  function toggleListMobile() {
    setShowList((prev) => !prev);
  }

  return (
    <div className="navbar">
      <div className="logo">Website Title / Logo</div>
      <img
        className="hamburger-icon"
        src={burgerIcon}
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
      <ul className={showLsit ? "lists-mobile" : "lists"}>{liElements}</ul>
    </div>
  );
}

export default Navbar;
