import { Palette } from "color-thief-react";
import { useContext, useEffect, useState } from "react";
import Product from "../../model/Product/Product";
import { ClickedItemContext, ClickedItemColorContext } from "../../pages/_app";
import Card from "../card/card";
import styles from "./cardsContainer.module.css"
import Link from "next/link"

type CardsConteinerProps = {
    products: Array<Product>
}

const CardsContainer: React.FC<CardsConteinerProps> = ({ products }) => {
    const productColorsContexValues = useContext(ClickedItemColorContext)
    const productContext = useContext(ClickedItemContext)
    return (
        <div className={styles["container"]}>
            {products ? products.map(product => {
                return (
                    <Palette format="hex" src={product.img} colorCount={4}>
                        {({ data, loading, error }) => {
                            if (error) { throw error; }
                            if (loading) { return <div>Loading</div> }
                            return (
                                <Link href={`/product/${product.name}`}>
                                    <Card name={product.name}
                                        currency={product.currency}
                                        imageURL={product.img}
                                        price={product.price}
                                        key={product.name}
                                        oldPrice={product.oldPrice}
                                        onClick={() => {
                                            productColorsContexValues.changeImageColors(data);
                                            productContext.setProduct(product);
                                        }}
                                    />
                                </Link>
                            )
                        }}
                    </Palette>
                )

            }) : "loading..."}
        </div>
    )
}

export default CardsContainer;