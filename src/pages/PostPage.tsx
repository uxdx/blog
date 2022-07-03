import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getPostById } from '../service/DB';
import { Post } from '../type';
import Header from './shared/Header';
// "~~/posts/id"
function PostPage(){
    let [post, setPost] = useState<Post>();
    let {id} = useParams();
    useEffect(()=>{
        getPostById(id!).then((result)=>{
            setPost(result);
        })
    },[]);
    
    return (
        <>
            <Header/>
            {post ? post!.title : ''}
        </>
    );
}

export default PostPage;