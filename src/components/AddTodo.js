import React, { useState } from "react";
import { Input, HStack, Button, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

function AddTodo({ addTodos }) {
  const toast=useToast()
  const [todoContent, setTodoContent] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if(!todoContent) {
      toast({
        title: "No Context",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      title: todoContent,
    };
    addTodos(todo);
    setTodoContent("");
  };
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <HStack mt="4">
        <Input
          variant="filled"
          placeholder="Add a todo"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
