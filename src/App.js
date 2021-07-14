import "./App.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { Heading, VStack, IconButton } from "@chakra-ui/react";

function App() {
  return (
    <VStack p={5}>
      <IconButton
        isRound="true"
        size="lg"
        icon={<FaSun />}
        alignSelf="flex-end"
      />
      <Heading
        mb="8"
        fontWeight='extrabold' 
        size="2xl"
        bgGradient="linear(to-r,pink.500,pink.300,blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
    </VStack>
  );
}

export default App;
