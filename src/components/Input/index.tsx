import { FunctionComponent } from 'react'

interface InInput {
    placeholder?: string,
    label?: string,
    bordered?: boolean,
    disabled?: boolean,
    onChange?: any,
    name?: string,
    id?: string,
    value?: string,
    defalutValue?: string,
    type?: string,
    ghost?: boolean,
    fluid?: boolean,
    buton?: JSX.Element | undefined
}
const Input: FunctionComponent<InInput> = ({
    placeholder,
    label,
    bordered,
    disabled,
    onChange,
    name,
    id,
    value,
    defalutValue,
    type,
    ghost,
    fluid,
    buton
}): JSX.Element => {
    return (
        <div style={{ paddingBottom: "20px" }}>
            {label ? (
                <label className="label">
                    <span className="label-text">{label}</span>
                </label>
            ) : null}
            {!buton ? (
                <input
                    value={value}
                    defaultValue={defalutValue}
                    name={name}
                    id={id}
                    onChange={onChange}
                    type={type}
                    placeholder={placeholder}
                    className={`
                input 
                ${fluid && "btn-block "}
                ${bordered ? "input-bordered " : null} 
                ${ghost && "input-ghost"}
                `}
                    disabled={disabled}
                />
            ) : (
                <div className="relative">
                    <input
                    value={value}
                    defaultValue={defalutValue}
                    name={name}
                    id={id}
                    onChange={onChange}
                    type={type}
                    placeholder={placeholder}
                    className={`
                input 
                ${fluid && "btn-block "}
                ${bordered ? "input-bordered " : null} 
                ${ghost && "input-ghost"}
                `}
                    disabled={disabled}
                />
                    {buton}
                </div>
            )}
        </div>
    )
}
Input.defaultProps = {
    bordered: false,
    disabled: false,
    type: "text",
    buton: undefined
}
export default Input;
//input-bordered
