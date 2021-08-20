import { useState,FunctionComponent} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { openModal,newsStorage } from 'redux/accion/actionCreators'
import { INews } from 'redux/myTypes';
import {toast} from 'react-toast';
import {postNew} from 'api';
import Input from "components/Input";
import Textarea from "components/Textarea";
import Button from 'components/Button';

interface IAddnews {
    setLength?:any
}
const AddNews: FunctionComponent<IAddnews> = ({setLength}) => {
    const dispatch = useDispatch();

    const newsReduce: any = useSelector<any>(state => state.newsReducer)

    const [form, setform] = useState({ title: "", excerpt: "" });
    const [newsArray] = useState<INews[]>(newsReduce.news)

    function handlerChange(e: any) {
        const { value, name } = e.target
        setform({
            ...form,
            [name]: value
        })
    };

    function onSubmit(){
        if(!form.excerpt || !form.excerpt){
            toast.warn('Completa el formulario')
        }else{
            postNew(form).then((res)=>{
                const arraynews: INews[] = newsArray
                const {id,title,excerpt} =res
                arraynews.push({_id:id,title,excerpt})
                setLength(arraynews.length)
                dispatch(newsStorage(arraynews));
                toast.success('Noticia agregada')
                dispatch(openModal({open:false,title:"",children:null,params:{}}));
            })
        }
    }

    return (
        <div>
            <Input
                onChange={handlerChange}
                name="title"
                bordered
                fluid
                label="Titulo"
                placeholder="Agrega el titulo de la noticia"
            />
            <Textarea
                onChange={handlerChange}
                name="excerpt"
                fluid
                label="Texto"
                placeholder="Ingresa un texto"
            />
            <Button
                fluid
                round
                primary
                onClick={onSubmit}
            >
                Enviar
            </Button>
        </div>
    )
}

export default AddNews;
