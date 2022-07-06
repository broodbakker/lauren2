//components
import { HeroHeading } from "./heroHeading"
import { ImageGrid } from "./imageGrid"
import { ProductsAd } from './productsAd'
import WatIkMaak from "./watIkMaak"
import { Layout } from "../../layout"
//typescript
import { IProduct } from "../../../typescript"

import { Box } from '@chakra-ui/react'

interface IHomePage {
  products: IProduct[]
}

const HomePage = ({ products }: IHomePage) => {
  return (
    <Layout>
      <>
        <HeroHeading />
        <ImageGrid />

        <Box my="12">
          <ProductsAd products={products} />
        </Box>
        <WatIkMaak />
      </>
    </Layout>
  )

}

export default HomePage