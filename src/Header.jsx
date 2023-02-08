import React from "react";
import "./Header.css";

const Header = ({ username }) => {
  const date = new Date();
  const hours = date.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours >= 12 && hours < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <header className="header">
      <h1 className="header-user">Hi {username}.</h1>
      <h2 className="grettings">{greeting}</h2>
    </header>
  );
};

export default Header;
