import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppDispatch, loginModalOpen } from "../../service/store";
import { theme } from "../../Settings";
import { header_height } from "../style/size";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
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
        margin-left: 24px;
        border-radius: 30px;
        border-bottom: 1px solid #000;
    }
    .header-auth{
        width: 80px;
        height: 40px;
        border-radius: 20px;
        text-align: center;
        background-color: #eee;
        color: #000;
        margin-right: 48px;
        cursor: pointer;
        :hover{
            background-color: grey;
        }
        .button-text{
            display: inline;
            vertical-align: -webkit-baseline-middle;
            font-weight: bold;
        }
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
            <div className="header-auth" onClick={() => dispatch(loginModalOpen())}>
                <span className="button-text">
                    로그인
                </span>
            </div>
        </StyledHeader>
    );
}




export default Header;