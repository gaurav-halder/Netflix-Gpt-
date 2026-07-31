import { useState, useRef } from "react";
import Header from "../Header/Header";
import BackgroundImage from "../../assets/Netflix_Gpt_Background.jpg";
import { checkValidData } from "../../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const toggleSignInForm = () => {
    setIsSignUp(!isSignUp);
  };
  const handleButtonClick = () => {
    // validate form data
    const emailVal = email.current?.value || "";
    const passwordVal = password.current?.value || "";
    const nameVal = name.current?.value || "";
    const message = checkValidData(emailVal, passwordVal);
    setErrorMessage(message);

    // Sign In / Sign Up
    if (isSignUp) {
      //sign up logic
      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // Update user's name in Firebase
          updateProfile(user, {
            displayName: nameVal,
          })
            .then(() => {
              const { uid, email, displayName} = user;
              dispatch(addUser({ uid, email, displayName }))
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <img
        className="w-full absolute"
        src={BackgroundImage}
        alt="backgroundImg"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col p-10 bg-black/75 absolute w-[30%] mx-auto my-36 left-0 right-0 rounded-lg"
      >
        <h1 className="text-2xl pb-4 font-medium text-white">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 bg-white text-gray-700 rounded"
          />
        )}
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

        <button
          className="w-full px-8 py-3 mt-6 text-white bg-red-700 rounded-sm cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <div className="flex gap-2">
          <p className="pt-6 text-gray-400">
            {isSignUp ? "Already a user?" : "New to Netflix?"}{" "}
          </p>
          <p
            className="pt-6 text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignUp ? "Sign In" : "Sign up now"}
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
