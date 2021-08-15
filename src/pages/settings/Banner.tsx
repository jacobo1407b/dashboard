import { useEffect } from 'react'
import {banePage} from 'config/titles';
import Input from "components/Input"
import Grid from '@material-ui/core/Grid';
import Card from "components/Card"
import Button from "components/Button";
import Textarea from "components/Textarea";

const Carousel = ():JSX.Element =>{

    useEffect(() => {
        document.title = banePage
    }, []);

    return (
        <Grid spacing={2}>
            <Card title="Configuracion de Pagina principal">
                <Grid container spacing={2}>
                    
                    <Grid item xs={12}>
                        <Input placeholder="Descuento" label="Descuento" bordered fluid />
                        <Input placeholder="Ingrese un label" label="Label principal" bordered fluid />
                        <Input placeholder="Ingrese un titulo con gran impacto" label="Titulo principal" bordered fluid />
                        <Textarea fluid label="Texto de pagina principal" placeholder="Agrege un texto acorde al titulo">
                        </Textarea>
                        <br/>
                        <Button primary fluid round>
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default Carousel