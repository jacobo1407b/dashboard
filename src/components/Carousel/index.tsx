import { FunctionComponent } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useDispatch } from 'react-redux'
import {openModal} from 'redux/accion/actionCreators'
import { IconButton, Badge } from '@material-ui/core';
import { ICarousel } from 'redux/myTypes'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


interface ICarouselComponent {
    arrayCarousel: ICarousel[],
    componente: JSX.Element,
    deleteComponent:JSX.Element
}
const Carrusel: FunctionComponent<ICarouselComponent> = ({deleteComponent, arrayCarousel,componente,}): JSX.Element => {

    const dispatch = useDispatch();


    function eliminar(i: number,name:string,id:string) {
        var params = {key:i,name,id}
        dispatch(openModal({
            open:true,
            title:"Eliminar información",
            children:deleteComponent,
            params
        }))
    }

    function editar(i: number,params:any) {
        params.key = i
        dispatch(openModal({
            open:true,
            title:"Editar información",
            children:componente,
            params
        }))
    }
    return (
        <Carousel>
            {arrayCarousel.map((value, i) => (
                <div key={value._id} >
                    <img src={value.url} style={{ backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "40%", width: "50%" }} className="images-carrusel" alt={value.nameImages} />
                    <p className="legend">{value.title ? value.title : value.text}</p>
                    <IconButton
                        color="inherit"
                        onClick={() => eliminar(i,value.nameImages,value._id)}
                    >
                        <Badge color="secondary"
                        >
                            <DeleteIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={() => editar(i,value)}
                    >
                        <Badge color="secondary">
                            <EditIcon />
                        </Badge>
                    </IconButton>
                </div>

            ))}
        </Carousel>
    )
}

export default Carrusel

/**
 * <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
 */