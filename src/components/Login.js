import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import bgImage from "../assets/bg.jpg";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { checkValidateData } from "../utils/validate";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  const name = useRef();

  const handleButtonClick = (e) => {
    e.preventDefault();
    const validationMessage = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(validationMessage);
    if (validationMessage) return;

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="h-screen w-screen object-cover"
          src={bgImage}
          alt="Background"
        />
      </div>
      <form className="w-96 flex flex-col gap-6 bg-opacity-80 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-14">
        <h1 className="font-bold text-4xl text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm || (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-2 bg-gray-900 text-white"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          ref={email}
          className="p-2 bg-gray-900 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-2 bg-gray-900 text-white"
        />
        <p className="text-red-800 text-md font-bold">
          {errorMessage ? errorMessage : ""}
        </p>
        <button
          className="px-5 py-2 text-white bg-red-600"
          onClick={handleButtonClick}
          type="button"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white cursor-pointer"
          onClick={() => {
            setIsSignIn(!isSignInForm);
          }}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
