import React, {useState} from "react";

const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

const SendMessage = () => {
  const [input, setInput] = useState('')

  return (
    <div className={style.form}>
      <input value={input} onChange={} className={style.input} type="text" placeholder="Message" />
      <button className={style.button} type="submit">
        Send
      </button>
    </div>
  );
};

export default SendMessage;
