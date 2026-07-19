import { useState, useRef } from "react";
import Header from "../Header/Header";
import BackgroundImage from "../../assets/Netflix_Gpt_Background.jpg";
import { checkValidData } from "../../utils/Validate";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const email = useRef(null);
  const password = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null);
  const handletoogleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  const handleButtonClick = () => {
    // validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    // Sign In / Sign Up
  }
  return (
    <>
      <Header />
      <img
        className="w-full absolute"
        src={BackgroundImage}
        alt="backgroundImg"
      />
      <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col p-10 bg-black/75 absolute w-[30%] mx-auto my-36 left-0 right-0 rounded-lg">
        <h1 className="text-2xl pb-4 font-medium text-white">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp &&
        <input
          type="text"
          placeholder="Full Name"
          className="p-3 my-3 bg-white text-gray-700 rounded"
        />}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 my-3 bg-white text-gray-700 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 bg-white text-gray-700 rounded"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <button className="w-full px-8 py-3 mt-6 text-white bg-red-700 rounded-sm cursor-pointer" onClick={handleButtonClick}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <div className="flex gap-2">
          <p className="pt-6 text-gray-400">
            {isSignUp ? "Already a user?" : "New to Netflix?"}{" "}
          </p>
          <p
            className="pt-6 text-white cursor-pointer"
            onClick={handletoogleSignUp}
          >
            {isSignUp ? "Sign In" : "Sign up now"}
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
