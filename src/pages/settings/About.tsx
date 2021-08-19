import { useEffect, useState, useCallback } from 'react'
import { abouPage } from 'config/titles';
import { useDropzone } from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux';
import { aboutStorage } from 'redux/accion/actionCreators'
import { IABout } from 'redux/myTypes'
import { editAbout } from 'api'
import { toast } from 'react-toast'
import Input from "components/Input"
import Grid from '@material-ui/core/Grid';
import Card from "components/Card"
import Button from "components/Button";
import Textarea from "components/Textarea";
import CardMedia from '@material-ui/core/CardMedia'



const About = (): JSX.Element => {
    const dispatch = useDispatch()

    const about: any = useSelector<any>(state => state.aboutReducer);
    const aboutState: IABout = about.about;

    const [aboutForm, setAboutForm] = useState<IABout>(aboutState);
    const [loading, setloading] = useState(false);
    const [addImage, setAddImage] = useState<string>('');
    const [base64, setBase64] = useState<string | ArrayBuffer | null>(null)

    useEffect(() => {
        document.title = abouPage;
    }, []);


    const onDrop = useCallback(acceptedFiles => {
        let fileReader = new FileReader();
        const file = acceptedFiles[0];
        setAddImage(URL.createObjectURL(file))
        fileReader.readAsDataURL(file)
        fileReader.onload = function () {
            setBase64(fileReader.result)
        };
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop,
    });

    function onChange(e: any) {
        const { value, name } = e.target
        setAboutForm({
            ...aboutForm,
            [name]: value
        })
    }

    async function onEdit() {
        if (!aboutForm.text || !aboutForm.title) {
            toast.warn('No se permiten campos vacios')
        } else {
            setloading(true)
            editAbout(aboutForm,base64).then((res) => {
                const { title, text, text2, url, nameImage } = res
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
                            <CardMedia
                                {...getRootProps()}
                                style={{ paddingTop: '56.25%', borderRadius: "20px" }}
                                image={addImage ? addImage : aboutForm.url}
                                title="Cargar nueva imagen"
                            />
                            <input {...getInputProps()} />
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