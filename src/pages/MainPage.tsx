import { RootState } from "../service/AuthStore";
import { useSelector } from 'react-redux'
import { GoogleLoginButton, LogoutButton } from './../service/Auth';
import { getImage, getRecentPosts } from "../service/DB";
import Sidebar from "./shared/Sidebar";
import MarkdwonViewer from "../service/MarkdownViewer";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import "../scss/MainPage.scss";
function MainPage() {

    return (
        <>
            <Header />
            <Body/>
            <Footer/>
        </>
    )
}

function Body() {
    const user = useSelector((state: RootState) => state.user);
    return (
        <div className="main-body">
            <div className="main-contents">
                <h2>Main Page</h2>
                <h4>{user.displayName}</h4>
                <h4>{user.email}</h4>
                <button onClick={()=>{
                    getRecentPosts(10).then((results)=>{
                        console.log(results);
                    })
                }}>
                    get query
                </button>
                <LogoutButton />
                <GoogleLoginButton />
                <MarkdwonViewer md="# Hello, *world*!"/>
            </div>
            <Sidebar/>
        </div>
    );
}

export default MainPage;