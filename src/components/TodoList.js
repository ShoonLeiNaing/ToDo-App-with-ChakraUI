import React from "react";
import {
  VStack,
  HStack,
  IconButton,
  Text,
  StackDivider,
  Spacer,
  Badge
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList({todos,deleteTodos}) {
  if(!todos.length){
    return(
      <Badge colorScheme='green' borderRadius='lg' p='4' m='4' fontSize="md">
        No todos, yayyy!!!
      </Badge>
    )
  }
  return (
    <VStack
      divider={<StackDivider/>}
      borderColor="grey.100"
      borderWidth="2px"
      borderRadius="lg"
      p='4'
      w='100%'
      maxW={{base:'90vw',sm:'80vw',lg:'50vw',xl:'40vw'}}
      alignItems='stretch'
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text fontSize='xl'>{todo.title}</Text>
          <Spacer/>
          <IconButton icon={<FaTrash />} isRound="true" onClick={()=>deleteTodos(todo.id)} />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
