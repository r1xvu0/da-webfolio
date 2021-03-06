import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Image,
  Text,
} from "@chakra-ui/react";
import hImage from '../public/rixbg.png'

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
          src={hImage}
          alt="Hero Image"
        />
      </Box>
    </Box>
  );
};

export default Hero;
