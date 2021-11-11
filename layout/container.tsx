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
import NextLink from "next/link";
const Container: NextPage = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const onChangeHandler = () => {
    toggleColorMode();
  };
  return (
    <VStack align="stretch" w="full" minH="100vh">
      <HStack w="full" px={{ base: `5`, sm: `5`, md: "10" }} py="5">
        <NextLink href="/">
          <a>
            <Text
              display={{ base: "none", sm: "none", md: "flex" }}
              fontWeight="600"
            >
              Watchlist.
            </Text>
          </a>
        </NextLink>
        <Spacer display={{ base: "none", sm: "none", md: "flex" }} />
        <Input placeholder="Search" w="2xl" />
        <AddUrlButton />
        <Spacer />
        <IconButton
          onClick={onChangeHandler}
          aria-label="theme-toggle"
          icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
        />
      </HStack>
      {children}
    </VStack>
  );
};

export default Container;
