interface InsideLinesProps {
    disblaLines?: boolean,
    disablePadding?: boolean,
    id?: string
}

const InsideLines: React.FC<InsideLinesProps> = ({ children, disablePadding, disblaLines, id }) => {
    return (
        <div style={{ padding: disablePadding ? undefined : "16px", display: "flex", flexDirection: "row", alignItems: "center" }}>
            {
                disblaLines ? "" : <div style={{ height: "0.5vh", width: "10vw", backgroundColor: "#000" }}></div>
            }
            <div id={id}>
                {children}
            </div>
            {
                disblaLines ? "" : <div style={{ height: "0.5vh", width: "10vw", backgroundColor: "#000" }}></div>
            }
        </div>
    )
}

export default InsideLines;