//components
import { Pagination } from "../pagination"
import { useRouter } from 'next/router'
import { Layout } from "../layout"
//style
import {
  Box, Center
} from '@chakra-ui/react';

import { IProduct } from "../../typescript"

import {
  Select,
} from "chakra-react-select";

const options = [
  {
    label: "paarden",
    value: "paarden",
  },
  {
    label: "stallen",
    value: "stallen",
  },
  {
    label: "dekjes",
    value: "dekjes",
  }
]

interface Ie {
  label: string
  value: string
}

interface IWinkelPage {
  products: IProduct[]
  category: string
}

const WinkelPage = ({ products, category }: IWinkelPage) => {
  const router = useRouter()

  const handleChange = (e: any) => {
    router.push(`/winkel/${e.value}/1`)
  }

  return (
    <Layout>
      <>
        <Center alignItems='center'>
          <Box pt="10rem" w="sm">
            <Select
              defaultValue={{ label: category, value: category }}
              selectedOptionColor="purple"
              options={options}
              onChange={handleChange}
            />
          </Box>
        </Center>

        <Box mb="8">
          <Pagination products={products} />
        </Box>
      </>
    </Layout>
  )
}

export default WinkelPage