import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Form from "./Form";
import List from "./List";

function Layout() {

    return(
        <LayoutContainer>
            <Header />
            <Form />
            <List />
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