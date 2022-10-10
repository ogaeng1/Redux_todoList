// createSlice => 초기값, 리듀서 함수의 객체 및 슬라이스 이름을 받아 reducer 및 state에
// 해당하는 action creator 와 action tpye 을 자동으로 생성해주는 함수.
// createAction, createReducer 함수가 내부적으로 사용됨.
import { configureStore, createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
    name: "todos",
    initialState : {
        todos: []
    },
    reducers: {
      // 
        addTodoButton: (state, action) => {
            state.todos.push(action.payload);
            console.log(action.payload);
        },

        deleteTodoButton: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            console.log(action.payload);
        },

        isDoneChange: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo)}

        }
    }
)

// state를 보관하고 있는 변수명 todos 를 적고 actions 를 붙여주면 리듀서에 들어있는 함수들이 object 형태로 담김
export const {addTodoButton, deleteTodoButton, isDoneChange} = todos.actions;


const store = configureStore({
  reducer: {
    // 만든 state 를 여기에 등록해야 사용 가능
    todos: todos.reducer
  },
});

export default store;