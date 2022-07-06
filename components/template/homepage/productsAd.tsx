//components
import { Products } from "../../products"
//typescript
import { IProduct } from "../../../typescript"

import { Box, Heading } from '@chakra-ui/react'
import { fetchProducts } from "../../../util/api"
import { useEffect, useState } from 'react';

const fakeData = {
  date: "string",
  name: "string",
  id: "string",
  description: "string",
  price: 300,
  category: "paarden",
  image: ["https://res.cloudinary.com/dta9vptzh/image/upload/v1655718231/lauren/lauren3.jpg", "https://res.cloudinary.com/dta9vptzh/image/upload/v1655718231/lauren/lauren3.jpg"],
  currency: "eur"
}

export const ProductsAd = () => {
  const [value, setValue] = useState<IProduct[]>([fakeData])

  useEffect(() => {
    fetchProducts().then((products) => setValue(products.products));
  }, [])

  return (
    <>
      <Box textAlign="center">
        <Heading as='h2'
          fontWeight={600}
          color="blackAlpha.800"
          fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>Spulletjes die ik verkoop 🎁</Heading>
      </Box>
      {value && <Products products={value} />}
    </>
  )
}
