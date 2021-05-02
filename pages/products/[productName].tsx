import { Palette } from 'color-thief-react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react';
import ProductPageScaffold from '../../components/product/ProductPageScaffold';
import { getProductByName } from '../../controller/product/Product';
import Product from '../../model/Product/Product';
import { isDark, lighen } from '../../utils/DarkChecker';
import { ClickedItemColorContext } from '../_app';
export default function ProductPage() {
    const router = useRouter();
    const { productName } = router.query;
    const [title, setTitle] = useState(productName)
    const colorsContext = useContext(ClickedItemColorContext)
    const [product, setProduct] = useState<Product | undefined>(undefined)

    useEffect(() => {
        const getProductFromName = async () => {
            if (productName) {
                if (typeof productName === "string")
                    setTitle(productName)
                if (!Array.isArray(productName)) {
                    const prod = await getProductByName(productName)
                    setProduct(prod[0])
                }
            }
        }
        getProductFromName()
    }, [productName]);

    const colorPage = (content) => {
        return (<>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
                <title>{title}</title>
            </Head>
            <>
                {colorsContext.clickedImageColors ?
                    <div style={{ height: "100vh", width: "100vw", backgroundColor: lighen(colorsContext.clickedImageColors[1]), color: colorsContext.clickedImageColors[0] ? "#fff" : "#000" }}>{content}</div>
                    : product ?
                        <Palette format="hex" src={product.img} colorCount={4}>
                            {({ data, loading, error }) => {
                                if (loading) { return "Loading..." }
                                if (!data) { return "Loading..." }
                                return <div style={{
                                    height: "100vh", width: "100vw", backgroundColor: lighen(data[0]),
                                    color: isDark(lighen(data[0])) ? "#fff" : "#000"
                                }}>{content}</div>
                            }}
                        </Palette> : "Loading..."
                }
            </>
        </>)
    }

    return colorPage(<ProductPageScaffold product={product}></ProductPageScaffold>)

}