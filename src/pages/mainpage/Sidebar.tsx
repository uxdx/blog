
function Sidebar() {
    return (
        <div className="main-sidebar elevation-8">
            <ul>
                <li><HeaderItem text="Header"/></li>
                <li><Item text="Item 1"/></li>
                <li><Item text="Item 2"/></li>
                <li><Item text="Item 3"/></li>
                <li><Item text="Item 4"/></li>
            </ul>
            
        </div>
    );
}

function HeaderItem(props:{text:string}){
    return (
        <div className="sidebar-header-item">
            {props.text}
        </div>
    );
}

function Item(props:{text:string}){
    return (
        <a className="sidebar-item" href="/">
            {props.text}
        </a>
    );
}


export default Sidebar;