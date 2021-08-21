import {FunctionComponent, useState} from 'react';
import {  useDispatch } from 'react-redux';
import { IMsg } from 'redux/myTypes';
import {toast} from 'react-toast';
import { openModal, globalBandeja,msgStorage} from 'redux/accion/actionCreators';
import {deleteMsg} from 'api';
import Button from 'components/Button';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface IDLT {
    id?:string,
    i:number,
    read?:boolean,
    bandeja:any,
    arrayMsg:any,
    setArrayMsg:any,
    setlongitud:any
}
const DeleteMsg: FunctionComponent<IDLT> = ({
    id,
    i,
    read,
    bandeja,
    arrayMsg,
    setArrayMsg,
    setlongitud
}) => {

    const dispatch = useDispatch();
    const [loading, setloading] = useState<boolean>(false);
    function onCancel(){
        dispatch(openModal({
            open:false,
            title:"",
            children:null,
            params:{}
        }))
    }

    function onDelete(){
        setloading(true)
        deleteMsg(id).then(()=>{
            const temporalArray: IMsg[] = arrayMsg;
            temporalArray.splice(i,1);
            dispatch(msgStorage(temporalArray));
            setArrayMsg(temporalArray);
            if(temporalArray.length === 0){
                setlongitud(0)
            }
            if(!read){
                dispatch(globalBandeja(bandeja-1));
            }
            toast.success('¡Mensaje eliminado!')
            setloading(false);
            onCancel();
        })
    }

    return (
        <div>
            <Container fixed>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="h2">
                            ¿Estas seguro de eliminar esta mensaje?
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
                            onClick={onDelete}
                            loading={loading}
                            fluid
                            round
                            error
                        >
                            Eliminar
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default DeleteMsg
