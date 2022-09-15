import React from "react";

const style= {
  message: `flex items-center shadow-xl m-4 py-2 `
}

const Message = () => {
  return (
    <div className={style.message}>
      <p className={style.name}>San</p>
      <p>Im learning React!</p>
    </div>
  );
};

export default Message;
