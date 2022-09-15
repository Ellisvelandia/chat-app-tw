import React from 'react'

const style = {
  form:`h-14 w-full max-w-[728px] flex text-xl absolute botton-0`,
}

const SendMessage = () => {
  return (
    <div className={style.form}>
     <input className={style.input} type="text" placeholder />
    </div>
  )
}

export default SendMessage