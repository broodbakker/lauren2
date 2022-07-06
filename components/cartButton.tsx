import { useRouter } from 'next/router'
//hooks
import { usePayment } from "../util/hooks/usePayment"
import {
  chakra, IconButton, Box
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from "react-icons/ai";

interface ICartButton {
  cartCount: number | undefined
}

export const CartButton = () => {
  const router = useRouter()
  const { cartCount } = usePayment()
  return (
    <IconButton
      aria-label="label"
      size="md"
      isRound
      ml={8}
      bg="purple.50"
      disabled={cartCount === 0}
      onClick={() => router.push('./winkelmandje')}
      icon={
        <>
          <AiOutlineShoppingCart />
          <chakra.span
            pos="absolute"
            top="-1px"
            right="-1px"
            px={2}
            py={1}
            fontSize="xs"
            fontWeight="bold"
            lineHeight="none"
            color="red.100"
            transform="translate(50%,-50%)"
            bg="red.600"
            rounded="full"
          >
            {cartCount}
          </chakra.span>
        </>
      }
    />
  )
}


