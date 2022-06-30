import { useState } from "react";
import "./AdminPage.scss";
import PostsSetting from "./adminpage/PostsSetting";

function AdminPage(){
    let [currentMenu, setCurrentMenu] = useState(0);
    const menuTitle = ["Posts", "Menu2"];
    const menus = [<PostsSetting/>, <div> Menu2</div>];
    return (
        <div className="admin-body">
            <div className="admin-sidebar elevation-8">
                {
                    menus.map(function(value, index){
                        return (<AdminSidebarItem 
                            text={menuTitle[index]}
                            onClick={()=>{
                                setCurrentMenu(index);
                            }}
                        />);
                    })
                }
            </div>
            <div className="admin-contents">
                {menus[currentMenu]}
            </div>
        </div>
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