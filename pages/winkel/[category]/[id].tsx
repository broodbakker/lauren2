import React from 'react'
import WinkelPage from "../../../components/template/winkelPage"
//data
import inventory from "../../../public/content/products.json"
//functions
import { ConvertProductDataForCart, getProductsByCategory,getPaths } from "../../../util/function"
//typescript
import { IProduct } from "../../../typescript"
//contstants
import {NUMBER_OF_PRODUCTS_PER_PAGE,PRODUCT_CATEGORIES} from "../../../util/constants"

interface IW {
  products: IProduct[]
  category: string
}

const Winkel = ({ products, category }: IW) => {
  return (
    <div>
      <WinkelPage products={products} category={category} />
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getPaths(NUMBER_OF_PRODUCTS_PER_PAGE, PRODUCT_CATEGORIES, inventory.products)

  return { paths, fallback: false }
}

type Params = {
  params: {
    category: string
    id: string
  }
}

// params will contain the id for each generated page.
export async function getStaticProps({ params: { category, id } }: Params) {

  const i = inventory.products

  const products = getProductsByCategory(i, category)

  return { props: { products: products,category } }
}

export default Winkel