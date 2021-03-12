export default async function getCategories() {
    return Promise.resolve([
        {
            name: "Mobile",
            listItems: [
                "Samsung",
                "Nokia",
                "Apple",
                "Google"]
        }
        , {
            name: "TV",
            listItems: [
                "Toshiba",
                "Samsung"
            ]
        }, {
            name: "Clothing",
            listItems: [
                "Zara"
            ]
        }, {
            name: "Shoes",
            listItems: [
                "Nike",
                "Adidas",
                "New Balance"
            ]
        }, {
            name: "Accessories",
            listItems: [
                "Hermes",
                "Armani",
                "Burberry"
            ]
        }, {
            name: "Sport",
            listItems: [
                "Nike",
                "Adidas",
                "Puma",
                "Champion"
            ]
        }])
}