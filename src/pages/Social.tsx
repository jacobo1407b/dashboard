import { Fragment, useState } from 'react';
import {editSocial} from 'api';
import { useSelector,useDispatch } from 'react-redux';
import {socialStorage} from 'redux/accion/actionCreators'
import { options } from 'utils';
import { ISocial } from 'redux/myTypes';
import { toast } from 'react-toast';
import Card from "components/Card";
import Input from "components/Input";
import Grid from '@material-ui/core/Grid';
import CachedIcon from '@material-ui/icons/Cached';
import Select from 'components/Select';
import BtnInput from 'components/Input/BtnInput';


const Social = () => {

    const dispatch = useDispatch()

    const socialReducer: any = useSelector<any>(state => state.socialReducer.social);

    const [arraySocial, setarraySocial] = useState<ISocial[]>(socialReducer);
    const [tempChange, setTempChange] = useState<ISocial>({ id: "", icon: "", link: "" });

    function onChange(e: any, params: ISocial) {
        const { value, name } = e.target;
        setTempChange({
            ...tempChange,
            id: params._id,
            icon: params.icon,
            link: params.link,
            [name]: value
        })
    }

    function onSubmit(i:number) {
        if (!tempChange.icon || !tempChange.link) {
            toast.warn('No hay cambios para actualizar')
        } else {
            const {icon,link} = tempChange
            editSocial(tempChange.id,{icon,link}).then((res)=>{
                const {icon,link} = res;
                const copiArray = arraySocial;
                copiArray[i]={_id:tempChange.id,icon,link};
                dispatch(socialStorage(copiArray));
                setarraySocial(copiArray);
                setTempChange({id:"",icon:"",link:""})
                toast.success('Actualización exitosa');
            });
        }
    }
    return (
        <div>
            {arraySocial.map((values: ISocial, i: number) => (
                <Fragment key={values._id}>
                    <Card >
                        <Grid container spacing={1}>
                            <Grid item xs={2} >
                                <Select
                                    onChange={(e: any) => onChange(e, values)}
                                    name="icon"
                                    defaultValue={values.icon}
                                    options={options}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <Input
                                    onChange={(e: any) => onChange(e, values)}
                                    buton={<BtnInput onClick={()=>onSubmit(i)}><CachedIcon /></BtnInput>}
                                    name="link"
                                    placeholder="URL"
                                    type="text"
                                    bordered
                                    fluid
                                    defalutValue={values.link}
                                />
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                </Fragment>
            ))}
        </div>
    )
}

export default Social
