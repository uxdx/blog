import { RootState } from "../../service/AuthStore";
import { useSelector } from 'react-redux'
import { GoogleLoginButton, LogoutButton } from './../../service/Auth';
import { getPostsAll } from "../../service/DB";
import Sidebar from "./Sidebar";
import MarkdwonViewer from "../../service/MarkdownViewer";

function Body() {
    const user = useSelector((state: RootState) => state.user);
    return (
        <div className="main-body">
            <div className="main-contents">
                <h2>Main Page</h2>
                <h4>{user.displayName}</h4>
                <h4>{user.email}</h4>
                <button onClick={()=>{
                    getPostsAll().then((data)=>{
                        console.log(data);
                    });
                }}>
                    get posts
                </button>
                <LogoutButton />
                <GoogleLoginButton />
                <MarkdwonViewer md="# Hello, *world*!"/>
            </div>
            <Sidebar/>
        </div>
    );
}

export default Body;