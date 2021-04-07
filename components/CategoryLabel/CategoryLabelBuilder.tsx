import CategoryLabel from "./CategoryLabel";

const _categoryTag = {
    MOBILE: "mobile",
    CLOTHING: "clothing",
    TV: "tv",
    SHOES: "shoes",
    ACCESSORIES: "accessories",
    SPORTS: "sports"
}

export const categoryTag = (category: string) => {
    console.log();
    const catUp = category.toUpperCase()
    console.log(catUp);
    const ct = _categoryTag[catUp]
    console.log("the tag is", ct);
    return ct;
}

const CategoryLabelMap = {
    [_categoryTag.MOBILE]: <CategoryLabel key="mobile" text="Mobile" categoryClassName="fa fa-mobile" />,
    [_categoryTag.ACCESSORIES]: <CategoryLabel key="access" text="Accessories" categoryClassName="fas fa-glasses" />,
    [_categoryTag.SHOES]: <CategoryLabel key="shoes" text="Shoes" categoryClassName="fas fa-shoe-prints" />,
    [_categoryTag.CLOTHING]: <CategoryLabel key="clothing" text="Clothing" categoryClassName="fas fa-tshirt" />,
    [_categoryTag.SPORTS]: <CategoryLabel key="sports" text="Sports" categoryClassName="fas fa-baseball-ball" />,
    [_categoryTag.TV]: <CategoryLabel key="tv" text="TV" categoryClassName="fas fa-tv" />,
}

export const CategoryLabelBuilder = (category: string): JSX.Element => {
    console.log("called wth", category);
    return CategoryLabelMap[categoryTag(category)];
}
