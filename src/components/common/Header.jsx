import React, { Fragment, useState } from "react";
// //Menu&Burger
import Burger from "./Burger";
import Menu from "./Menu";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="burger">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
