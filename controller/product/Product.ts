import Product from "../../model/Product/Product";

const products = [
    {
        name: "T-Shirt",
        price: 22,
        oldPrice: 32,
        currency: "$",
        img: "/t-shirt.png",
        desc: "Qui officia aute sit Lorem culpa elit ad. Magna commodo dolor aute laborum culpa fugiat incididunt ea. Labore sit ex cillum esse irure adipisicing mollit Lorem. Id anim excepteur adipisicing enim id. Nulla aute anim amet do exercitation aliquip. Elit nisi proident labore esse aute aute ad exercitation consequat. Irure amet anim velit et minim.",
        categories: ["clothing"]
    },
    {
        name: "Nike Shoes",
        price: 23,
        oldPrice: 30,
        currency: "$",
        img: "/shoes.png",
        desc: "Qui officia aute sit Lorem culpa elit ad. Magna commodo dolor aute laborum culpa fugiat incididunt ea. Labore sit ex cillum esse irure adipisicing mollit Lorem. Id anim excepteur adipisicing enim id. Nulla aute anim amet do exercitation aliquip. Elit nisi proident labore esse aute aute ad exercitation consequat. Irure amet anim velit et minim.",
        categories: ["sports", "clothing"]
    },
    {
        name: "Running Shoes",
        oldPrice: 30,
        price: 24,
        currency: "$",
        img: "/shoes2.png",
        desc: "Qui officia aute sit Lorem culpa elit ad. Magna commodo dolor aute laborum culpa fugiat incididunt ea. Labore sit ex cillum esse irure adipisicing mollit Lorem. Id anim excepteur adipisicing enim id. Nulla aute anim amet do exercitation aliquip. Elit nisi proident labore esse aute aute ad exercitation consequat. Irure amet anim velit et minim.",
        categories: ["sports", "clothing"]
    },
    {
        name: "Hoddie",
        price: 60,
        oldPrice: 80,
        currency: "$",
        img: "/hoddie.jpg",
        desc: "Qui officia aute sit Lorem culpa elit ad. Magna commodo dolor aute laborum culpa fugiat incididunt ea. Labore sit ex cillum esse irure adipisicing mollit Lorem. Id anim excepteur adipisicing enim id. Nulla aute anim amet do exercitation aliquip. Elit nisi proident labore esse aute aute ad exercitation consequat. Irure amet anim velit et minim.",
        categories: ["clothing"]
    },
    {
        name: "Green Hoddie",
        price: 60,
        oldPrice: 80,
        currency: "$",
        img: "/hoddie2.jpg",
        desc: "Qui officia aute sit Lorem culpa elit ad. Magna commodo dolor aute laborum culpa fugiat incididunt ea. Labore sit ex cillum esse irure adipisicing mollit Lorem. Id anim excepteur adipisicing enim id. Nulla aute anim amet do exercitation aliquip. Elit nisi proident labore esse aute aute ad exercitation consequat. Irure amet anim velit et minim.",
        categories: ["clothing"]
    },
    {
        name: "Orange T-Shirt",
        price: 20,
        oldPrice: 60,
        currency: "$",
        img: "/t-orange.png",
        desc: "Qui officia aute sit Lorem culpa elit ad. Magna commodo dolor aute laborum culpa fugiat mncididunt ea. Labore sit ex cillum esse irure adipisicing mollit Lorem. Id anim excepteur adipisicing enim id. Nulla aute anim amet do exercitation aliquip. Elit nisi proident labore esse aute aute ad exercitation consequat. Irure amet anim velit et minim.",
        categories: ["clothing"]
    },
    {
        name: "Women Shoes",
        price: 20,
        oldPrice: 60,
        currency: "$",
        img: "/women-shoese.png",
        desc: "Qui officia aute sit Lorem culpa elit ad. Magna commodo dolor aute laborum culpa fugiat incididunt ea. Labore sit ex cillum esse irure adipisicing mollit Lorem. Id anim excepteur adipisicing enim id. Nulla aute anim amet do exercitation aliquip. Elit nisi proident labore esse aute aute ad exercitation consequat. Irure amet anim velit et minim.",
        categories: ["clothing", "shoes"]
    },
    {
        name: "Sun glasses",
        price: 50,
        oldPrice: 70,
        currency: "$",
        img: "/sung.png",
        desc: "Ex nostrud laborum fugiat sunt proident ullamco mollit mollit ad et ex enim quis magna. Ad voluptate quis consequat deserunt commodo proident est laborum amet. Amet labore aute cillum velit cupidatat aliqua elit. Aute amet ad consequat eu laboris sunt dolor ad dolor id do. Aliqua officia sint aliquip velit veniam tempor ullamco ut in proident nostrud. Sunt nisi mollit culpa ea tempor laboris ex qui velit. Aute ipsum labore veniam eu officia in aliquip labore nisi mollit.",
        categories: ["accessories"],
    },
    {
        name: "IPhone X",
        price: 1000,
        oldPrice: 1200,
        currency: "$",
        img: "/iphonex.png",
        desc: "Ex nostrud laborum fugiat sunt proident ullamco mollit mollit ad et ex enim quis magna. Ad voluptate quis consequat deserunt commodo proident est laborum amet. Amet labore aute cillum velit cupidatat aliqua elit. Aute amet ad consequat eu laboris sunt dolor ad dolor id do. Aliqua officia sint aliquip velit veniam tempor ullamco ut in proident nostrud. Sunt nisi mollit culpa ea tempor laboris ex qui velit. Aute ipsum labore veniam eu officia in aliquip labore nisi mollit.",
        categories: ["mobile"],
    }
]
export function getProductByName(productName: string) {
    return Promise.resolve(products.filter(p => {
        return p.name === productName
    })[0])
}

export function getBestSellingProducts() {
    return Promise.resolve(
        products
    )
}