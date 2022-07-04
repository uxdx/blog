import styled from 'styled-components'
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { theme } from '../Settings';
// import "../scss/MainPage.scss";
import { useEffect, useState } from 'react';
import { Post } from '../type';
import { Link } from 'react-router-dom';
import { header_height } from './style/size';
import { getRecentPosts } from '../service/DB';

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
    const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${theme.primary};
    color: ${theme.on_p};
    width: 100%;
    padding-top: ${header_height};
    `
    return (
        <StyledDiv>
            <LeftSide/>
            <MainContents/>
            <RightSide/>
        </StyledDiv>
    );
}


function MainContents() {
    const StyledMain = styled.main`
    width: 100%;
    .content{
        background-color: ${theme.p_light};
        height: 450px;
        margin:40px 40px;
        padding: 40px;
        border-radius: 25px;
        border: 2px solid ${theme.p_light};
        
    }
    `
    return (
        <StyledMain>
            <RecentPosts/>
            <RecentPosts/>
        </StyledMain>
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
        <div className='content elevation-5'>
            Recent Posts
            {recentPosts.map((post) => {
                return <PostCard text={post.title} to={"/posts/" + post.id.toString()} />
            })}
        </div>
    );
}

function LeftSide() {
    const StyledAside = styled.aside`
    width: 220px;
    @media (max-width: 1024px) {
        display:none;
    }
}
    `
    return (
        <StyledAside>
            Left
        </StyledAside>
    );
}

function RightSide() {
    const StyledAside = styled.aside`
    width: 220px;
    @media (max-width: 767px) {
        display:none;
    }
    `
    return (
        <StyledAside>
            Right
        </StyledAside>
    );
}


function PostCard(props: { text: string, to:string }) {
    const StyledPostCard = styled.div`
    
    `
    return (
        <StyledPostCard>
            <Link to={props.to}>
            {props.text}
            </Link>
        </StyledPostCard>
    );
}

export default MainPage;