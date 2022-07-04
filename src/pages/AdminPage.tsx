import { useState } from "react";
import styled from "styled-components";
import PostsSetting from "./adminpage/PostsSetting";

const Page = styled.div`

`
const MenuBar = styled.div`
`

function AdminPage(){
    let [currentMenu, setCurrentMenu] = useState(0);
    const menuTitle = ["Posts", "Menu2"];
    const menus = [<PostsSetting/>, <div> Menu2</div>];
    return (
        <Page>
            <MenuBar>
                
            </MenuBar>
        </Page>
    );
}
function AdminSidebarItem(props:{text:string, onClick:Function}){
    return (
        <div className="admin-sidebar-item">
            <button onClick={()=>{
                props.onClick();
            }}>
                {props.text}
            </button>
        </div>
    );
}

export default AdminPage;