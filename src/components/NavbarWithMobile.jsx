import React from 'react'
import {
  chakra,
  Box,
  HStack,
  VStack,
  Flex,
  Image,
  Text,
  Stack,
  Center,
  Button,
  IconButton,
  CloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import { Link } from 'react-router-dom'
import logo from '../public/r1xvu0logo.png'
import polygon from '../public/polygon.svg'
import { motion, useAnimation, useViewportScroll } from 'framer-motion'
import { AiOutlineMenu } from 'react-icons/ai'

export default function NavbarWithMobile() {
  const { scrollY } = useViewportScroll()
  const controls = useAnimation()

  const [hidden, setHidden] = React.useState(false)

  const variant = {
    visible: { opacity: 1, y: 20 },
    hidden: { opacity: 0, y: 0 },
  }

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false)
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true)
    }
  }

  React.useEffect(() => {
    return scrollY.onChange(() => update())
  })

  const mobileNav = useDisclosure()

  const MobileNavContent = (
    <VStack
      bg="gray.700"
      maxW="120px"
      mx="auto"
      position="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? 'flex' : 'none'}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      spacing={3}
      rounded="lg"
      shadow="md"
    >
      <CloseButton
        aria-label="Close Menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost">
        Home
      </Button>
      <Button w="full" variant="ghost">
        Blog
      </Button>
    </VStack>
  )

  return (
    <chakra.header w="full" overflowY="hidden" position="fixed" zIndex="99">
      <motion.nav
        variants={variant}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.3 }}
      >
        <chakra.div h="10rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="center"
            // position="absolute"
          >
            <Flex alignitems="center" align="center">
              <Link to="/">
                <HStack>
                  <Image w={64} h={64} src={logo} />
                  {/* <Image w={32} h={32} src={polygon} /> */}
                </HStack>
              </Link>
            </Flex>
          </Flex>
        </chakra.div>
        <Center>
          <Stack top={0} left={0} mb={24}>
            <IconButton
              _focus="none"
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.isOpen ? mobileNav.onClose : mobileNav.onOpen}
            />
          </Stack>
        </Center>

        {MobileNavContent}
      </motion.nav>
    </chakra.header>
  )
}
