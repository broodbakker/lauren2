export { }
// import React from 'react'
// import WinkelPage from "../../components/template/winkelPage"
// //functions
// import { getProductsByCategory, getPaths } from "../../util/function"
// //typescript
// import { IProduct } from "../../typescript"
// //contstants
// import { NUMBER_OF_PRODUCTS_PER_PAGE, PRODUCT_CATEGORIES } from "../../util/constants"

// import { fetchProducts } from "../../util/api"

// interface IW {
//   products: IProduct[]
//   category: string
// }

// const Winkel = ({ products, category }: IW) => {
//   return (
//     <WinkelPage products={products} category={category} />
//   )
// }

// export async function getStaticPaths() {

//   const products = await fetchProducts()

//   console.log(products, "products")

//   const paths = getPaths(NUMBER_OF_PRODUCTS_PER_PAGE, PRODUCT_CATEGORIES, products.products)

//   return { paths, fallback: false }
// }

// type Params = {
//   params: {
//     category: string
//     id: string
//   }
// }
// // params will contain the id for each generated page.
// export async function getStaticProps({ params: { category, id } }: Params) {

//   const allProducts = await fetchProducts()

//   const products = getProductsByCategory(allProducts.products, category)

//   return { props: { products: products, category } }
// }

// export default Winkel