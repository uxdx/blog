import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecentPosts } from "../../service/DB";
import { Post } from "../../type";

function Sidebar() {

    
    return (
        <aside className="sidebar elevation-8">
            <RecentPosts/>
            <PopularPosts/>
        </aside>
    );
}
function RecentPosts() {
    const [recentPosts, setRecentPosts] = useState<Post[]>([]);
    // 처음 렌더링 될 때 초기화
    useEffect(() => {
        getRecentPosts(10).then((results) => {
            setRecentPosts(results);
        });
    }, []);
    return (
        <ul className="sidebar-item-container" >
            <HeaderItem text="Recent Posts" />
            {recentPosts.map((post) => {
                return <Item text={post.title} to={"/posts/" + post.id.toString()} />
            })}
        </ul>
    );
}

function PopularPosts(){
    return (
        <ul className="sidebar-item-container">
            <HeaderItem text="Popular Posts"/>
        </ul>  
    );
}

function HeaderItem(props:{text:string}){
    return (
        <li>
            <div className="sidebar-header-item">
                {props.text}
            </div>
        </li>
    );
}

function Item(props:{text:string, to:string}){
    return (
        <li>
            <Link className="sidebar-item" to={props.to}>
                {props.text}
            </Link>
        </li>
    );
}


export default Sidebar;