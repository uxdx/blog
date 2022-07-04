import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Settings";
import { header_height } from "../style/size";

const StyledHeader = styled.header`
    display: flex;
    // justify-content: center;
    align-items: center;
    background-color: ${theme.primary};
    color: ${theme.on_p};
    height: ${header_height};
    width: 100%;
    position: fixed;
    .header-logo{
        margin-left: 40px;
        font-size: 28px;
        font-weight: 600;
    }
    `
function Header() {
    
    return (
        <StyledHeader>
            <span className="header-logo">
                <Link to="/">
                    Harusary
                </Link>
            </span>
        </StyledHeader>
    );
}

export default Header;