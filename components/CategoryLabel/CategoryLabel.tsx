import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./categoy-label.module.css";

/**
 * This is a low-level category label use it only if you really
 * want to use custom label
 */
interface CategoryLabelProps {
  text: string;
  iconDefinition: IconDefinition;
}
const CategoryLabel: React.FC<CategoryLabelProps> = ({
  iconDefinition,
  text,
}) => {
  return (
    <div className={styles["category-label"]}>
      <div className={styles["icon-area"]}>
        <FontAwesomeIcon icon={iconDefinition} />
      </div>
      <div className={`${styles["text-area"]}`}>{text}</div>
    </div>
  );
};

export default CategoryLabel;
