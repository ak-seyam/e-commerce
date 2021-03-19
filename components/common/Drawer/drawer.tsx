import { useEffect, useState } from "react"
import styles from "./drawer.module.css"

export default function Drawer() {
    const [selectedPage, setSelectedPage] = useState(0)
    const handleIndicatorClicked = (index) => {
        console.log(index);

        setSelectedPage(index)
    }
    useEffect(() => {
        setInterval(() => {
            setSelectedPage((prevSelectedPage) => {
                return (prevSelectedPage + 1) % 5
            })
        }, 10000)
    }, [])
    return (
        <div className={`${styles["container"]}`}>
            <div style={{ transform: `translateY(${-100 * selectedPage}%)`, transition: "0.5s" }}>
                <div className={`${styles["banner"]}`}>
                    Banner 1
                </div>
                <div className={`${styles["banner"]}`}>
                    Banner 2
                </div>
                <div className={`${styles["banner"]}`}>
                    Banner 3
                </div>
                <div className={`${styles["banner"]}`}>
                    Banner 4
                </div>
                <div className={`${styles["banner"]}`}>
                    Banner 5
                </div>
            </div>
            <span className={`${styles["indicators"]}`}>
                <span onClick={() => handleIndicatorClicked(0)} className={`${styles["indicator"]} ${selectedPage === 0 ? styles["selected"] : styles["unselected"]}`}></span>
                <span onClick={() => handleIndicatorClicked(1)} className={`${styles["indicator"]} ${selectedPage === 1 ? styles["selected"] : styles["unselected"]}`}></span>
                <span onClick={() => handleIndicatorClicked(2)} className={`${styles["indicator"]} ${selectedPage === 2 ? styles["selected"] : styles["unselected"]}`}></span>
                <span onClick={() => handleIndicatorClicked(3)} className={`${styles["indicator"]} ${selectedPage === 3 ? styles["selected"] : styles["unselected"]}`}></span>
                <span onClick={() => handleIndicatorClicked(4)} className={`${styles["indicator"]} ${selectedPage === 4 ? styles["selected"] : styles["unselected"]}`}></span>
            </span>
        </div>
    )
}