import styled from "styled-components";
import { theme } from "../../Settings";
function Footer() {
    const StyledFooter = styled.footer`
    background-color: ${theme.p_dark};
    color: ${theme.on_p};
    height: 160px;
    `
    return (
        <StyledFooter>
            Footer Contents
        </StyledFooter>
        
    );
}

export default Footer;