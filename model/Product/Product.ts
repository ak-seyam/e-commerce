type Product = {
    id: string
    name: string,
    oldprice?: number,
    price: number,
    currency: string,
    img: string,
    desc: string,
    categories: Array<string>
}

export default Product