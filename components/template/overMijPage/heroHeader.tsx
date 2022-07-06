//style
import {
  Image, HStack, Heading, Box
} from '@chakra-ui/react';

interface IOvermij {
}

export const HeroHeader = () => {
  return (
    <>
      <Box>
        <Heading as="h2" size="xl" textAlign="center" color="gray.900" >Lauren van Hofwegen</Heading>
      </Box>

      <HStack spacing='-20px' justify="center" py="8">
        <Image
          borderRadius='4rem'
          boxSize='200px'
          src='./images/horse2.jpg'
          alt='Dan Abramov'
          pos="relative"
          zIndex="0"
          border="1px" borderColor="purple.200"
        />

        <Image
          borderRadius='4rem'
          boxSize='250px'
          src='https://res.cloudinary.com/dta9vptzh/image/upload/v1655718212/lauren/lauren4.jpg'
          alt='Dan Abramov'
          pos="relative"
          zIndex="1"
          border="1px" borderColor="purple.200"
        />

        <Image
          borderRadius='4rem'
          boxSize='200px'
          src='./images/horse1.jpg'
          alt='Dan Abramov'
          pos="relative"
          zIndex="0"
          border="1px" borderColor="purple.200"
        />
      </HStack>
    </>
  )
}

export default HeroHeader