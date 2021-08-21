import { FunctionComponent, useEffect } from 'react';
import {editMsg} from 'api';
import {useDispatch} from 'react-redux';
import {msgStorage,globalBandeja} from 'redux/accion/actionCreators';
import { IMsg } from 'redux/myTypes';
import Textarea from 'components/Textarea';
import Inpur from 'components/Input';
import BtnInput from 'components/Input/BtnInput';
import ReplyIcon from '@material-ui/icons/Reply';
import { getFecha } from 'utils'

interface IVIEW {
    params: IMsg,
    i:number,
    arrayMsg:any,
    setArrayMsg:any,
    bandeja:any,
}

const ViewMsg: FunctionComponent<IVIEW> = ({ params,i,arrayMsg,setArrayMsg,bandeja}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if(!params.read){
            
            var {email,text,date,_id} = params;
            var newparams = {
                email,
                text,
                date,
                read:true
            }
            editMsg(newparams,_id).then((res)=>{
                const copiarray = arrayMsg;
                const {id,email,text,date,read} = res;
                copiarray[i] = {_id:id,email,text,date,read};
                dispatch(msgStorage(copiarray));
                setArrayMsg(copiarray);
                dispatch(globalBandeja(bandeja-1))
            })
        }
    }, [params,arrayMsg,bandeja,dispatch,i,setArrayMsg]);


    function responseEmail(email: string) {
        window.open(`mailto:${email}`)
    }

    return (
        <div>
            <Inpur
                buton={<BtnInput onClick={() => responseEmail(params.email)}><ReplyIcon /></BtnInput>}
                disabled
                fluid
                value={`From: ${params.email}`}
            />
            <Inpur
                disabled
                fluid
                value={`Fecha: ${getFecha(params.date)}`}
            />
            <Textarea
                disabled
                fluid
                value={`Mensaje: ${params.text}`}
            />
        </div>
    )
}

export default ViewMsg
