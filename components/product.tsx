import {
  Box,
  Button,
  Text,
  Heading, Flex
} from '@chakra-ui/react';
//typescript
import { IProduct } from "../typescript"
//hooks
import { CartActions } from "use-shopping-cart"
import { usePayment } from "../util/hooks/usePayment"
//component
import NModal from "./modal"
//function
import { formatPrice } from "../util/function"

interface IProductF {
  product: IProduct
}

const Product = ({ product }: IProductF) => {
  const { clearCart, addItem, loadCart, status, handleCheckout, cartDetails, cart } = usePayment()

  return <ProductView2 product={product} addItem={addItem} />
}

interface IProductView extends IProductF {
  addItem: CartActions["addItem"]
}


const ProductView2 = ({ product, addItem }: IProductView) => {
  const { image, name, price } = product
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="sm"
      mx="auto"
    >
      <Box
        bg="gray.300"
        h={64}
        w="full"
        rounded="lg"
        shadow="md"
        bgSize="cover"
        bgPos="center"

        pos="relative"
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 2,
          left: 0,
          zIndex: -1,
          backgroundImage: `url(${image[0]})`,
          filter: 'blur(15px)',

        }}
        _groupHover={{
          _after: {
            filter: 'blur(20px)',
          },
        }}
        style={{
          backgroundImage:
            `url(${image[0]})`,
        }}
      ></Box>

      <Box
        w={{
          base: 56,
          md: 64,
        }}
        pos="relative"
        mt={-10}
        shadow="lg"
        rounded="lg"
        overflow="hidden"

        _before={{
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 0,
          left: 0,
          bg: "purple.600",
          opacity: 0.75
        }}
      >
        <Heading as='h2' size='md' noOfLines={2} py={2}
          textAlign="center"
          fontWeight="bold"
          textTransform="uppercase"
          color="white"
          letterSpacing={1}
          pos="relative"
          zIndex={1}
        >
          {name}
        </Heading>


        <Flex
          alignItems="center"
          justifyContent="space-between"
          py={2}
          px={3}

        >
          <Text
            fontWeight="bold"
            color="white"
            zIndex={1}
          >
            {formatPrice(price)}
          </Text>

          <NModal product={product}>
            <Button
              bg="gray.700"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.700",
                _dark: {
                  bg: "gray.600",
                },
              }}
              _focus={{
                bg: "gray.700",
                _dark: {
                  bg: "gray.600",
                },
                outline: "none",
              }}
            >
              Bekijk product
            </Button>
          </NModal>

        </Flex>


      </Box>
    </Flex>
  )
}




export default Product