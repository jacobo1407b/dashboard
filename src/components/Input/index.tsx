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
    maxLength?:number,
    size?:string
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
    buton,
    maxLength,
    size
}): JSX.Element => {

    function sizesSet(){
        switch (size) {
            case 'large':
                return "input-lg"
            case "small":
                return "input-sm"
            case "tiny":
                return "input-xs"
            default:
                return ""
        }
    }
    return (
        <div style={{ paddingBottom: "20px" }}>
            {label ? (
                <label className="label">
                    <span className="label-text">{label}</span>
                </label>
            ) : null}
            {!buton ? (
                <input
                    maxLength={maxLength}
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
                ${ghost && "input-ghost "}
                ${sizesSet()}
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
