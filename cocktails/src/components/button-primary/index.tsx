import "./styles.css";

interface ButtonPrimary {
    label: string,
    onClick: () => void
}

export function ButtonPrimary({label, onClick}: ButtonPrimary) {
    return (
        <button className="btn-primary" onClick={onClick}>
            {label}
        </button>
    )
}