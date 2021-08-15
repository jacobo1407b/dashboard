import { FunctionComponent } from 'react'

interface ITextarea {
    placeholder?: string,
    label?: string,
    value?: string,
    defaultValue?: string,
    name?: string,
    id?: string,
    onChange?: any,
    disabled?: boolean,
    fluid?:boolean

}

const Textarea: FunctionComponent<ITextarea> = ({
    placeholder,
    label,
    value,
    defaultValue,
    name,
    id,
    onChange,
    disabled,
    fluid
}) => {

    return (
        <div>
            {label ? (
                <label className="label">
                    <span className="label-text">{label}</span>
                </label>
            ) : null}

            <textarea
                disabled={disabled}
                onChange={onChange}
                id={id}
                name={name}
                className={`textarea h-24 textarea-bordered ${fluid && "btn-block "}`}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
            ></textarea>
        </div>
    )
}

Textarea.defaultProps = {
    disabled: false
}
export default Textarea
//