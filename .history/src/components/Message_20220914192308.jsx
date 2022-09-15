import React from "react";

const style= {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
}

const Message = () => {
  return (
    <div className={style.message}>
      <p className={style.name}>Ellis</p>
      <p>Im learning React!</p>
    </div>
  );
};

export default Message;
