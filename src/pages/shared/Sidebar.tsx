import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecentPosts } from "../../service/DB";
import { Post } from "../../type";

function Sidebar() {

    const [recentPosts, setRecentPosts] = useState<Post[]>([]);
    // 처음 렌더링 될 때 초기화
    useEffect(()=>{
        getRecentPosts(10).then((results)=>{
            setRecentPosts(results);
        });
    }, []);
    return (
        <aside className="main-sidebar elevation-8">
            <ul>
                <li><HeaderItem text="Recent Posts"/></li>
                {recentPosts.map((post)=>{
                    return <li><Item text={post.title} to={"/posts/"+post.id.toString()}/></li>
                })}
            </ul>
            
        </aside>
    );
}

function HeaderItem(props:{text:string}){
    return (
        <div className="sidebar-header-item">
            {props.text}
        </div>
    );
}

function Item(props:{text:string, to:string}){
    return (
        <Link className="sidebar-item" to={props.to}>
            {props.text}
        </Link>
    );
}


export default Sidebar;