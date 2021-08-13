import React, { FunctionComponent } from "react"

type FormElement = React.FormEvent<HTMLFormElement>;
interface IForm {
    onSubmit?: any,
    children?: JSX.Element,
    onChange?: any
}

const Form: FunctionComponent<IForm> = ({ onSubmit, children, onChange }): JSX.Element => {

    const handlerSubmit = (e: FormElement) => {
        e.preventDefault();
        onSubmit();
    }
    return (
        <div>
            <form
                onSubmit={handlerSubmit}
                onChange={onChange}
            >
                <div className="p-10 card bg-base-200">
                    <div className="form-control">
                        {children}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form