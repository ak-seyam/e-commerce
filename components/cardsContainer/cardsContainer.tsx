import { useEffect, useState } from "react";
import Product from "../../model/Product/Product";
import Card from "../card/card";
import styles from "./cardsContainer.module.css"


type CardsConteinerProps = {
    products: Array<Product>
}

const CardsContainer: React.FC<CardsConteinerProps> = ({ products }) => {
    return (
        <div className={styles["container"]}>
            {products? products.map(product => {
                return <Card name={product.name}
                    currency={product.currency}
                    imageURL={product.img}
                    price={product.price}
                    key={product.name}
                    oldPrice={product.oldPrice}
                     />
            }): "loading..."}
        </div>
    )
}

export default CardsContainer;