import React from 'react'
import {
  chakra,
  HStack,
  Flex,
  Image,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../public/r1xvu0logo.png'

export default function NavbarOnlyLogo() {

  return (
    <chakra.header
      w="full"
      overflowY="hidden"
    >
      <chakra.div h="10rem" mx="auto" maxW="1200px">
        <Flex
          w="full"
          h="full"
          px="6"
          alignItems="center"
          justifyContent="center"
        >
          <Flex alignitems="center" align="center">
            <Link to="/">
              <HStack>
                <Image w={64} h={64} src={logo} />
              </HStack>
            </Link>
          </Flex>
        </Flex>
      </chakra.div>
    </chakra.header>
  )
}
