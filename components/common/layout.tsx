import NavBar from "../navbar/Navbar";
import Head from "next/head"
import styles from "./layout.module.css"

export default function CommonLayout({ children }) {
    return (
        <>
            <Head>
                <title>ECommerce</title>
            </Head>
            <NavBar />
            <main className={`${styles["main-content"]}`}>
                {children}
            </main>
        </>
    )
}