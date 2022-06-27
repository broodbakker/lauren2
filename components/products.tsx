import Product from "./product"
//typescript
import { IProduct } from "../typescript"

import {
  SimpleGrid
} from '@chakra-ui/react';

interface IProducts {
  products: IProduct[]
}

export const Products = ({ products }: IProducts) => {
  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} spacing={10} mt="10">
        {products.map((product, key) => <Product product={product} key={key} />)}
      </SimpleGrid>
    </>
  )
}