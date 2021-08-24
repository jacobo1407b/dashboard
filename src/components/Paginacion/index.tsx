import { FunctionComponent,useEffect,useState,Fragment} from 'react'

interface IPaginacion {
    totalPages?: number,
    defaultActivePage?:number,
    onPageChange?:any
}

const Paginacion: FunctionComponent<IPaginacion> = ({
    defaultActivePage,
    totalPages,
    onPageChange
}): JSX.Element => {

    const [arrayButon, setarrayButon] = useState([<button className="btn btn-xs">1</button>]);
    //const [activeItems, /*setActiveItems*/] = useState<boolean>(active);
    const [activePage, setActivePage] = useState<number | undefined>(defaultActivePage);

    useEffect(() => {
        const butons:any = [];
        function createButons(){
            for (let i = 0; i < totalPages! ; i++) {
                var num = i+1;
                if(num === activePage!){
                    butons.push(<button className="btn btn-xs btn-active">{num}</button>)
                }else{
                    butons.push(<button className="btn btn-xs">{num}</button>)
                }  
            }
            setarrayButon(butons)
        }
        createButons();
    }, [totalPages,activePage]);

    function handlerChange(e:any){
        onPageChange(e,{activePage})
    }
    
    return (
        <div className="btn-group">
            <button className="btn btn-xs" onChange={handlerChange}>«</button>
            {arrayButon.map((element,i)=>(
                <Fragment key={i}>
                    {element}
                </Fragment>
            ))}
            <button className="btn btn-xs" onChange={handlerChange} >»</button>
        </div>
    )
}


Paginacion.defaultProps = {
    defaultActivePage:1,
    totalPages:1
}

export default Paginacion

//btn-active