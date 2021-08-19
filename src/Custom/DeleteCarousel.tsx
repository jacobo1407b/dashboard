import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ICarousel } from 'redux/myTypes'
import { carouselStorage, openModal } from 'redux/accion/actionCreators';
import { toast } from 'react-toast'
import { deleteCarousel } from 'api';
import Button from 'components/Button';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const DeleteCarousel = () => {
    const dispatch = useDispatch()

    const modalReducer: any = useSelector<any>(state => state.modalReducer.modal.params);
    const carouselReducer: any = useSelector<any>(state => state.carouselReducer);


    const [carousel] = useState<ICarousel[]>(carouselReducer.carousel);
    const [loading, setloading] = useState<boolean>(false);

    function onCancel() {
        dispatch(openModal({
            open: false,
            children: null,
            title: "",
            params: {}
        }))
    }

    function onDelete() {
        setloading(true)
        deleteCarousel(modalReducer.id, modalReducer.name).then((res) => {
            setloading(false)
            if (res) {
                carousel.splice(modalReducer.key, 1)
                dispatch(carouselStorage(carousel));
                dispatch(openModal({
                    open: false,
                    title: "",
                    children: null,
                    params: {}
                }))
                toast.success('Eliminado correctamente')
            } else {
                toast.error('Error al eliminar')
            }
        })
    }
    return (
        <div>
            <Container fixed>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="h2">
                            ¿Estas seguro de eliminar esta imagen?
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            fluid
                            round
                            primary
                            onClick={onCancel}
                        >
                            Cancelar
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            loading={loading}
                            fluid
                            round
                            error
                            onClick={onDelete}
                        >
                            Eliminar
                        </Button>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}

export default DeleteCarousel;