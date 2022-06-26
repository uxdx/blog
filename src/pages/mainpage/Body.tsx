import { RootState } from "../../service/AuthStore";
import { useSelector } from 'react-redux'
import { GoogleLoginButton, LogoutButton } from './../../service/Auth';
import Sidebar from "./Sidebar";

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
            <Sidebar/>
        </div>
    );
}

export default Body;