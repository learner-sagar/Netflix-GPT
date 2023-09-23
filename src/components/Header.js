import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
import logo from "../assets/logo.png";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute flex justify-between md:px-8 sm:px-0 py-2 z-20 bg-gradient-to-b from-black to-70 w-full">
      <img
        className="w-20 h-10 sm:w-22 lg:w-44 "
        src={logo}
        alt="Netflix Logo"
      />
      <div>
        {user && (
          <div className="md:flex sm:w-10 md:w-64 justify-center align-middle text-center">
            <img
              src={avatar}
              alt="avatar"
              className="w-16 m-auto hidden sm:block"
            />
            <h2 className="font-bold text-white">{user.displayName}</h2>
            <button
              className="px-2 py-2 rounded-md bg-gray-800 text-white font-bold m-auto"
              onClick={handleSignOut}
            >
              Sign&nbsp;Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
