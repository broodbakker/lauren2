//components
import { Products } from "../../products"
//typescript
import { IProduct } from "../../../typescript"

import { Box, Heading } from '@chakra-ui/react'

interface iProductsAd {
  products: IProduct[]
}

export const ProductsAd = ({ products }: iProductsAd) => {
  return (
    <>
      <Box textAlign="center">
        <Heading as='h2'
          fontWeight={600}
          color="blackAlpha.800"
          fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>Spulletjes die ik verkoop 🎁</Heading>
      </Box>
      <Products products={products} />
    </>
  )
}
