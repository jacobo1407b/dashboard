import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux';
import { carouselStorage, openModal } from 'redux/accion/actionCreators'
import { toast } from 'react-toast'
import { addCarousel } from 'api'
import Input from "components/Input"
import Button from "components/Button"
import CardMedia from '@material-ui/core/CardMedia'


const AddCarousel = (): JSX.Element => {
    const dispatch = useDispatch()

    const carouselReducer: any = useSelector<any>(state => state.carouselReducer.carousel)

    const [crouselTemp] = useState<any>(carouselReducer);
    const [nameTitle, setNameTitle] = useState<{ title: string }>({ title: "" });
    const [temporalLink, setTemporalLink] = useState<string>('https://raw.githubusercontent.com/jacobo1407b/templatereact/main/src/common/assets/image/interior/slider/slide-1.png');
    const [base64, setBase64] = useState<string | ArrayBuffer | null>(null);
    const [loader, setloader] = useState<boolean>(false);

    function handlerCHange(e: any) {
        const { name, value } = e.target
        setNameTitle({
            ...nameTitle,
            [name]: value
        })
    }
    const onDrop = useCallback(acceptedFiles => {
        let fileReader = new FileReader();
        const file = acceptedFiles[0];
        setTemporalLink(URL.createObjectURL(file))
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

    function onSUbmit() {
        if (!nameTitle.title || !base64) {
            toast.warn('Agrega una imagen y titulo')
        } else {
            setloader(true)
            addCarousel(nameTitle.title, base64).then((res) => {
                const { id, name, nameImages, url, title } = res
                crouselTemp.push({
                    _id: id, name, nameImages, url, title
                })
                setBase64(null)
                setNameTitle({title:""})
                dispatch(carouselStorage(crouselTemp))
                setloader(false)
                toast.success('Imagen cargada exitosamente')
                dispatch(openModal({open:false,title:"",children:null, params:{}}));
            })
        }
    }
    return (
        <div>
            <CardMedia
                {...getRootProps()}
                style={{ paddingTop: '56.25%', borderRadius: "20px" }}
                image={temporalLink}
                title="Click para cargar imagen"
            />
            <input {...getInputProps()} />
            <Input
                onChange={handlerCHange}
                fluid
                bordered
                name="title"
                label="Título o nombre"
                placeholder="Título del artículo"
            />
            <Button
                loading={loader}
                fluid
                primary
                round
                onClick={onSUbmit}
            >
                Agregar
            </Button>
        </div>
    )
}

export default AddCarousel