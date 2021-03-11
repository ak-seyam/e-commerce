/**
 * calls a web service to get number of products products
 */
export default async function getProductByName(productName: string, limit: number) {
    if (productName.length === 0) return []
    const fakeData = ["Screen", "Mobile", "Car", "T-shirt", "Football", "Apple", "Apple and Orange"]
    return Promise.resolve(fakeData.filter(value => {
        return value.toLowerCase().startsWith(productName.toLowerCase())
    }).slice(0, limit))
}