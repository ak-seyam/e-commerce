import { Palette } from "color-thief-react";
import { useContext, useEffect, useState } from "react";
import Product from "../../model/Product/Product";
import { ClickedItemContext, ClickedItemColorContext } from "../../pages/_app";
import Card from "../card/card";
import styles from "./cardsContainer.module.css";
import Link from "next/link";
import { isDark, lighen as lighten } from "../../utils/DarkChecker";
import { useRouter } from "next/router";
import { useAddingProduct } from "../../hooks/cart/AddProduct";
import Feedback from "../feedback/Feedback";

type CardsContainerProps = {
  products: Array<Product>;
};

const CardsContainer: React.FC<CardsContainerProps> = ({ products }) => {
  const productColorsContextValues = useContext(ClickedItemColorContext);
  const productContext = useContext(ClickedItemContext);
  const router = useRouter();
  const [feedbackShow, setFeedbackShow] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState("")
  const productAdder = useAddingProduct();

  const feedbackHandler = (feedbackMessage: string) => {
    setFeedbackMessage(feedbackMessage);
    setFeedbackShow(true);
    setTimeout(() => {
      setFeedbackShow(false);
      setFeedbackMessage("");
    }, 2000);
  }

  return (
    <div className={styles["container"]}>
      {products
        ? products.map((product) => {
          return (
            <Palette key={product.id} format="hex" src={product.img} colorCount={4}>
              {({ data, loading, error }) => {
                if (error) {
                  throw error;
                }
                if (loading) {
                  return <div>Loading</div>;
                }
                return (
                  <>
                    <Card
                      onAddToCart={() => {
                        productAdder(product)
                        feedbackHandler(`${product.name} was added to your category`)
                      }}
                      productId={product.id}
                      name={product.name}
                      currency={product.currency}
                      imageURL={product.img}
                      price={product.price}
                      key={product.name}
                      oldPrice={product.oldprice}
                      onProductInfoClicked={() => {
                        productColorsContextValues.changeImageColors([
                          isDark(lighten(data[0])),
                          ...data,
                        ]);
                        productContext.setProduct(product);
                        router.push(`/products/${product.name}`);
                      }}
                    />
                  </>
                );
              }}
            </Palette>
          );
        })
        : "loading..."}
      <Feedback containerId="fb" notification={feedbackMessage} show={feedbackShow} />
    </div>
  );
};

export default CardsContainer;
