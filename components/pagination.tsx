import React, { useEffect } from "react";
import { useRouter } from 'next/router'
//typescript
import { IProduct } from "../typescript"
import {
  Text,
  Stack,
  ChakraProvider
} from "@chakra-ui/react";
import {
  Pagination as Pag,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator
} from "@ajna/pagination";

import { Products } from "./products"

interface IPagination {
  products: IProduct[]
}

export const Pagination = ({ products }: IPagination) => {

  console.log("products", products)
  const router = useRouter()

  // constants
  const outerLimit = 2;
  const innerLimit = 2;

  const {
    pages,
    pagesCount,
    offset,
    currentPage,
    setCurrentPage,
    setIsDisabled,
    isDisabled,
    pageSize,
    setPageSize
  } = usePagination({
    total: products.length,
    limits: {
      outer: outerLimit,
      inner: innerLimit
    },
    initialState: {
      pageSize: 1,
      isDisabled: false,
      currentPage: 1
    }
  });
  useEffect(() => {
  }, [currentPage, pageSize, offset]);

  // handlers
  const handlePageChange = (nextPage: number): void => {
    // -> request new data using the page number
    setCurrentPage(nextPage);

    router.push(`/w/${products[0].category}/${nextPage}`)


  };
  return (
    <ChakraProvider>
      <Stack>
        <Pag
          pagesCount={pagesCount}
          currentPage={currentPage}
          isDisabled={isDisabled}
          onPageChange={handlePageChange}
        >
          <>
            <Products products={products} />
            <PaginationContainer
              align="center"
              justify="center"
              p={4}
              w="full"
            >
              <PaginationPrevious
                _hover={{
                  bg: "purple.100"
                }}
                bg="purple.200"
                borderRadius='0'
                borderLeftRadius="4"
              >
                <Text>Previous</Text>
              </PaginationPrevious>
              <PaginationPageGroup
                isInline
                align="center"
                separator={
                  <PaginationSeparator
                    bg="blue.300"
                    fontSize="sm"
                    w={7}
                    jumpSize={11}
                  />
                }
              >
                {pages.map((page: number) => (
                  <PaginationPage
                    w={7}
                    color="white"
                    bg="purple.500"
                    key={`pagination_page_${page}`}
                    page={page}
                    fontSize="sm"
                    _hover={{
                      bg: "purple.300"
                    }}
                    borderRadius='2'
                    _current={{
                      bg: "purple.300",
                      fontSize: "sm",
                      w: 7
                    }}
                  />
                ))}
              </PaginationPageGroup>
              <PaginationNext
                _hover={{
                  bg: "purple.200"
                }}
                bg="purple.100"
                borderRadius='0'
                borderRightRadius="4"
              >
                <Text>Next</Text>
              </PaginationNext>
            </PaginationContainer>
          </>
        </Pag>
      </Stack>
    </ChakraProvider>
  );
};

