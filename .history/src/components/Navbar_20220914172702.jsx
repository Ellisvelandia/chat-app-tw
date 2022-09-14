import React from "react";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`
  heading: ``
}

const Navbar = () => {
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat Aoo</h1>
    </div>
  );
};

export default Navbar;
