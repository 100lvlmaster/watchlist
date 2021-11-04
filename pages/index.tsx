import type { NextPage } from "next";
import {
  VStack,
  HStack,
  Spacer,
  Text,
  Input,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import AddUrlButton from "../components/add_url_button";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const onChangeHandler = () => {
    toggleColorMode();
  };
  return (
    <VStack align="stretch" w="full" minH="100vh">
      <HStack w="full" px="10" py="5">
        <Text fontWeight="600">Watchlist.</Text>
        <Spacer />
        <Input placeholder="Search" w="2xl" />
        <AddUrlButton></AddUrlButton>
        <Spacer />
        <IconButton
          onClick={onChangeHandler}
          aria-label="theme-toggle"
          icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
        />
      </HStack>
    </VStack>
  );
};

export default Home;
