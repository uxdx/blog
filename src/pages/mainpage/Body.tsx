import { RootState } from "../../service/AuthStore";
import { useSelector } from 'react-redux'
import { GoogleLoginButton, LogoutButton } from './../../service/Auth';
import "./Body.scss";

function Body() {
    const user = useSelector((state: RootState) => state.user);
    return (
        <div className="main-body">
            <div className="main-contents">
                <h2>Main Page</h2>
                <h4>{user.displayName}</h4>
                <h4>{user.email}</h4>
                <LogoutButton />
                <GoogleLoginButton />
            </div>
            <div className="main-sidebar">
            </div>
        </div>
    );
}

export default Body;