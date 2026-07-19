import { useState } from "react";
import Header from "../Header/Header";
import BackgroundImage from "../../assets/Netflix_Gpt_Background.jpg";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const handletoogleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <>
      <Header />
      <img
        className="w-full absolute"
        src={BackgroundImage}
        alt="backgroundImg"
      />
      <form className="flex flex-col p-10 bg-black/75 absolute w-[30%] mx-auto my-36 left-0 right-0 rounded-lg">
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
          type="text"
          placeholder="Email"
          className="p-3 my-3 bg-white text-gray-700 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-3 bg-white text-gray-700 rounded"
        />
        <button className="w-full px-8 py-3 mt-6 text-white bg-red-700 rounded-sm cursor-pointer">
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
