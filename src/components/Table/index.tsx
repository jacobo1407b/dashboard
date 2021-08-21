import {FunctionComponent} from 'react'

interface ITable {
    children?:JSX.Element,
    compact?:boolean
}
//table-compact
const Table: FunctionComponent <ITable> =({children,compact}): JSX.Element => {
    return (
        <div className="overflow-x-auto">
            <table className={`
            table w-full
            ${compact && "table-compact"}
            `}>
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