import { FunctionComponent, useState } from 'react';
import { toast } from 'react-toast'
import { INews } from 'redux/myTypes';
import { useDispatch } from 'react-redux';
import { newsStorage, openModal } from 'redux/accion/actionCreators'
import { editNew } from 'api'
import Input from 'components/Input';
import Textarea from 'components/Textarea';
import Button from 'components/Button';

interface IENews {
    _id: string | undefined,
    title: string,
    excerpt: string,
    keyId: number,
    arregloNews: INews[]
}

const EditNews: FunctionComponent<IENews> = ({ _id, title, excerpt, keyId, arregloNews }) => {
    const dispatch = useDispatch()
    const [stateNoticia, setStateNoticia] = useState<INews>({ _id, title, excerpt });
    const [loader, setloader] = useState<boolean>(false);

    function handlerChange(e: any) {
        const { value, name } = e.target
        setStateNoticia({
            ...stateNoticia,
            [name]: value
        })
    }

    function onSubmit() {
        if (!stateNoticia.title || !stateNoticia.excerpt || !stateNoticia._id) {
            toast.warn('Completa el formulario')
        } else {
            setloader(true)
            editNew(stateNoticia, stateNoticia._id).then((res) => {
                setloader(false)
                const { id, title, excerpt } = res;
                arregloNews[keyId] = { _id: id, title, excerpt }
                dispatch(newsStorage(arregloNews));
                toast.success('Actualizado con exito');
                dispatch(openModal({
                    open: false,
                    title: "",
                    children: null,
                    params: {}
                }))
            }).catch(() => {
                setloader(false)
                toast.error('Error en la actualización, vuelve a intentarlo')
            })
        }
    }
    return (
        <div>
            <Input
                onChange={handlerChange}
                name="title"
                label="Titulo de la noticia"
                placeholder="Agrega el titulo de tu noticia"
                defalutValue={stateNoticia.title}
                fluid
                bordered
            />
            <Textarea
                fluid
                name="excerpt"
                onChange={handlerChange}
                label="Ingresa tu noticia"
                defaultValue={stateNoticia.excerpt}
                placeholder="Ingresa el cuerpo de tu noticia"
            />
            <Button
                fluid
                primary
                round
                loading={loader}
                onClick={onSubmit}
            >
                Actualizar
            </Button>
        </div>
    )
}

export default EditNews
