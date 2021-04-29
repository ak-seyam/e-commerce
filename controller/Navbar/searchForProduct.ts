import { getProductByName } from "../product/Product";

export default async function searchForProduct(productName: string, limit: number = 5) {
    return await getProductByName(productName)
}