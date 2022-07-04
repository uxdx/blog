import styled from 'styled-components'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecentPosts } from "../../service/DB";
import { Post } from "../../type";
import { theme } from "../../Settings";
import { header_height, sidebar_width } from '../style/size';



const StyledSidebar = styled.aside`
    background-color: ${theme.primary};
    color: ${theme.on_p};
    margin-top: ${header_height};
    margin-left: 20px;
    height: 100%;
    position: fixed;
    width: ${sidebar_width};
    ul{
        display: inline-block;
        list-style: none;
        padding-left: 0px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        li:first-child{
            margin-top: 20px;
        }
    }
    `
function Sidebar() {
    
    
    return (
        <StyledSidebar className="sidebar elevation-8">
             <RecentPosts/>
             <PopularPosts/>
        </StyledSidebar>
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
        <ul>
            <HeaderItem text="Recent Posts" />
            {recentPosts.map((post) => {
                return <Item text={post.title} to={"/posts/" + post.id.toString()} />
            })}
        </ul>
    );
}

function PopularPosts(){
    return (
        <ul>
            <HeaderItem text="Popular Posts"/>
        </ul>  
    );
}
const StyledHeaderItem = styled.li`
    width: ${sidebar_width};
    div{
        padding: 12px 24px;
        height: 40px;
        font-size: 1.125rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    `
function HeaderItem(props: { text: string }) {
    
    return (
        <StyledHeaderItem>
            <div>
                {props.text}
            </div>
        </StyledHeaderItem>
    );
}
const StyledItem = styled.li`
    width: ${sidebar_width};
    a{
        display: inline-block;
        padding: 12px 24px 12px 48px;
        width: 100%;
        height: 40px;
        text-decoration: none;
        color: inherit;
        font-size: 0.875rem;
        :hover{
            background-color: grey;
        }
    }
    
    `
function Item(props: { text: string, to: string }) {
    
    return (
        <StyledItem>
            <Link className="sidebar-item" to={props.to}>
                {props.text}
            </Link>
        </StyledItem>
    );
}


export default Sidebar;