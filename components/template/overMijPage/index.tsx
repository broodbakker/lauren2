//components
import { Layout } from "../../layout"
import { HeroHeader } from "./heroHeader"
import { Overmijzelf } from "./overMijzelf"
import { ImageGrid } from "./imageGrid"
//style
import {
  Image, Heading, SimpleGrid, Box, AspectRatio
} from '@chakra-ui/react';

interface IOvermij {
}

const Overmij = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  )
}

const Main = () => {
  return (
    <Box pt="6rem">
      <HeroHeader />
      <Overmijzelf />
      <ImageGrid/>
    </Box>
  )
}

export default Overmij