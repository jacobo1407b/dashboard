import { FunctionComponent } from 'react'

interface IPaginacion {
    active?: number,
    totalPages?: number
}

const Paginacion: FunctionComponent<IPaginacion> = ({
    active,
    totalPages
}): JSX.Element => {
    return (
        <div className="btn-group">
            <button className="btn">«</button>
            <button className="btn">3</button>,
            <button className="btn btn-active">4</button>,
            <button className="btn">»</button>
        </div>
    )
}


Paginacion.defaultProps = {
    active: 1,
    //totalPages:1
}

export default Paginacion

//btn-active