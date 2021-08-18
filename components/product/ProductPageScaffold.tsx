import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Product from "../../model/Product/Product";
import { CategoryLabelBuilder } from "../CategoryLabel/CategoryLabelBuilder";
import Feedback from "../feedback/Feedback";
import styles from "./ProductPageScaffold.module.css";
import { useAddingProduct } from "../../hooks/cart/AddProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

interface Props {
  product: Product;
}

const ProductPageScaffold: React.FC<Props> = ({ product }) => {
  const router = useRouter();
  const productAdder = useAddingProduct();
  const [feedbackShow, setFeedBackShow] = useState(false);

  const addToCartFeedbackHandler = () => {
    setFeedBackShow(true);
    setTimeout(() => {
      setFeedBackShow(false);
    }, 2000);
  };

  return (
    <>
      {product ? (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              display: "inline",
              fontSize: "32px",
              margin: "32px",
              cursor: "pointer",
            }}
            onClick={() => {
              router.back();
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className={`${styles["container"]}`}>
            <div className={`${styles["area"]} ${styles["text-container"]}`}>
              <div className={`${styles["name"]}`}>{product.name}</div>
              <div className={`${styles["desc"]}`}>{product.desc}</div>
              {/* This is going to be for category cards*/}
              <div
                style={{ display: "flex" }}
                className={`${styles["categories-container"]}`}
              >
                {product.categories.map((cat) => CategoryLabelBuilder(cat))}
              </div>
              <div className={`${styles["add-to-cart-container"]}`}>
                <span style={{ fontSize: "26px" }}>
                  Price: {product.price}
                  {product.currency}
                </span>
                <br />
                <span
                  onClick={() => {
                    // add item to local storage
                    // add item to state
                    addToCartFeedbackHandler();
                    productAdder(product);
                  }}
                >
                  Add to cart!
                </span>
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </div>
            <div className={`${styles["area"]}`}>
              <div className={`${styles["product-img-container"]}`}>
                <img src={product.img} alt="product image" />
              </div>
            </div>
            <Feedback
              containerId="fb"
              notification={`${product.name} was added to cart`}
              show={feedbackShow}
            />
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default ProductPageScaffold;
