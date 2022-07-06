//components
import { Layout } from "../../layout"
import { HeroHeader } from "./heroHeader"
import { Overmijzelf } from "./overMijzelf"
//style
import {
  Image, Heading, SimpleGrid, Box, AspectRatio
} from '@chakra-ui/react';

export const ImageGrid = () => {
  return (
    <>
      <Box my="5">
        <Heading as="h2" size="xl" textAlign="center" >Mijn knutsel werkplek</Heading>
      </Box>

      <Box alignItems="center">
        <SimpleGrid columns={[4, null, 6]} spacing='0 ' mx="auto" maxW="1000px">
          <AspectRatio maxW='560px' ratio={1}>
            <Image w="full" h="full" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </AspectRatio>
          <AspectRatio maxW='560px' ratio={1}>
            <Image w="full" h="full" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </AspectRatio>
          <AspectRatio maxW='560px' ratio={1}>
            <Image w="full" h="full" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </AspectRatio>
          <AspectRatio maxW='560px' ratio={1}>
            <Image w="full" h="full" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </AspectRatio>
          <AspectRatio maxW='560px' ratio={1}>
            <Image w="full" h="full" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </AspectRatio>
          <AspectRatio maxW='560px' ratio={1}>
            <Image w="full" h="full" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </AspectRatio>
          <AspectRatio maxW='560px' ratio={1}>
            <Image w="full" h="full" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </AspectRatio>
          <AspectRatio maxW='560px' ratio={1}>
            <Image w="full" h="full" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </AspectRatio>
          <AspectRatio maxW='560px' ratio={1}>
            <Image w="full" h="full" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </AspectRatio>
          <AspectRatio maxW='560px' ratio={1}>
            <Image w="full" h="full" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </AspectRatio>
          <AspectRatio maxW='560px' ratio={1}>
            <Image w="full" h="full" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </AspectRatio>
          <AspectRatio maxW='560px' ratio={1}>
            <Image w="full" h="full" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </AspectRatio>
        </SimpleGrid>
      </Box>
    </>
  )
}
