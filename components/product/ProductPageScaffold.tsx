import Link from "next/link";
import React from "react";
import Product from "../../model/Product/Product";
import { CategoryLabelBuilder } from "../CategoryLabel/CategoryLabelBuilder";
import NavBar from "../navbar/Navbar";
import styles from "./ProductPageScaffold.module.css";

interface Props {
    product: Product
}

const ProductPageScaffold: React.FC<Props> = ({ product }) => {
    return (<>
        {product ? <>
            <Link href="/"><div style={{
                position: "fixed",
                top: 0,
                left: 0,
                display: "inline",
                fontSize: "32px",
                margin: "32px",
                cursor: "pointer"
            }}><i className="fas fa-arrow-left"></i></div></Link>
            <div className={`${styles["container"]}`}>
                <div className={`${styles["area"]} ${styles["text-container"]}`}>
                    <div className={`${styles["name"]}`}>{product.name}</div>
                    <div className={`${styles["desc"]}`}>{product.desc}</div>
                    {/* This is going to be for category cards*/}
                    <div style={{ display: "flex" }} className={`${styles["categories-container"]}`}>
                        {product.categories.map(cat => CategoryLabelBuilder(cat))}
                    </div>
                    <div className={`${styles["add-to-cart-container"]}`}>
                        <span style={{fontSize: "26px"}}>Price: {product.price}{product.currency}</span>
                        <br />
                        <span>Add to cart</span>
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                </div>
                <div className={`${styles["area"]}`}>
                    <div className={`${styles["product-img-container"]}`}>
                        <img src={product.img} alt="product image" />
                    </div>
                </div>
            </div></> : <h1>Loading...</h1>}
    </>)
}

export default ProductPageScaffold;