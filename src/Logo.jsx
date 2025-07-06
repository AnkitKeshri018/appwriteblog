import React from "react";
import logoapp from "./logoapp.jpg"

function Logo({ width = "100px" }) {
  return (
    <div>
      <img src={logoapp} alt="logo" width={50}  className="rounded-4xl"/>
    </div>
  );
}

export default Logo;

