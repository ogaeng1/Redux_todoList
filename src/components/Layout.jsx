import React from "react";
import "./style.css"
import styled from "styled-components";

function Layout(props) {

    return(
        <LayoutContainer className="container">
            {props.children}
        </LayoutContainer>
    )
}

export default Layout

const LayoutContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    min-width: 800px;
    margin: auto;
`;