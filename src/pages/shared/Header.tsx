import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppDispatch, loginModalOpen } from "../../service/store";
import { theme } from "../../Settings";
import { header_height } from "../style/size";

const StyledHeader = styled.header`
    display: flex;
    // justify-content: center;
    align-items: center;
    color: ${theme.on_p};
    height: ${header_height};
    width: 100%;
    position: fixed;
    .header-logo{
        background-color: ${theme.primary};
        font-size: 24px;
        font-weight: 600;
        padding: 8px 13px 15px;
        margin-top: 20px;
        margin-left: 48px;
        border-radius: 30px;
        border-bottom: 1px solid #000;
    }
`
function Header() {
    const dispatch: AppDispatch = useDispatch()
    
    return (
        <StyledHeader>
            <span className="header-logo">
                <Link to="/">
                    Harusary.com
                </Link>
            </span>
            <span className="header-auth">
                <button onClick={()=>dispatch(loginModalOpen())}>
                    Login
                </button>
            </span>
        </StyledHeader>
    );
}




export default Header;