import { FC } from "react";
import styles from "./my-account-modal.module.css";
import ModalScaffold from "./ModalScaffold";

interface MyAccountModalProps {
  show: boolean;
  onHide: () => void;
}

const Modal: FC<MyAccountModalProps> = ({ children, show, onHide }) => {
  return (
    <>
      {show && (
        <ModalScaffold selector="modal">
          <div className={`${styles["black-back"]}`} onClick={onHide}>
          </div>
          <div role="dialog" className={`${styles["dialog"]}`}>
            {children}
          </div>
        </ModalScaffold>
      )}
    </>
  );
};

export default Modal;
