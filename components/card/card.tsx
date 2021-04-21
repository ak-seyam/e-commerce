import styles from "./card.module.css"
import Image from "next/image"
import { MouseEventHandler, useState } from "react";
import Link from "next/link";


interface CardProps {
    imageURL: string,
    name: string,
    price: number,
    oldPrice?: number,
    currency: string,
    onProductInfoClicked: MouseEventHandler<HTMLDivElement>
}


const Card: React.FC<CardProps> = ({ imageURL, name, price, currency, oldPrice, onProductInfoClicked }) => {

    return (
        <div className={`${styles["container"]}`}>
            <div className={`${styles["action-container"]}`} >
                <div className={`${styles["add-to-cart-container"]}`}>
                    <div className={`${styles["rounded-button"]} ${styles["add-to-cart-button"]}`}>
                        <i className="fas fa-shopping-cart"></i>
                        <div className={`${styles["tooltip"]}`}>Add to cart</div>
                    </div>
                </div>
                <div onClick={onProductInfoClicked} className={`${styles["info-container"]}`}>
                    <div className={`${styles["rounded-button"]} ${styles["info-button"]}`}>
                        <i className="fas fa-info"></i>
                        <div className={`${styles["tooltip"]}`}>More Info</div>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
                <Image objectFit="scale-down" width={150} height={150} src={imageURL} alt={name} />
            </div>
            <div className={`${styles["info"]}`}>
                <span>{name}</span>
                {oldPrice ?
                    <div>
                        <div style={{ fontSize: "12px", textDecoration: "line-through" }}>{`${oldPrice}${currency}`}</div>
                        <div>{`${price}${currency}`}</div>
                    </div> :
                    <span>{`${price}${currency}`}</span>
                }
            </div>
        </div>
    )
}

export default Card;