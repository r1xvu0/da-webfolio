import React from 'react'
import {
  chakra,
  HStack,
  Flex,
  Image,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function NavbarOnlyLogo() {

  return (
    <chakra.header
      w="full"
      overflowY="hidden"
    >
      <chakra.div h="5rem" mx="auto" maxW="1200px">
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
                <Image w={24} h={24} src="r1xvu0logo.png" />
              </HStack>
            </Link>
          </Flex>
        </Flex>
      </chakra.div>
    </chakra.header>
  )
}
