import React, { useEffect } from 'react'
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Icon,
  Image,
  Button,
} from '@chakra-ui/react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CallRight = (props) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1.0 }}
      variants={{
        visible: { opacity: 1, scale: 1, x: '0%' },
        hidden: { opacity: 0, scale: 1, x: '-100%' },
      }}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{ base: 4, md: 8, lg: 20 }}
          py={24}
          zIndex={3}
          bg="gray.900"
        >
          <chakra.span
            color={useColorModeValue('brand.600', 'gray.300')}
            fontSize="lg"
            textTransform="uppercase"
            fontWeight="extrabold"
          >
            {props.topTitle}
          </chakra.span>
          <chakra.h1
            mb={4}
            fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            color={useColorModeValue('brand.600', 'gray.300')}
            lineHeight="shorter"
            textShadow="2px 0 currentcolor"
          >
            {props.title}
          </chakra.h1>
          <chakra.p
            pr={{ base: 0, lg: 16 }}
            mb={4}
            fontSize="lg"
            color={useColorModeValue('brand.600', 'gray.400')}
            letterSpacing="wider"
          >
            {props.description}
          </chakra.p>
          <chakra.p
            pr={{ base: 0, lg: 16 }}
            mb={4}
            fontSize="lg"
            fontWeight="bold"
            color={useColorModeValue('brand.600', 'gray.400')}
            letterSpacing="wider"
          >
            Tools used: {props.tools}
          </chakra.p>
          <Flex w="full" justifyContent="space-evenly">
            {props.btnText ? (
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <Box display="inline-flex" rounded="md" shadow="md">
                  {props.btnLink ? (
                    <Link to={props.btnLink}>
                      <Button>{props.btnText}</Button>
                      </Link>
                  ) : (
                    <Button as="a" href={props.link} target="_blank">
                    {props.btnText}
                  </Button>
                  )}
                  
                </Box>
              </motion.button>
            ) : (
              <></>
            )}

            {props.btnText2 ? (
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <Box display="inline-flex" rounded="md" shadow="md">
                  <Button as="a" href={props.link2} target="_blank">
                    {props.btnText2}
                  </Button>
                </Box>
              </motion.button>
            ) : (
              <></>
            )}
          </Flex>
        </Flex>
        <Flex bg="">
          <Image
            src={props.image}
            alt="The Gate"
            fit="cover"
            w="full"
            h={{ base: 64, md: 512 }}
            // bg="gray.100"
            loading="lazy"
            opacity={0.6}
          />
        </Flex>
      </SimpleGrid>
    </motion.div>
  )
}

export default CallRight
