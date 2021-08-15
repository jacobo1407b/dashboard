import { useEffect } from 'react'
import {abouPage} from 'config/titles';
import Input from "components/Input"
import Grid from '@material-ui/core/Grid';
import Card from "components/Card"
import Button from "components/Button";
import Textarea from "components/Textarea";
import Avatar from "components/Avatar";


const About = (): JSX.Element=>{

    useEffect(() => {
        document.title = abouPage;
    }, []);
    return(
        <div>
            <Grid spacing={2}>
            <Card title="Configuracion de About">
                <Grid container spacing={2}>
                    
                    <Grid item xs={12}>
                        <Input placeholder="Título del componente" label="Título" bordered fluid />
                        <Textarea fluid label="Texto de página principal" placeholder="Titulo principal de este componente (obligatorio)">
                        </Textarea>
                        <Textarea fluid label="Texto 2" placeholder="Este texto es opcional, puede o no agregarlo">
                        </Textarea>
                        <br/>
                        <Avatar border="btn" size="large" src="https://cdn.pixabay.com/photo/2021/08/03/11/48/canal-6519196_960_720.jpg" alt="Imagen de ejemplo"/>
                        <Button primary fluid round>
                            Actualizar
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
        </div>
    )
}

export default About;