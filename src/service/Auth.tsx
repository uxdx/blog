import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { updateUser, resetUser } from "./AuthStore";

import app from "./Firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function getCurrentUser() {
    return auth.currentUser;
}

function GoogleLoginButton() {
    const dispatch = useDispatch();
    return (
        <button onClick={() => {
            signInWithPopup(auth, provider)
                .then((result) => {
                    dispatch(updateUser());
                }).catch((error) => {
                });
        }}>
            Google Login
        </button>
    );
}

function LogoutButton() {
    const dispatch = useDispatch();
    return (
        <button onClick={() => {
            signOut(auth);
            dispatch(resetUser());
        }}>
            Log out
        </button>
    );
}


onAuthStateChanged(auth, (user) => {
    if (user) {
    } else {
        // User is signed out
        // ...
    }
});

export { GoogleLoginButton, LogoutButton, getCurrentUser };