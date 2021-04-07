const Label: React.FC<{ text: string, iconClass: string }> = ({ text, iconClass }) => {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ backgroundColor: "#101010" }}><i className={iconClass}></i></div>
            <div>{text}</div>
        </div>
    )
}

export default Label;