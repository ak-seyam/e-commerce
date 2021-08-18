import CategoryLabel from "./CategoryLabel";
import {
  faMobile,
  faGlasses,
  faShoePrints,
  faTshirt,
  faBaseballBall,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

const _categoryTag = {
  MOBILE: "mobile",
  CLOTHING: "clothing",
  TV: "tv",
  SHOES: "shoes",
  ACCESSORIES: "accessories",
  SPORTS: "sports",
};

export const categoryTag = (category: string) => {
  const catUp = category.toUpperCase();
  const ct = _categoryTag[catUp];
  return ct;
};

const CategoryLabelMap = {
  [_categoryTag.MOBILE]: (
    <CategoryLabel
      key="mobile"
      text="Mobile"
      iconDefinition={faMobile}
    />
  ),
  [_categoryTag.ACCESSORIES]: (
    <CategoryLabel
      key="access"
      text="Accessories"
      iconDefinition={faGlasses}
    />
  ),
  [_categoryTag.SHOES]: (
    <CategoryLabel
      key="shoes"
      text="Shoes"
      iconDefinition={faShoePrints}
    />
  ),
  [_categoryTag.CLOTHING]: (
    <CategoryLabel
      key="clothing"
      text="Clothing"
      iconDefinition={faTshirt}
    />
  ),
  [_categoryTag.SPORTS]: (
    <CategoryLabel
      key="sports"
      text="Sports"
      iconDefinition={faBaseballBall}
    />
  ),
  [_categoryTag.TV]: (
    <CategoryLabel key="tv" text="TV" iconDefinition={faTv} />
  ),
};

export const CategoryLabelBuilder = (category: string): JSX.Element => {
  return CategoryLabelMap[categoryTag(category)];
};
