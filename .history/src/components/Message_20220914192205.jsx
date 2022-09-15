import React from "react";

const style= {
  message: ``
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
