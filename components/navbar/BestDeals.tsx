import React from "react";
import styles from "./navbar.module.css"

interface BestDealsProps {
    fontSize?: number
}

const BestDeals = React.forwardRef<HTMLSpanElement, BestDealsProps>((props, ref) => (
    <div className={`${styles["aligned-element"]} ${styles["best-deals-container"]} `}>
        <span ref={ref} style={{ fontSize: props.fontSize }} className={`${styles["best"]}`}>Best</span>
        <span style={{ fontSize: props.fontSize }} className={`${styles["deals"]}`}>Deals</span>
    </div>
)
)

export default BestDeals;