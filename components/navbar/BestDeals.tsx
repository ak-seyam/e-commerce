import styles from "./navbar.module.css"

interface BestDealsProps {
    fontSize?: string,
    bestRef?: any
}

export default function BestDeals({ fontSize, bestRef }: BestDealsProps) {
    return (
        <div className={`${styles["aligned-element"]} ${styles["best-deals-container"]} `}>
            <span ref={bestRef} style={{ fontSize }} className={`${styles["best"]}`}>Best</span>
            <span style={{ fontSize }} className={`${styles["deals"]}`}>Deals</span>
        </div>
    );
}