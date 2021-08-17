import { useEffect, useState } from 'react'
import { abouPage } from 'config/titles';
import { useSelector,useDispatch} from 'react-redux';
import {aboutStorage} from 'redux/accion/actionCreators'
import { IABout } from 'redux/myTypes'
import {editAbout} from 'api'
import {toast} from 'react-toast'
import Input from "components/Input"
import Grid from '@material-ui/core/Grid';
import Card from "components/Card"
import Button from "components/Button";
import Textarea from "components/Textarea";
import Avatar from "components/Avatar";


const About = (): JSX.Element => {
    const dispatch = useDispatch()

    const about: any = useSelector<any>(state => state.aboutReducer);
    const aboutState: IABout = about.about;

    const [aboutForm, setAboutForm] = useState<IABout>(aboutState);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        document.title = abouPage;
    }, []);

    function onChange(e: any) {
        const { value, name } = e.target
        setAboutForm({
            ...aboutForm,
            [name]: value
        })
    }

    async function onEdit(){
        setloading(true)
        editAbout(aboutForm).then((res)=>{
            const {title,text,text2,url,nameImage} = res
            dispatch(aboutStorage({
                title,
                text,
                text2,
                url,
                nameImage
            }));
            toast.success('Información actualizada')
            setloading(false)
        })
    }
    return (
        <div>
            <Grid spacing={2}>
                <Card title="Configuracion de About">
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <Input
                                onChange={onChange}
                                name="title"
                                placeholder="Título del componente"
                                label="Título"
                                bordered
                                fluid
                                defalutValue={aboutForm.title}
                            />
                            <Textarea
                                onChange={onChange}
                                name="text"
                                defaultValue={aboutForm.text}
                                fluid
                                label="Texto de página principal"
                                placeholder="Titulo principal de este componente (obligatorio)"
                            >

                            </Textarea>
                            <Textarea
                                onChange={onChange}
                                fluid
                                name="text2"
                                label="Texto 2"
                                placeholder="Este texto es opcional, puede o no agregarlo"
                                defaultValue={aboutForm.text2}
                            >
                            </Textarea>
                            <br />
                            <Avatar
                                border="btn"
                                size="large"
                                src={aboutForm.url ? aboutForm.url : "https://cdn.pixabay.com/photo/2021/08/03/11/48/canal-6519196_960_720.jpg"}
                                alt={aboutForm.nameImage ? aboutForm.nameImage : "Imagen de ejemplo"}
                            />
                            <Button
                                primary
                                fluid
                                round
                                onClick={onEdit}
                                loading={loading}
                            >
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