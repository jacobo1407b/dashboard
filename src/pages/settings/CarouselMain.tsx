import { useEffect, useState } from 'react'
import { caroPage } from 'config/titles';
import { ICarousel } from 'redux/myTypes'
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from 'redux/accion/actionCreators'
import AddCarousel from 'Custom/AddCarousel';
import EditCarousel from 'Custom/EditCarousel';
import DeleteCarousel from 'Custom/DeleteCarousel';
import Carrusel from "components/Carousel";
import Grid from "@material-ui/core/Grid";
import Button from "components/Button";
const CarouselMain = (): JSX.Element => {
    const dispatch = useDispatch()

    const state: any = useSelector<any>(state => state.carouselReducer)
    const [arrayCarousel] = useState<ICarousel[]>(state.carousel);

    useEffect(() => {
        document.title = caroPage
    }, []);

    const onCreateCArousel = () => {
        dispatch(openModal({
            open: true,
            title: "",
            children: <AddCarousel />
        }))
    }
    return (
        <div>
            <Grid spacing={2}>
                <Grid container spacing={4}>
                    <Grid item xs={2}>
                        <Button
                            fluid
                            round
                            onClick={onCreateCArousel}
                            primary
                        >
                            Agregar
                        </Button>
                    </Grid>
                    <Grid item xs={10}>
                        <Carrusel
                            deleteComponent={<DeleteCarousel />}
                            componente={<EditCarousel />}
                            arrayCarousel={arrayCarousel}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default CarouselMain;