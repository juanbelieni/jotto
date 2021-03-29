import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const word = 'word';

  return (
    <ChakraProvider>
      <h1>Jotto</h1>
    </ChakraProvider>
  );
}

export default App;
