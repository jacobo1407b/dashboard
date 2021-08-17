import {useEffect} from 'react'
import {gallPage} from 'config/titles';
//import Carrusel from "components/Carousel";
import Grid from "@material-ui/core/Grid";
import Button from "components/Button";

const Gallery = ():JSX.Element => {

    useEffect(() => {
        document.title = gallPage;
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
                       <h1>Carousel</h1>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Gallery;
