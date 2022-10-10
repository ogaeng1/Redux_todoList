import React from "react";
import styled from "styled-components";
import { deleteTodoButton, isDoneChange } from "../redux-toolkit/configStore";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
    // useSelector : store 에 있던 state 를 가져오는 함수라고 생각하면 되나..?
    const list = useSelector((state) => state.todos.todos);
    const dispathch = useDispatch();

    const onDeleteButton = (id) => {
        dispathch(deleteTodoButton(id));
    };

    const onIsDoneChange = (id) => {
        dispathch(isDoneChange(id));
    };

    return (
        <ListContainer>
            <ListTitle>진행중..🔥</ListTitle>
            <ListWrap>
                {list.map((todo) => {
                    if (!todo.isDone) {
                        return (
                            <DetailContainer key={todo.id}>
                                <Link to ={`/detail/${todo.id}`}>
                                    상세보기
                                </Link>
                                <>  { /* Fragments 문법. 키나 속성은 사용 불가능  */ }
                                    <h3>{todo.title}</h3>
                                    <div>{todo.content}</div>
                                </>
                                <Buttons>
                                    <DeleteButton onClick={() => onDeleteButton(todo.id)}>삭제하기</DeleteButton>
                                    <DoneButton onClick={() => onIsDoneChange(todo.id)}>
                                        {todo.isDone ? "취소" : "완료"}
                                    </DoneButton>
                                </Buttons>
                            </DetailContainer>
                        );
                    }
                    else return null;
                })}           
            </ListWrap>
            <ListTitle>완료..✔️</ListTitle>
            <ListWrap>
            {list.map((todo) => {
                    if (todo.isDone) {
                        return (
                            <DetailContainer key={todo.id}>
                                <Link to ={`/detail/${todo.id}`}>
                                    상세보기
                                </Link>
                                <>
                                    <h2>{todo.title}</h2>
                                    <div>{todo.content}</div>
                                </>
                                <Buttons>
                                    <DeleteButton onClick={() => onDeleteButton(todo.id)}>삭제하기</DeleteButton>
                                    <DoneButton onClick={() => onIsDoneChange(todo.id)}>
                                        {todo.isDone ? "취소" : "완료"}
                                    </DoneButton>
                                </Buttons>
                            </DetailContainer>
                        );
                    }
                    else return null;
                })}
            </ListWrap>
        </ListContainer>
    )
}

export default List;

const ListContainer = styled.div`
    width: 100%;
    height: 70vh;
`;

const ListTitle = styled.h2`
    margin-left: 10px;
`;

const ListWrap = styled.div`
    display: flex;
`;

const DetailContainer = styled.div`
    width: 300px;
    height: 170px;
    border: 4px solid teal;
    border-radius: 10px;
    margin: 10px;
    padding: 15px;
`;

const Buttons = styled.div`
    display: flex;
    margin-top: 30px;
    width: 100%;
    gap: 10px;
`;

const DeleteButton = styled.button`
    background-color: #fff;
    color: black;
    cursor: pointer;
    width: 50%;
    border-radius: 8px;
    height: 40px;
    border: 2px solid red;
`;

const DoneButton = styled.button`
    background-color: #fff;
    color: black;
    cursor: pointer;
    width: 50%;
    border-radius: 8px;
    height: 40px;
    border: 2px solid green;
`;