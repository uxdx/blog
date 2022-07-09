import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useDispatch, useSelector, } from "react-redux";
import styled from "styled-components";
import { updateUser, resetUser, loginModalClose, AppDispatch, RootState } from "./store";
import app from "./Firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function getCurrentUser() {
    return auth.currentUser;
}

function GoogleLoginButton() {
    const dispatch: AppDispatch = useDispatch();
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
    const dispatch: AppDispatch = useDispatch()
    return (
        <button onClick={() => {
            signOut(auth);
            dispatch(resetUser());
        }}>
            Log out
        </button>
    );
}

const StyledModal = styled.div`
display: flex;
flex-direction: column;
align-items: end;
position: absolute;
top: 25%;
left: 50%;
background-color: #121212;
color: #fff;
width: fit-content;
min-width: 500px;
transform: translate(-50%);
height: 500px;
.close-button{
    display: inline-block;
    font-size: 32px;
    width: 45px;
    height: 45px;
}
.modal-contents{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .navigate-text{
        padding: 20px 0;
        font-size: 18px;
        font-weight: bold
    }
    .icon-buttons{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }
    .icon-button{
        width: 44px;
        padding: 30px 0;
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
}
`
function LoginModal(){
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector((state:RootState)=>state.user);

    const googleLogin = () => signInWithPopup(auth, provider)
        .then((result) => {
            dispatch(updateUser());
        })
        .catch((error) => {
            console.log(error);
        });
    return(
        <StyledModal className="">
            <div className="close-button" onClick={()=>dispatch(loginModalClose())}>
                <span className="material-symbols-outlined">
                close
                </span>
            </div>
            <div className="modal-contents">
                <div className="navigate-text">
                    다음 계정으로 로그인
                </div>
                <div className="icon-buttons">
                    <div className="icon-button google-login-button" onClick={()=>googleLogin()}>
                        <img src="assets/g-logo.svg" alt="" />
                    </div>
                    <div className="icon-button google-login-button">
                        <img src="assets/github.png" alt="" />
                    </div>
                </div>
                {user.displayName}
            </div>
        </StyledModal>
    );
}


onAuthStateChanged(auth, (user) => {
    if (user) {
    } else {
        // User is signed out
        // ...
    }
});

export { GoogleLoginButton, LogoutButton, LoginModal, getCurrentUser };