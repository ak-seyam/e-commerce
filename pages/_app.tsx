import React, { useState } from 'react'
import Product from '../model/Product/Product'
import '../styles/globals.css'

const defaultColorContextValues = {
  clickedImageColors: {},
  changeImageColors: (colors: any) => { }
}

const defaultProductContextValues = {
  product: {},
  setProduct: (product: Product) => { }
}

export const ClickedItemColorContext = React.createContext(defaultColorContextValues)

export const ClickedItemContext = React.createContext(defaultProductContextValues)

function MyApp({ Component, pageProps }) {
  const [imageColor, setImageColors] = useState()
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>()
  return (
    <ClickedItemContext.Provider value={{
      product: selectedProduct,
      setProduct: (product: Product) => {
        setSelectedProduct(product)
      }
    }}>
      <ClickedItemColorContext.Provider value={{
        clickedImageColors: imageColor,
        changeImageColors: (colors) => {
          setImageColors(colors)
        }
      }}>
        <Component {...pageProps} />
      </ClickedItemColorContext.Provider>

    </ClickedItemContext.Provider>
  )
}

export default MyApp
