import "./App.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { Heading, VStack, IconButton,useColorMode } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState,useEffect } from "react";

function App() {
  
  const[todos,setTodos]=useState(()=>JSON.parse(localStorage.getItem('todos')) || [])

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])

  const deleteTodos=(id)=>{
    const newTodos=todos.filter(todo=>{
      return todo.id !== id;
    })
    setTodos(newTodos)
  }

  const addTodos=(todo)=>{
    setTodos([...todos,todo])
  }

  const{colorMode,toggleColorMode}=useColorMode()
  return (
    <VStack p={5} spacing={10}>
      <IconButton
        isRound="true"
        size="lg"
        icon={colorMode==='light'?<FaSun/>:<FaMoon/>}
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        fontWeight='extrabold' 
        size="2xl"
        bgGradient="linear(to-r,teal.500,teal.400,pink.300)"
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
