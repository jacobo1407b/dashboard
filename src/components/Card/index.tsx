import { FunctionComponent } from 'react'

interface ICard {
    title?: string | undefined
    children?: JSX.Element
}
const Card: FunctionComponent<ICard> = ({ title, children }) => {
    return (

        <div className="card text-center shadow-2xl " style={{backgroundColor:"#3d4451"}}>
            <div className="card-body">
                {title && (<h2 className="card-title">{title}</h2>)}
                {children}
            </div>
        </div>

    )
}

export default Card