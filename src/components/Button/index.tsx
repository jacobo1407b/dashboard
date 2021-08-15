import { FunctionComponent } from 'react';
interface IButton {
    loading?: boolean
    active?: boolean
    children: JSX.Element | string,
    primary?: boolean,
    secondary?:boolean,
    accent?:boolean,
    size?:string,
    fluid?:boolean,
    round?:boolean,
    onClick?:any,
    glass?:boolean,
    info?:boolean,
    error?:boolean
}

const Button: FunctionComponent<IButton> = ({ 
    children, 
    loading, 
    active,
    secondary,
    primary,
    accent,
    size,
    fluid,
    round,
    onClick,
    glass,
    info,
    error,
    ...rest
}) => {
    return (
        <button
        className={`btn 
        ${loading?'loading':null}
        ${!active? "":"btn-active"}
        ${secondary? "btn-secondary" : ""}
        ${primary ? "btn-primary" : ""}
        ${accent ? "btn-accent": ""}
        ${size}
        ${fluid? "btn-block ": " "}
        ${round? "rounded-full ": " "}
        ${glass && "glass "}
        ${info && "btn-info "}
        ${error && "btn-error "}
        `}
        onClick={onClick}
        {...rest}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    active:true,
    size:""
};
export default Button;

//size: btn-sm btn-lg  btn-xs