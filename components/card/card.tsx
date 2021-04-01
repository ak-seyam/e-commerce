import styles from "./card.module.css"
import Image from "next/image"
import { MouseEventHandler } from "react";


interface CardProps {
    imageURL: string,
    name: string,
    price: number,
    oldPrice?: number,
    currency: string,
    onClick: MouseEventHandler<HTMLDivElement>
}


const Card: React.FC<CardProps> = ({ imageURL, name, price, currency, oldPrice, onClick }) => {
    return (
        <div onClick={onClick} className={`${styles["container"]}`}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
                <Image width={150} height={150} src={imageURL} alt={name} />
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