type Product = {
    name: string,
    oldPrice?: number,
    price: number,
    currency: string,
    img: string,
    desc: string,
    categories: Array<string>
}

export default Product