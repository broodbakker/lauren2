import netlifyIdentity from "netlify-identity-widget"

import { DEV_URL, PROD_URL } from './constants'

export const fetchPayment = (data: any[]) => fetch("/.netlify/functions/stripe", {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    Authorization: `Bearer ${process.env.STRIPE_SECRET}`
  }
}).then((response) => {
  return response.json();
})

const dev = process.env.NODE_ENV !== 'production';

const url = dev ? DEV_URL : PROD_URL;

const d = "http://localhost:8888"

const completeUrl = `${process.env.URL}/.netlify/functions/get-products`


export const fetchProducts = () => fetch(completeUrl)
  .then((res) => {
    console.log("res", res)
    return res.json()
  })

export const FetchUser = (user: null | netlifyIdentity.User) => fetch("/.netlify/functions/user", {
  headers: {
    Authorization: `Bearer ${user?.token?.access_token}`
  }
}).then(res => {
  return res
})
