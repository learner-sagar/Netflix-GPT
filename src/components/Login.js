import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignIn] = useState(true);
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="h-screen w-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <form className=" flex flex-col gap-5 bg-opacity-80 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-14">
        <h1 className="font-bold text-4xl text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm || (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 bg-gray-900 text-white"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-2 bg-gray-900 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 bg-gray-900 text-white"
        />
        <button className="px-5 py-2 text-white bg-red-600">
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
