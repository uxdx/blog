import { ReactNode, useState } from "react";
import { theme } from "../Settings";
import styled from "styled-components";
import MDEditor from '@uiw/react-md-editor';

const Admin = styled.div`
display: flex;
background-color: ${theme.primary};
color: ${theme.on_p};
min-height: 1000px;
`
const MenuBar = styled.div`
background-color: ${theme.p_light};
color: ${theme.on_p};
width: 220px;
.menu-item{
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .icon{
        font-size: 32px;
    }
}
`
const Page = styled.div`
`

function AdminPage(){
    const [page, setPage] = useState<ReactNode>(<div>default</div>);
    return (
        <Admin>
            <MenuBar>
                <div className="menu-item" onClick={()=>{
                    setPage(<NewPostPage/>);
                }}>
                    {/* 글쓰기 */}
                    <span className="material-symbols-outlined icon">
                        edit_note
                    </span>
                    <span>
                        글 쓰기
                    </span>
                </div>
                <div className="menu-item" onClick={()=>{
                    setPage(<PostListPage/>);
                }}>
                    <span className="material-symbols-outlined icon">
                        list_alt
                    </span>
                    <span>
                        글 목록
                    </span>
                </div>
            </MenuBar>
            <Page>
                {page}
            </Page>
        </Admin>
    );
}

function NewPostPage(){
    const [value, setValue] = useState<string | undefined>("**Hello world!!!**");
    return(
        <div>
            <MDEditor
                value={value}
                onChange={setValue}
            />
            <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
    );
}

function PostListPage(){
    return(
        <div>
            post list
        </div>
    );
}

export default AdminPage;