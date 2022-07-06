//components
import { HeroHeading } from "./heroHeading"
import { ImageGrid } from "./imageGrid"
import { ProductsAd } from './productsAd'
import WatIkMaak from "./watIkMaak"
import { Layout } from "../../layout"

import { Box } from '@chakra-ui/react'

interface IHomePage {
}

const HomePage = () => {
  return (
    <Layout>
      <>
        <HeroHeading />
        <ImageGrid />
        <Box my="12">
          <ProductsAd />
        </Box>
        <WatIkMaak />
      </>
    </Layout>
  )

}

export default HomePage