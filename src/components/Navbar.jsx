import React from 'react'

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Text,
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const bg = useColorModeValue('white', 'gray.800')
  const mobileNav = useDisclosure()

  return (
    <>
      <React.Fragment>
        <chakra.header
          bg={bg}
          w="full"
          px={{ base: 2, sm: 4 }}
          py={4}
          shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-around" mx="auto">
            <Flex>
              <Link to="/">
                <chakra.h1 fontSize="xl" fontWeight="medium" ml={2}>
                  r1xvu0
                </chakra.h1>
              </Link>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="gray.500"
                display={{ base: 'none', md: 'inline-flex' }}
              >
                <Link to="/">
                  <Button variant="ghost">Home</Button>
                </Link>
                {/* <Link to="invoices">
                  <Button variant="ghost">Blog</Button>
                </Link>
                <Link to="invoices">
                  <Button variant="ghost">Crypto</Button>
                </Link> */}
              </HStack>
              {/* <Link to="darp">
                <Button size="sm">Get Started</Button>
              </Link> */}
              <Box display={{ base: 'inline-flex', md: 'none' }}>
                <IconButton
                  display={{ base: 'flex', md: 'none' }}
                  aria-label="Open Menu"
                  fontSize="20px"
                  color={useColorModeValue('gray.800', 'inherit')}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? 'flex' : 'none'}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    w="full"
                    aria-label="Close Menu"
                    onClick={mobileNav.onClose}
                  />
                  <Link to="/">
                    <Button
                      w="full"
                      variant="ghost"
                      onClick={mobileNav.onClose}
                    >
                      Home
                    </Button>
                  </Link>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    </>
  )
}
