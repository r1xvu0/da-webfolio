import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Image,
  Text,
} from "@chakra-ui/react";

import { motion, useAnimation } from 'framer-motion'
import hImage from '../../public/fantoms_banner.png'

const FantomHero = () => {
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
          <Text
            display={{ base: "block", lg: "block" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-t, red.600, pink.700)"
            fontWeight="extrabold"
          >
            NFT Fantoms
          </Text>{' '}
          by{' '}
          <Text py="2" display={{ base: "block", lg: "inline-block"}} bgClip="text" bgGradient="linear(to-b, blue.600, green.200)">r1xvu0</Text>
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
      <motion.div initial={{ scale: 0}} animate={{ scale: 1}} transition={{ duration: 1.5 }}>

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
      <Text py={8} textAlign="center" fontSize={24}>
        Nearing Testnet Alpha Test Release
      </Text>
          </motion.div>
          <Box>
            <Text>
              Keep up with us on Twitter: <Text fontSize={24}>
                <a href="#">
                {/* @nft-fantoms */}
                </a>
                </Text>
            </Text>
          </Box>
    </Box>
  );
};

export default FantomHero;
