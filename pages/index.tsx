import Head from "next/head"
import { useContext, useEffect, useState } from "react"
import CardsContainer from "../components/cardsContainer/cardsContainer"
import Drawer from "../components/common/Drawer/drawer"
import CommonLayout from "../components/common/layout"
import InsideLines from "../components/hocs/InsideLines"
import BestDeals from "../components/navbar/BestDeals"
import { getBestDealsProducts } from "../controller/product/Product"
import Product from "../model/Product/Product"
export default function Landing() {
  const [bestSellingProducts, setBestSellingProducts] = useState<Array<Product> | undefined>(undefined)
  const [loadingProducts, setLoadingProducts] = useState(false)

  useEffect(() => {
    const getBSProds = async () => {
      const prods = await getBestDealsProducts()
      setBestSellingProducts(prods)
      setLoadingProducts(false)
    }
    getBSProds()
  }, [])
  return (
    <>
      <CommonLayout>
        <Drawer></Drawer>
        {loadingProducts ? "loading..." : ""}
        <InsideLines disblaLines id="best-deals">
          <BestDeals fontSize={70} />
        </InsideLines>
        <CardsContainer products={bestSellingProducts} />
      </CommonLayout>
    </>
  )
}