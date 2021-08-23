import { FunctionComponent } from 'react';


type optionValue = {
    id: number | string,
    value: string,
    text: string | JSX.Element
}

interface ISelect {
    options: optionValue[]
    name?: string,
    onChange?:any,
    defaultValue?:string
}

const Select: FunctionComponent<ISelect> = ({ options, name,onChange,defaultValue }) => {

    return (
        <select
            onChange={onChange}
            name={name}
            className="select w-full select-sm max-w-xs"
            defaultValue={defaultValue}
        >
            <option
                disabled
                selected
            >
                Selecciona una opción
            </option>
            {options.map((value) => (
                <option
                    key={value.id}
                    value={value.value}
                >
                   {value.text}
                </option>
            ))}
        </select>
    )
};

export default Select