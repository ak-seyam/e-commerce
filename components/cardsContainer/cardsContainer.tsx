import { Palette } from "color-thief-react";
import { useContext, useEffect, useState } from "react";
import Product from "../../model/Product/Product";
import { ClickedItemContext, ClickedItemColorContext } from "../../pages/_app";
import Card from "../card/card";
import styles from "./cardsContainer.module.css"
import Link from "next/link"
import { isDark, lighen as lighten } from "../../utils/DarkChecker";
import { useRouter } from "next/router";

type CardsConteinerProps = {
    products: Array<Product>
}

const CardsContainer: React.FC<CardsConteinerProps> = ({ products }) => {
    const productColorsContextValues = useContext(ClickedItemColorContext)
    const productContext = useContext(ClickedItemContext)
    const router = useRouter()
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
                                        onProductInfoClicked={() => {
                                            productColorsContextValues.changeImageColors([isDark(lighten(data[0])), ...data]);
                                            productContext.setProduct(product);
                                            router.push(`/products/${product.name}`)
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