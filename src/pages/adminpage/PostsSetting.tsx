import { useState } from "react";
import { getPostsAll } from "../../service/DB";
import { DocumentData } from 'firebase/firestore/lite';
import MarkdwonViewer from "../../service/MarkdownViewer";
function PostsSetting(){
    let [posts, changePosts]:[DocumentData[], Function] =useState([]);
    return (
        <div>

            <button onClick={()=>{
                try{
                    getPostsAll().then((value)=>{
                        changePosts(value);
                    });
                    console.log('update posts');
                } catch{

                }
            }}>
            asdf
            </button>
            <PostList posts={posts}/>
        </div>
    );
}

function PostList(props:{posts:DocumentData[]}){
    return (
        <>
            {
                props.posts.map((value)=>{
                    return (
                        <div>
                            {<MarkdwonViewer md={value.md} />}
                        </div>
                    );
                })
            }
        </>
    );
}



export default PostsSetting;