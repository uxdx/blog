import styled from 'styled-components'
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { theme } from '../Settings';
import { useEffect, useState } from 'react';
import { Post } from '../type';
import { Link } from 'react-router-dom';
import { header_height } from './style/size';
import { getRecentPosts } from '../service/DB';
import { LoadingCircle, ScreenAdaptable, WithMediaQuery } from './shared/Util';

function MainPage() {
    return (
        <>
            <Header />
            <Body/>
            <Footer/>
        </>
    )
}

const StyledBody = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${theme.primary};
    color: ${theme.on_p};
    width: 100%;
    padding-top: ${header_height};
    `
function Body() {
    
    return (
        <StyledBody>
            <MainContents/>
        </StyledBody>
    );
}

const StyledMain = styled.main`
    width: 100%;
    .content{
        background-color: ${theme.primary};
        width: 90%;
        height: 450px;
        margin:40px auto;
        padding: 0 20px;
        border-radius: 25px;
        // border: 2px solid ${theme.p_light};
        text-align: center;
    }
    `
function MainContents() {
    
    return (
        <StyledMain>
            <RecentPosts/>
            <RecentPosts/>
        </StyledMain>
    );
}

const PostViewer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
const CardContainer = styled.div`
    display: flex;
    width: 100%;
    `
const ViewerButton = styled.button`
    top: 50%;
    width: auto;
    height: 48px;
    margin: auto, 0;
    .material-symbols-outlined{
        font-size: 48px !important;
    }
    `
function RecentPosts() {
    const [recentPosts, setRecentPosts] = useState<Post[]>([]);
    let [pointer, setPointer] = useState<number>(0); // 배열의 시작 인덱스 state
    let [pointer_max, setMax] = useState<number>(0); // 포인터의 최댓값(배열 크기)

    // 처음 렌더링 될 때 초기화
    useEffect(() => {
        getRecentPosts(10).then((results) => {
            setMax(results.length);
            setRecentPosts(results);
        });
    }, []);
    return (
        <div className='content elevation-5'>
            <h1>Recent Posts</h1>
            {recentPosts.length === 0 ? <LoadingCircle /> :
                <PostViewer>
                    <WithMediaQuery query='(min-width: 767px)' child={
                        <ViewerButton onClick={() => {
                            if (pointer > 0) {
                                setPointer(pointer - 1);
                            }
                            }}>
                            <span className="material-symbols-outlined">
                                arrow_circle_left
                            </span>
                        </ViewerButton>
                    }/>
                    <CardContainer>
                        {recentPosts.slice(pointer, pointer + 3).map((post) => {
                            return <PostCard post={post} key={ post.id } />
                        })}
                    </CardContainer>
                    <WithMediaQuery query='(min-width: 767px)' child={
                        <ViewerButton onClick={() => {
                            if (pointer < pointer_max) {
                                setPointer(pointer + 1);
                            }
                        }}>
                            <span className="material-symbols-outlined">
                                arrow_circle_right
                            </span>
                        </ViewerButton>
                    } />
                    
                </PostViewer>
            }
        </div>
    );
}

const StyledPostCard = styled.div`
    background-color: ${theme.p_light};
    color: ${theme.on_p};
    display:flex;
    flex-direction: column;
    flex: 1;
    height: 350px;
    margin: 0 10px;
    border: 1px solid ${theme.p_light};
    border-radius: 12px;
    text-align: start;
    h2 {
        flex: 1;
        color: #fff;
        font-size:1.2rem;
        padding-left: 20px;
    }
    .card-content-wrapper{
        flex: 6;
        overflow: hidden;
        padding: 20px;
        border-bottom: 1px solid #444;
        p{
            overflow: hidden;
            height: 100%;
            overflow-wrap: anywhere;
        }
    }
    .card-meta-wrapper{
        flex:1;
        span{
            display: inline-block;
            margin-top: 10px;
            margin-left: 20px;
        }
    }
    `
function PostCard(props: { post: Post }) {
    
    
    return (
        <StyledPostCard>
            <Link to={"/posts/"+props.post.id}>
                <h2>
                    {props.post.title}
                </h2>
            </Link>
            <div className='card-content-wrapper'>
                <Link to={"/posts/" + props.post.id}>
                    <p>
                    {props.post.md}
                    </p>
                </Link>
            </div>
            <div className='card-meta-wrapper'>
                <span>
                    {props.post.uploadDate.toDate().toDateString()}
                </span>
            </div>
        </StyledPostCard>
    );
}

export default MainPage;