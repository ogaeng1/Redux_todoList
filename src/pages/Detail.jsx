import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";


const Detail = () => {

    const todoList = useSelector((state) => state.todos.todos);
    const params = useParams();
    const todo = todoList.find((todo) => todo.id === params.id);
    
    return (
        <DetailContainer>
            <DetailWrap>
                <DetailHeader>
                    <div>ID : {todo.id}</div>
                    <Link to={"/"}>이전으로</Link>
                </DetailHeader>
                <DetailInfo>
                    <h2>{todo.title}</h2>
                    <div>{todo.content}</div>
                </DetailInfo>
            </DetailWrap>
        </DetailContainer>
    );
};

export default Detail;

const DetailContainer = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
`;

const DetailWrap = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 15%;
    height: 200px;
    border: 1px solid grey;
`;

const DetailHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 20px;
    margin: 15px;
`;

const DetailInfo = styled.div`
    width: 80%;
    height: 150px;
    margin: 10px;
`;