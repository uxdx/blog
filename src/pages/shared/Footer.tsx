import styled from "styled-components";
import { theme } from "../../Settings";

const StyledFooter = styled.footer`
    background-color: ${theme.p_dark};
    color: ${theme.on_p};
    height: 160px;
    `
    
function Footer() {
    
    return (
        <StyledFooter>
            Footer Contents
        </StyledFooter>
        
    );
}

export default Footer;