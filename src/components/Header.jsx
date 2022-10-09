import React from "react"
import styled from "styled-components";

function Header() {
    
    return (
        <HeaderContainer>
            <HeaderSpan>My Todo List</HeaderSpan>
            <HeaderSpan>React</HeaderSpan>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
`;

const HeaderSpan = styled.span`
    margin: 0px 30px;
`;