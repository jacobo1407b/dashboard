import { useState, useCallback, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { IGallery } from 'redux/myTypes';
import { galleryStorage, openModal } from 'redux/accion/actionCreators'
import { addGallery } from 'api';
import { toast } from 'react-toast'
import { useDropzone } from 'react-dropzone'
import CardMedia from '@material-ui/core/CardMedia';
import Input from "components/Input";
import Button from "components/Button";

interface IADD {
    arrayParams: any,
    setGalleryArray: any
}
const AddGallery: FunctionComponent<IADD> = ({ arrayParams, setGalleryArray }) => {
    const dispatch = useDispatch()

    const [defaultImage, setDefaultImage] = useState<string>("https://raw.githubusercontent.com/jacobo1407b/templatereact/main/src/common/assets/image/interior/gallery/1.jpg");
    const [base64, setBase64] = useState<string | ArrayBuffer | null>(null);
    const [name, setName] = useState<string>('');
    const [load, setload] = useState<boolean>(false);

    const onDrop = useCallback(acceptedFiles => {
        let fileReader = new FileReader();
        const file = acceptedFiles[0];
        setDefaultImage(URL.createObjectURL(file))
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

    function handlerChange(e: any) {
        setName(e.target.value)
    }

    function onSubmit() {
        if (!base64 || !name) {
            toast.warn('Completa el formulario')
        } else {
            setload(true)
            addGallery(name, base64).then((res) => {
                const copiarray: IGallery[] = arrayParams;
                const { id, name, nameImage, url } = res
                copiarray.push({ _id: id, name, nameImage, url });
                dispatch(galleryStorage(copiarray));
                setGalleryArray(copiarray);
                setload(false)
                toast.success('Imagen agregada a la galeria')
                dispatch(openModal({ open: false, title: "", children: null, params: {} }));
            }).catch((err) => {
                console.log(err)
                toast.error('Error: Intente otra vez')
            })
        }
    }
    return (
        <div>
            <CardMedia
                {...getRootProps()}
                style={{ paddingTop: '56.25%', borderRadius: "20px" }}
                title="test"
                image={defaultImage}
            />
            <input {...getInputProps()} />
            <Input
                onChange={handlerChange}
                fluid
                bordered
                name="name"
                label="Título"
                placeholder="Título de la imagen"
            />
            <Button
                fluid
                primary
                round
                loading={load}
                onClick={onSubmit}
            >
                Agregar
            </Button>
        </div>
    )
}

export default AddGallery
