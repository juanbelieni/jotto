import {
  ChakraProvider,
  Heading,
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
} from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function App() {
  const [wordInput, setWordInput] = useState({
    value: '',
    maxLength: 5,
  });

  const [typedWords, setTypedWords] = useState<string[]>([]);

  function handleChangeWord(event: ChangeEvent<HTMLInputElement>) {
    setWordInput((old) => ({
      ...old,
      value: event.target.value.toUpperCase(),
    }));
  }

  useEffect(() => {
    if (wordInput.value.length === wordInput.maxLength) {
      setTypedWords((old) => [wordInput.value, ...old]);
      setWordInput((old) => ({ ...old, value: '' }));
    }
  }, [wordInput]);

  return (
    <ChakraProvider>
      <Box width="100%">
        <Flex direction="column" maxWidth={500} width="100%" marginX="auto">
          <Heading textAlign="center" marginY={4}>
            Jotto
          </Heading>

          <Flex justify="space-between" marginY={4} width="100%">
            {alphabet.map((letter) => (
              <Text key={letter}>{letter}</Text>
            ))}
          </Flex>

          <InputGroup marginBottom={4}>
            <Input
              value={wordInput.value}
              onChange={handleChangeWord}
              maxLength={wordInput.maxLength}
            />
            <InputRightElement
              color="gray.400"
              marginRight="2"
              children={`${wordInput.value.length}/${wordInput.maxLength}`}
            />
          </InputGroup>

          <List marginBottom={4} spacing={3}>
            {typedWords.map((word, index) => (
              <ListItem key={index}>{word}</ListItem>
            ))}
          </List>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
