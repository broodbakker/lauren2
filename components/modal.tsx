import CompleteProduct from "./completeProduct"

import Link from 'next/link'

import { useState } from "react"
//hooks
import { usePayment } from "../util/hooks/usePayment"
//typescript
import { IProduct } from "../typescript"

declare type ScrollBehavior = "inside" | "outside";

import {
  useDisclosure, Button
  , Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalFooter, chakra, Stack, IconButton, Box
} from '@chakra-ui/react';

import { AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";


interface IModal {
  children: React.ReactNode
  product: IProduct
}

const NModal = ({ children, product }: IModal) => {
  const { cartCount } = usePayment()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('3xl')

  const handleSizeClick = (newSize: any) => {
    setSize(newSize)
    onOpen()
  }

  const handleGoToCart = (newSize: any) => {
    onClose()
  }

  const [scrollBehavior, setScrollBehavior] = useState<ScrollBehavior>('outside')

  return (
    <>
      <Box onClick={() => handleSizeClick("3xl")}>
        {children}
      </Box>

      <Modal scrollBehavior={scrollBehavior} onClose={onClose} size={size} isOpen={isOpen} motionPreset='none'>
        <ModalOverlay />
        <ModalContent>

          <ModalCloseButton />
          <ModalBody>

            <CompleteProduct product={product} />

          </ModalBody>
          <ModalFooter>
            <Stack direction={['column', 'row', 'row']} >

              <Link href="./winkelmandje" >
                <a>
                  <Button colorScheme="purple" onClick={handleGoToCart}>Ga door naar de kassa</Button>
                </a>
              </Link>

              <Button onClick={onClose}>Ga door met shoppen</Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NModal