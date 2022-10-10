import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodoButton } from "../redux-toolkit/configStore";
import styled from "styled-components";
import nextId from "react-id-generator";

const Form = () => {
    const dispatch = useDispatch();
    const id = nextId("ID");

    const [todo, setTodo] = useState({
        id: 1,
        title: "",
        content: "",
        isDone: false
    });

    const onInputChange = (event) => {
        const {name, value} = event.target;
        setTodo({...todo, [name]:value});
    };

    const onAddButtonClick = (event) => {
        event.preventDefault();
        dispatch(addTodoButton({...todo, id}));
        setTodo({
            id: 1,
            title: "",
            content: "",
            isDone: false
        });
    };

    return (
        <InputForm>
            <Label>제목</Label>
            <Input type="text" name="title" value={todo.title} onChange={onInputChange} ></Input>
            <Label>내용</Label>
            <Input type="text" name="content" value={todo.content} onChange={onInputChange} ></Input>
            <AddButton onClick={onAddButtonClick}>추가하기</AddButton>
        </InputForm>
    )
}

export default Form;

const InputForm = styled.form`
    height: 100px;
    width: 100%;
    background-color: #f5f5f5;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

const Label = styled.label`
    font-size: 20px;
    margin-left: 40px;
`;

const Input = styled.input`
    height: 35px;
    width: 250px;
    border-radius: 10px;
    border: none;
    margin-left: 20px;
`;

const AddButton = styled.button`
    margin-left: auto;
    margin-right: 40px;
    height: 45px;
    width: 120px;
    border: none;
    border-radius: 10px;
    background-color: teal;
    color: #ffff;
`;