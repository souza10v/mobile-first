import "./style.css";

interface PrimaryInputsProps {
    label: string,
    value: string,
    onChange: (value: string) => void
}

export function PrimaryInputs({ label, value, onChange }: PrimaryInputsProps) {
    return (
        <div className="input-wrapper">
            <input
                className="primary-input"
                value={value} type="text"
                onChange={(e) => onChange(e?.target?.value)}
                placeholder={label}
            >

            </input>
        </div>
    )
}