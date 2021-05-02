import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom";
import styles from "./notifications.module.css"

interface NotificationProps {
    containerId: string;
    notification: string;
    show: boolean;
}

const Feedback: React.FC<NotificationProps> = ({ containerId: selector, notification, show }) => {
    const [mounted, setMounted] = useState(false);

    const selectorRef = useRef(null);
    useEffect(() => {
        selectorRef.current = document.getElementById(selector)
        setMounted(true);
    }, [selector])
    return (
        mounted &&
        createPortal(
            <div style={{
                transition: "0.2s",
                opacity: show ? 1.0 : 0.0,
                transform: `translateY(${show ? "0%" : "20%"})`,
                position: "fixed",
                bottom: "7%",
                right: "7%",
            }} className={`${styles["container"]}`}>
                {notification}
            </div>,
            selectorRef.current
        )
    )
}

export default Feedback