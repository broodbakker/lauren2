import React from 'react'
//data
import inventory from "../public/content/products.json"
//template
import HomePage from "../components/template/homepage"

const Home = () => {
  const products = inventory.products
  return (
    <HomePage />
  )
}



export default Home