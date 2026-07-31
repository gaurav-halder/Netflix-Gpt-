/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "../../assets/Netflix_Gpt_logo.svg";
import userIcon from "../../assets/user-account.png";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSignedIn = useSelector((store: any) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            navigate("/browse");

          } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
          }
        });
      }, []);

    return (
        <div className="w-full absolute z-10 p-8 bg-gradient-to-b from-black flex justify-between items-center">
            <img className="w-40" src={logo} alt="logo"/>
            {isSignedIn && <div className="flex items-center gap-4">
                <img className="w-10" src={userIcon} alt="userIcon"/>
                <p className="text-white">{isSignedIn.displayName}</p>
                <button className="text-white text-lg bg-black/75 px-4 py-2 rounded-md cursor-pointer" onClick={handleSignOut} >Sign Out</button>
            </div>}
        </div>
    )
}

export default Header;