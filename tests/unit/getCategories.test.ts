jest.mock("../../controller/category/getCategories")

import getCategories from "../../controller/category/getCategories"

it("get categories from server", async ()=>{
    const categories = await getCategories()
    expect(Array.isArray(categories)).toBe(true)
})