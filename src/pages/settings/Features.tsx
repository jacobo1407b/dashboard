import { useEffect } from 'react'
import {featPage} from 'config/titles';
import Avatar from "components/Avatar";
import Grid from '@material-ui/core/Grid';
import Card from "components/Card";
import Textarea from "components/Textarea";
import Input from "components/Input";
import Button from "components/Button";

const array = [1,2,3]

const Features = ():JSX.Element => {

    useEffect(() => {
        document.title = featPage
    }, []);
    return (
        <Grid container spacing={2}>
            {array.map((i)=>(
                <Grid item xs={4} key={i}>
                <Card>
                    <>
                        <Avatar size="large" src="https://cdn.pixabay.com/photo/2021/08/03/11/48/canal-6519196_960_720.jpg" alt="Imagen de ejemplo" />
                        <Input placeholder="Título de la caracteristica" label="Título" bordered fluid />
                        <Textarea fluid label="Texto descriptivo" placeholder="Ingrese un texto que describa su servicio mencionado">
                        </Textarea>
                        <br />
                        <Button primary fluid round>
                            Actualizar
                        </Button>
                    </>
                </Card>
            </Grid>
            ))}
        </Grid>
    )
}

export default Features;