import { Palette } from 'color-thief-react';
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react';
import { getProductByName } from '../../controller/product/Product';
import Product from '../../model/Product/Product';
import { ClickedItemColorContext } from '../_app';
export default function ProductPage() {
    const router = useRouter();
    const { productName } = router.query;
    const colorsContext = useContext(ClickedItemColorContext)
    const [product, setProduct] = useState<Product | undefined>(undefined)


    useEffect(() => {
        const getProductFromName = async () => {
            if (productName) {
                console.log(productName);
                if (!Array.isArray(productName)) {
                    console.log(productName);
                    const prod = await getProductByName(productName)
                    setProduct(prod)
                    console.log(prod);
                }
            }
        }
        getProductFromName()
    }, [productName]);

    const colorPage = (content) => {

        return <>
            {colorsContext.clickedImageColors ?
                <div style={{ height: "100vh", width: "100vw", backgroundColor: colorsContext.clickedImageColors[0] }}>{content}</div>
                : product ?
                    <Palette format="hex" src={product.img} colorCount={4}>
                        {({ data, loading, error }) => {
                            if (loading) { return "Loading..." }
                            if (!data) { return "Loading..." }
                            return <div style={{ height: "100vh", width: "100vw", backgroundColor: data[0] }}>{content}</div>
                        }}
                    </Palette> : "Loading..."
            }
        </>
    }

    return colorPage(<h1>Hello</h1>)

}