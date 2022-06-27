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

// function googleLogin() {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             // const token = credential?.accessToken;
//             // The signed-in user info.
//             const dispatch = useDispatch()
//             dispatch(updateUser());
//             // ...
//         }).catch((error) => {
//             // Handle Errors here.
//             // const errorCode = error.code;
//             // const errorMessage = error.message;
//             // // The email of the user's account used.
//             // const email = error.customData.email;
//             // // The AuthCredential type that was used.
//             // const credential = GoogleAuthProvider.credentialFromError(error);
//             // ...
//         });
// }
// function logout() {
//     console.log('Log out');
//     signOut(auth);
//     const dispatch = useDispatch()
//     dispatch(updateUser());
// }

onAuthStateChanged(auth, (user) => {
    if (user) {
    } else {
        // User is signed out
        // ...
    }
});

export { GoogleLoginButton, LogoutButton, getCurrentUser };