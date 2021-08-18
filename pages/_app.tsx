import Head from "next/head";
import React, { useState } from "react";
import { Provider } from "react-redux";
import Product from "../model/Product/Product";
import "../styles/globals.css";
import store from "../store";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS

config.autoAddCss = false;

const defaultColorContextValues = {
  clickedImageColors: {},
  changeImageColors: (colors: any) => {},
};

const defaultProductContextValues = {
  product: {},
  setProduct: (product: Product) => {},
};

export const ClickedItemColorContext = React.createContext(
  defaultColorContextValues
);

export const ClickedItemContext = React.createContext(
  defaultProductContextValues
);

function MyApp({ Component, pageProps }) {
  const [imageColor, setImageColors] = useState();
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  return (
    <ClickedItemContext.Provider
      value={{
        product: selectedProduct,
        setProduct: (product: Product) => {
          setSelectedProduct(product);
        },
      }}
    >
      <ClickedItemColorContext.Provider
        value={{
          clickedImageColors: imageColor,
          changeImageColors: (colors) => {
            setImageColors(colors);
          },
        }}
      >
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ClickedItemColorContext.Provider>
    </ClickedItemContext.Provider>
  );
}

export default MyApp;
