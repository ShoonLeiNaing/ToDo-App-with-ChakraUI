import "./App.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { Heading, VStack, IconButton } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

function App() {
  const initialTodos = [
    {
      id: 1,
      title: "Buy milk",
    },
    {
      id: 2,
      title: "Wash dishes",
    },
  ];
  const[todos,setTodos]=useState(initialTodos)

  const deleteTodos=(id)=>{
    const newTodos=todos.filter(todo=>{
      return todo.id !== id;
    })
    setTodos(newTodos)
  }

  const addTodos=(todo)=>{
    setTodos([...todos,todo])
  }
  return (
    <VStack p={5} spacing={10}>
      <IconButton
        isRound="true"
        size="lg"
        icon={<FaSun />}
        alignSelf="flex-end"
      />
      <Heading
        fontWeight='extrabold' 
        size="2xl"
        bgGradient="linear(to-r,pink.500,pink.300,blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodos={deleteTodos}/>
      <AddTodo addTodos={addTodos}/>
    </VStack>
  );
}

export default App;
