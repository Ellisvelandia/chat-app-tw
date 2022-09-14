import React from "react";
import GoogleButton from "react-google-button";

import {auth} from "..firebase"
import { GoogleAuthProvider, Si } from "firebase/auth";

const style = {
  wrapper: `flex justify-center`,
};

const SignIn = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton />
    </div>
  );
};

export default SignIn;
