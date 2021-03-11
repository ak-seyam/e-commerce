jest.mock('../../controller/product/getProductsByName')

import searchForProduct from "../../controller/Navbar/searchForProduct"

it("get data ordered correctly", async () => {
    const searchTermA = ""
    const productsA = await searchForProduct(searchTermA)
    expect(productsA).toEqual([])
    const searchTermB = "apple"
    const productsB = await searchForProduct(searchTermB)
    expect(productsB).toEqual(["Apple", "Apple and Orange"])
    const productC = await searchForProduct(searchTermB, 1)
    expect(productC).toEqual(["Apple"])
})
