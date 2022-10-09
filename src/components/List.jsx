import React from "react";
import styled from "styled-components";
import { todoDeleteButton, isDoneChange } from "../redux/configStore";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
    const todos = useSelector((state) => {return state.todos.todo});
    const dispathch = useDispatch();

    const onDeleteButton = (id) => {
        dispathch(todoDeleteButton(id));
    };

    const onIsDoneChange = (id) => {
        dispathch(isDoneChange(id));
    };

    return (
        <ListContainer>
            <ListTitle>진행중..🔥</ListTitle>
            <ListWrap>
                {todos.map((todo) => {
                    if (!todo.isDone) {
                        return (
                            <div key={todo.id}>
                                <Link to={`/detail/${todo.id}`} key={todo.id}}>
                                    <div>상세보기</div>
                                </Link>
                                <div>
                                    <h2>{todo.title}</h2>
                                    <div>{todo.content}</div>
                                </div>
                                <div>
                                    <button></button>
                                    <button></button>
                                </div>
                            </div>
                        ) 
                    }
                })}
            </ListWrap>
            <ListTitle>완료..✔️</ListTitle>
            <ListWrap>
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return (<Todo todo={todo} key={todo.id} setTodos={setTodos} onDelete={onDelete} doneCancelBtn={doneCancelBtn} />);
                    }
                    else {
                        return null;
                    }
                })}
            </ListWrap>
        </ListContainer>
    )
}

export default List

const ListContainer = styled.div`
    width: 100%;
    height: 70vh;
`;

const ListTitle = styled.h2`
    margin-left: 10px;
`;

const ListWrap = styled.div`
    margin: 20px;
    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
`;