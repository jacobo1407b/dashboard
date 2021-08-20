import { FunctionComponent,useState } from 'react';
import {toast} from 'react-toast'
import {deleteNew} from 'api'
import {useDispatch} from 'react-redux';
import { INews } from 'redux/myTypes'
import {openModal,newsStorage} from 'redux/accion/actionCreators';
import Button from 'components/Button';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface IDNews {
    id?: string,
    keyId: number,
    setLength?:any,
    newsArray2:INews[]
}

const DeleteNews: FunctionComponent<IDNews> = ({ id, keyId,setLength,newsArray2}): JSX.Element => {
    const dispatch = useDispatch()


    const [loading, setLoading] = useState<boolean>(false);
    const [newsArray] = useState<INews[]>(newsArray2)

    function onCancel() {
        dispatch(openModal({
            open: false,
            children: null,
            title: "",
            params: {}
        }))
    }

    function onDelete() {
        setLoading(true)
        deleteNew(id).then(()=>{
            const newsArrayNuevo:INews[] = newsArray
            newsArrayNuevo.splice(keyId);
            dispatch(newsStorage(newsArrayNuevo));
            if(newsArrayNuevo.length === 0){
                setLength(0)
            }
            setLoading(false)
            toast.success('Noticia Eliminada')
            onCancel();
        });
    }

    return (
        <div>
            <Container fixed>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="h2">
                            ¿Estas seguro de eliminar esta imagen?
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            fluid
                            round
                            primary
                            onClick={onCancel}
                        >
                            Cancelar
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            loading={loading}
                            fluid
                            round
                            error
                            onClick={onDelete}
                        >
                            Eliminar
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


export default DeleteNews;