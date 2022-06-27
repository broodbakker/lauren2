import React from 'react'
import WinkelPage from "../../../components/template/winkelPage"
//data
import inventory from "../../../public/content/products.json"
//functions
import { ConvertProductDataForCart, getProductsByCategory } from "../../../util/function"
//typescript
import { IProduct } from "../../../typescript"

interface IW {
  products: IProduct[]
  category: string
}

const W = ({ products, category }: IW) => {
  return (
    <div>
      <WinkelPage products={products} category="paarden" />
    </div>
  )
}

const getPaths = (numberOfProductPerPage: number, category: string[], products: IProduct[]) => {

  const t1 = category.map((c) => {
    const test = Math.ceil(getNumberOfProducts(products, c) / numberOfProductPerPage)

    return getSubjectPath(c, test)


  })


  return t1.flat()

}

const convertNumberToArray = (num: number) => Array.from(Array(num).keys())

const getNumberOfProducts = (products: IProduct[], category: string) => products.filter((product) =>
  product.category === category).length



const getSubjectPath = (category: string, test: number) => convertNumberToArray(test).map((arr: number) => ({
  params: {
    c: category,
    id: (arr + 1).toString(),
  }
}))

export async function getStaticPaths() {
  const numberOfProductPerPage = 6
  const category = ["paarden", "stallen", "dekjes"]

  const paths = getPaths(numberOfProductPerPage, category, inventory.products)


  return { paths, fallback: false }
}

type Params = {
  params: {
    c: string
    id: string
  }
}

// params will contain the id for each generated page.
export async function getStaticProps({ params: { c, id } }: Params) {

  const i = inventory.products

  console.log("i", i)

  const products = getProductsByCategory(i, c)

  console.log("p", products)

  return { props: { products, category: c } }
}

export default W