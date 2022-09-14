import React from "react";
import GoogleButton from "react-google-button";

import { auth } from "../firebase";
import { GoogleAuthProvider, signWidthRedirect } from "firebase/auth";

const style = {
  wrapper: `flex justify-center`,
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signWidthRedirect(auth, provider);
};

const SignIn = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={}/>
    </div>
  );
};

export default SignIn;
