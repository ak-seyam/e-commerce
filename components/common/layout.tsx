import NavBar from "../navbar/Navbar";
import Head from "next/head"
import styles from "./layout.module.css"

export default function CommonLayout({ children }) {
    return (
        <>
            <Head>
                <title>E-Commerce application</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/js/all.min.js"></script>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"></link>
            </Head>
            <NavBar />
            <main className={`${styles["main-content"]}`}>
                {children}
            </main>
        </>
    )
}