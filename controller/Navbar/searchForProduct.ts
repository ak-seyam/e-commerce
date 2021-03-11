import getProductByName from "../product/getProductsByName";

export default async function searchForProduct(productName: string, limit: number = 5) {
    return await getProductByName(productName, limit)
}