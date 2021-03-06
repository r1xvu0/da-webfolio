import React from 'react'
import { chakra, HStack, Flex, Image, Text, Stack, Center, Button, IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../public/r1xvu0logo.png'
import polygon from '../public/polygon.svg'
import { motion, useViewportScroll } from 'framer-motion'
import { AiOutlineMenu } from 'react-icons/ai'


export default function NavbarOnlyLogo() {
  const { scrollY } = useViewportScroll()

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
            <Stack zIndex={99} top={0} left={0} mb={24}>
              <IconButton variant="ghost" icon={<AiOutlineMenu />} />
            </Stack>
        </Center>
      </motion.nav>
    </chakra.header>
  )
}
