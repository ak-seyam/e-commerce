import styles from "./categoy-label.module.css"

/**
 * This is a low-level category label use it only if you really
 * want to use custom label
 */
interface CategoryLabelProps {
    text: string,
    categoryClassName: string
}
const CategoryLabel: React.FC<CategoryLabelProps> = ({ categoryClassName, text }) => {
    return <div className={styles["category-label"]}>
        <div className={styles["icon-area"]}>
            <i className={categoryClassName}></i>
        </div>
        <div className={`${styles["text-area"]}`}>{text}</div>
    </div>
}

export default CategoryLabel;