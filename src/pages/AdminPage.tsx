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
import { sub } from "date-fns";
import { mixins } from "./style/theme";

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
.menu-head{
    width: 192px;
    height: 40px;
    margin: 0 24px;
    border-bottom: 1px solid #444;
}
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
                <div className="menu-head">
                    Admin Home
                </div>
                <div className="menu-item" onClick={()=>{
                    setPage(<CreateNewPostPage />);
                }}>
                    {/* 글쓰기 */}
                    <span className="material-symbols-outlined icon">
                        edit_square
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
                <div className="menu-item" onClick={()=>{
                    setPage(<TodoPage/>);
                }}>
                    <span className="material-symbols-outlined icon">
                        list_alt
                    </span>
                    <span>
                        할 거
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
align-items: right;
> div{
    margin-top: 15px;
}
.title{
    ${mixins.mdeditor_border}
    display:flex;
    align-items: center;
    height: 50px;
    padding: 5px 15px;
    font-size: 13px;
    textarea{
        background-color: #232323;
        color: inherit;
        flex: 1;
        height:25px;
        margin-left: 10px;
        font-size:16px;
    }
}
.editor-wrapper{
}
.submit{
    ${mixins.mdeditor_border}
    display: block;
    width: 60px;
    height: 25px;
    margin: 10px 0 0 auto;
    font-size: 13px;
}
`
function CreateNewPostPage() {
    const [startDate, setStartDate] = useState(new Date());
    const [title, setTitle] = useState<string>('');
    const [value, setValue] = useState<string | undefined>("**Hello world!!!**");
    function submit() {
        console.log('date:' + startDate);
        console.log('title: ' + title);
        console.log('content: ' + value);
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
            <div className="title">
                <span>
                    제목:
                </span>
                <textarea onChange={(e)=>setTitle(e.target.value)}>

                </textarea>
            </div>
            <div className="editor-wrapper">
                <MDEditor
                    value={value}
                    onChange={setValue}
                    height={300}
                />
            </div>
            <button className="submit" onClick={submit}>
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
const TodoDiv = styled.div`

`
function TodoPage() {
    const todo:string[] = [
        '임시저장 기능',
        '포스트 url 설정 기능',
        ''
    ]
    return (
        <TodoDiv>
            {todo.map((value) => {
                return (
                    <div className="todo-item">
                        {value}
                    </div>
                );
            })}
        </TodoDiv>
    )
}

export default AdminPage;