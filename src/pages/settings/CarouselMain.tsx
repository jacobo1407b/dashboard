import { useEffect, useState } from 'react'
import { caroPage } from 'config/titles';
import { ICarousel } from 'redux/myTypes'
import { useSelector } from 'react-redux'
import EditCarousel from 'Custom/EditCarousel';
import Carrusel from "components/Carousel";
import Grid from "@material-ui/core/Grid";
import Button from "components/Button";
const CarouselMain = (): JSX.Element => {

    const state: any = useSelector<any>(state => state.carouselReducer)
    const [arrayCarousel] = useState<ICarousel[]>(state.carousel);

    useEffect(() => {
        document.title = caroPage
    }, []);

    return (
        <div>
            <Grid spacing={2}>
                <Grid container spacing={4}>
                    <Grid item xs={2}>
                        <Button fluid round primary>
                            Agregar
                        </Button>
                    </Grid>
                    <Grid item xs={10}>
                        <Carrusel
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