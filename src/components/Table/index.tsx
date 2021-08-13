import {FunctionComponent} from 'react'

interface ITable {
    children?:JSX.Element
}
const Table: FunctionComponent <ITable> =({children}): JSX.Element => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            Leido
                        </th>
                        <th>Email</th>
                        <th>Mensaje</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Paginacion</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table