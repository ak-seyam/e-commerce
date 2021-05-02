import Head from "next/head";
import { useFetcher } from "../../../hooks/fetcher";
import Product from "../../../model/Product/Product";
import CardsContainer from "../../cardsContainer/cardsContainer";

interface CategoryProps {
    categoryName: string,
    productsSrc: string
}

const CategoryLayout: React.FC<CategoryProps> = ({ categoryName, productsSrc }) => {
    const [products, loading, error, hasError] = useFetcher(productsSrc);
    return (
        <>
            <h1>{categoryName}</h1>
            {hasError() ? error : ""}
            {loading ? "Loading..." : <CardsContainer products={products} />}
        </>
    )
}

export default CategoryLayout;