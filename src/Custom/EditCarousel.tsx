import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux';
import { carouselStorage, openModal} from 'redux/accion/actionCreators';
import { ICarousel } from 'redux/myTypes'
import { toast } from 'react-toast'
import { editCarousel } from 'api'
import Input from "components/Input";
import Button from 'components/Button';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';




const EditCarousel = (): JSX.Element => {
    const dispatch = useDispatch()

    const state: any = useSelector<any>(state => state.modalReducer.modal);
    const full: any = useSelector<any>(state => state.carouselReducer.carousel)

    const [params, setParams] = useState<ICarousel>(state.params);
    const [keyg] = useState<number>(state.params.key);
    const [arrayFull] = useState<any>(full);
    const [fileUrl, setFileUrl] = useState<string | null>(null);
    const [base64, setbase64] = useState<string | ArrayBuffer | null>(null);
    const [loading, setloading] = useState<boolean>(false);

    const onDrop = useCallback(acceptedFiles => {
        let fileReader = new FileReader();
        const file = acceptedFiles[0];
        setFileUrl(URL.createObjectURL(file))
        fileReader.readAsDataURL(file)
        fileReader.onload = function () {
            setbase64(fileReader.result)
        };

    }, [])
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop,
    });

    function onChange(e: any) {
        const { name, value } = e.target;
        setParams({
            ...params,
            [name]: value
        })
    }

    function onSubmit() {
        if (!params._id || !params.title || !params.url || !params.name || !params.nameImages) {
            toast.warn('Completa el formulario')
        } else {
            setloading(true)
            editCarousel(params._id, params, base64).then((res) => {
                const { id, title, url, name, nameImages } = res
                arrayFull[keyg] = {
                    _id:id,title, url, name, nameImages
                }

                dispatch(carouselStorage(arrayFull))
                setloading(false)
                setbase64(null)
                toast.success('Actualización completa')
                dispatch(openModal({open:false,title:"",children:null, params:{}}))
            })    
        }
    }
    return (
        <div>
            <Grid spacing={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <CardMedia
                            {...getRootProps()}
                            style={{ paddingTop: '56.25%', borderRadius: "20px" }}
                            image={!fileUrl ? params.url : fileUrl}
                            title={params.nameImages}
                        />
                        <input {...getInputProps()} />

                        <Input
                            fluid
                            bordered
                            name="title"
                            defalutValue={params.title}
                            label="Título o nombre"
                            placeholder="Título del artículo"
                            onChange={onChange}
                        />
                        <Button
                            fluid
                            primary
                            round
                            loading={loading}
                            onClick={onSubmit}
                        >
                            Actualizar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default EditCarousel;