import {FunctionComponent} from 'react'
interface IBoard{
    children?:JSX.Element
}

const Board: FunctionComponent<IBoard> = ({children}): JSX.Element=>{
    return(
        <div className="py-4 artboard artboard-demo bg-base-200">
            {children}
        </div>
    )
}

export default Board;