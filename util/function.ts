//typescript
import { IProduct, IProductCart } from "../typescript"

export const ConvertProductDataForCart = ({ name, id, price, image, currency, description, category }: IProduct): IProductCart => ({
  name,
  id,
  price,
  description,
  currency,
  image: image[0],
  category
})

export const renderWhiteSpace = (item: string) => item === " " ? "\u00A0" : item

export const formatPrice = (price: number) => `${(price / 100).toFixed(2)} €`

export const getProductsByCategory = (products: IProduct[], category: string) =>
  products.reduce((previousValue: IProduct[], currentValue) => {
    if (currentValue.category === category) {
      previousValue.push(currentValue);
    }
    return previousValue;
  }, []);


export const getPaths = (numberOfProductPerPage: number, category: string[], products: IProduct[]) => {

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
    category,
    id: (arr + 1).toString(),
  }
}))
