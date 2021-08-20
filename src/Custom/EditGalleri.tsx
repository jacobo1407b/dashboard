import { FunctionComponent, useState, useCallback } from 'react';
import {toast} from 'react-toast';
import {editGallery} from 'api';
import {useDispatch} from 'react-redux'
import { galleryStorage, openModal} from 'redux/accion/actionCreators';
import { IGallery } from 'redux/myTypes';
import { useDropzone } from 'react-dropzone'
import CardMedia from '@material-ui/core/CardMedia';
import Input from "components/Input";
import Button from 'components/Button';

interface IEGallery {
    index: number,
    params?: IGallery,
    arrayParams:IGallery[],
    setGalleryArray?:any
}
const EditGalleri: FunctionComponent<IEGallery> = ({ index, params,arrayParams,setGalleryArray}) => {

    const dispatch = useDispatch()

    const [form, setForm] = useState<IGallery | undefined>(params);
    const [fileUrl, setFileUrl] = useState<string>('');
    const [base64, setbase64] = useState<string | ArrayBuffer | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

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

    function handlerChange(e: any) {
        const { value, name } = e.target
        const tachala: any = { ...form, [name]: value }
        setForm(tachala);
    }

    function onSubmit() {
        if(!form?._id || !form?.name){
            toast.warn('Completa los campos');
        }else{
            setLoading(true)
            var data = {name:form?.name,url:form?.url,nameImage:form?.nameImage}
            editGallery(form?._id,data,base64).then((res)=>{
                const {id,name,nameImage,url} = res
                arrayParams[index]={_id:id,name,nameImage,url};
                dispatch(galleryStorage(arrayParams));
                setGalleryArray(arrayParams)
                setbase64(null);
                toast.success('Actualización terminada');
                setLoading(false);
                dispatch(openModal({
                    open:false,
                    title:"",
                    children:null,
                    params:{}
                }))
            })
        }
    }
    return (
        <div>
            <CardMedia
                {...getRootProps()}
                style={{ paddingTop: '56.25%', borderRadius: "20px" }}
                image={!fileUrl ? form?.url : fileUrl}
                title={form?.nameImage}
            />
            <input {...getInputProps()} />
            <Input
                onChange={handlerChange}
                fluid
                bordered
                name="name"
                label="Título o nombre del la imagen"
                defalutValue={form?.name}
            />
            <Button
                onClick={onSubmit}
                loading={loading}
                fluid
                primary
                round
            >
                Actualizar
            </Button>
        </div>
    )
}

export default EditGalleri
