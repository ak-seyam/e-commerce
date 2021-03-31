import Product from "../../model/Product/Product";

export function getProductByName(productName: string, limit: number) {}

export function getBestSellingProducts() {
    return Promise.resolve(
[ 
        {
            name: "T-Shirt",
            price: 22,
            oldPrice: 32,
            currency: "$",
            img: "/t-shirt.png"
        },
        {
            name: "Nike Shoes",
            price: 23,
            oldPrice: 30,
            currency: "$",
            img: "/shoes.png"
        },
        {
            name: "Running Shoes",
            oldPrice: 30,
            price: 24,
            currency: "$",
            img: "/shoes2.png"
        },
        {
            name: "Hoddie",
            price: 60,
            oldPrice: 80,
            currency: "$",
            img: "/hoddie.jpg"
        },
        {
            name: "Green Hoddie",
            price: 60,
            oldPrice: 80,
            currency: "$",
            img: "/hoddie2.jpg"
        },
        {
            name: "Orange T-Shirt",
            price: 20,
            oldPrice: 60,
            currency: "$",
            img: "/t-orange.png"
        },
        {
            name: "Women Shoes",
            price: 20,
            oldPrice: 60,
            currency: "$",
            img: "/women-shoese.png"
        },
        {
            name: "T-Shirt",
            price: 22,
            oldPrice: 32,
            currency: "$",
            img: "/t-shirt.png"
        },
        {
            name: "Nike Shoes",
            price: 23,
            oldPrice: 30,
            currency: "$",
            img: "/shoes.png"
        },
        {
            name: "Running Shoes",
            oldPrice: 30,
            price: 24,
            currency: "$",
            img: "/shoes2.png"
        },
        {
            name: "Hoddie",
            price: 60,
            oldPrice: 80,
            currency: "$",
            img: "/hoddie.jpg"
        },
 ]
    )
}