import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Image,
  Text,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box px={8} py={64} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900",'gray.100')}
        >
          All the{" "}
          <Text
            display={{ base: "block", lg: "block" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-b, blue.600,green.200)"
            fontWeight="extrabold"
          >
            Awesome Projects
          </Text>{' '}
          by{' '}
          <Text py="2" display={{ base: "block", lg: "inline-block"}} bgClip="text" bgGradient="linear(to-b, blue.600, green.200)">r1xvu0</Text>
          <Text>in one single place.</Text>
        </chakra.h1>
        {/* <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600",'gray.300')}
        >
          Welcome to my portfolio lol?
        </chakra.p> */}
      </Box>
      <Box
        w={{ base: "full", md: 10 / 12 }}
        mx="auto"
        mt={20}
        textAlign="center"
      >
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="https://images.unsplash.com/photo-1554306274-f23873d9a26c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt="Haha go brr"
        />
      </Box>
    </Box>
  );
};

export default Hero;
