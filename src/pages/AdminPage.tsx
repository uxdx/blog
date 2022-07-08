import { ReactNode, useState } from "react";
import { theme } from "../Settings";
import styled from "styled-components";
import MDEditor from '@uiw/react-md-editor';
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import "react-datepicker/dist/react-datepicker.css";
import { uploadPost } from "../service/DB";
import { Post } from "../type";
import { Timestamp } from "firebase/firestore/lite";

registerLocale('ko', ko);

const Admin = styled.div`
display: flex;
background-color: ${theme.primary};
color: ${theme.on_p};
min-height: 1000px;

div{

}
`
const MenuBar = styled.div`
background-color: ${theme.p_light};
color: ${theme.on_p};
width: 240px;
.menu-item{
    width: 192px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    cursor: pointer;
    .icon{
        font-size: 24px;
        margin-right: 24px;
    }
}
`
const Page = styled.div`
display: flex;
flex-direction: column;
align-items:center;
width: 100%;
`

function AdminPage(){
    const [page, setPage] = useState<ReactNode>(<div>default</div>);
    return (
        <Admin>
            <MenuBar>
                <div className="menu-item" onClick={()=>{
                    setPage(<CreateNewPostPage />);
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
const NewPost = styled.div`
width: 90%;
margin-top: 50px;
.editor-wrapper{
    margin-top: 25px;
    display: flex;
    div{
        flex:1;
        margin-right: 15px;
    }
}

`
function CreateNewPostPage() {
    const [startDate, setStartDate] = useState(new Date());
    const [value, setValue] = useState<string | undefined>("**Hello world!!!**");
    function submit() {
        console.log(value);
    }
    return(
        <NewPost>
            <DatePicker
                    locale="ko"
                    selected={startDate}
                    onChange={(date: Date) => {
                        setStartDate(date);
                        console.log(date);
                    }}
                showTimeSelect
            />
            <div className="editor-wrapper">
                <MDEditor
                    value={value}
                    onChange={setValue}
                    height={300}
                />
                <MDEditor.Markdown
                    source={value}
                    style={{ whiteSpace: 'pre-wrap' }}
                />
            </div>
            <button onClick={async () => {
                // const sample: Post = {
                //     id: "4",
                //     uploadDate: Timestamp.now(),
                //     title: "sample post",
                //     md: "sample content"

                // }
                // await uploadPost(sample);
            }}>
                게시
            </button>
        </NewPost>
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