import { FunctionComponent } from 'react'

interface IBtn {
    children?: JSX.Element | string
    loading?: boolean,
    onClick?: any
}

const BtnInput: FunctionComponent<IBtn> = ({ children, loading, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`absolute top-0 right-0 rounded-l-none btn btn-primary ${loading && "loading"}`}
        >
            {loading ? null : children}
        </button>
    )
}

BtnInput.defaultProps = {
    loading: false
}
export default BtnInput;