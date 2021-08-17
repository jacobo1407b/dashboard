import { useEffect, useState } from 'react'
import { featPage } from 'config/titles';
import {toast} from 'react-toast'
import { useSelector, useDispatch } from 'react-redux';
import { featureStorage } from 'redux/accion/actionCreators'
import { IFeature } from 'redux/myTypes'
import { editFeature } from 'api'
import Avatar from "components/Avatar";
import Grid from '@material-ui/core/Grid';
import Card from "components/Card";
import Textarea from "components/Textarea";
import Input from "components/Input";
import Button from "components/Button";



const Features = (): JSX.Element => {

    const dispatch = useDispatch()

    const state: any = useSelector<any>(state => state.featureReducer)
    const featureArray: IFeature[] = state.feature

    const [feature] = useState<IFeature[]>(featureArray);
    const [temporal, setTemporal] = useState<IFeature>({ title: "", icon: "", description: "", _id: "" });

    useEffect(() => {
        document.title = featPage
    }, []);


    function onChange(e: any, key: number) {
        const tem = feature[key]
        const { value, name } = e.target
        setTemporal(tem);
        setTemporal({
            ...tem,
            [name]: value
        });
    }

    function onSubmit(idF: string, key: number) {
        if(!temporal.title || !temporal._id || !temporal.description || !temporal.icon){
            toast.warn('No hay cambios por realizar')
        }else{
            editFeature(idF, temporal).then((res: any) => {
                const { id, icon, title, description } = res
                const temporalArray: IFeature[] = feature;
                var data: IFeature = { _id: id, icon, title, description };
                temporalArray[key] = data
                dispatch(featureStorage(temporalArray))
                setTemporal({ title: "", icon: "", description: "", _id: "" })
                toast.success('Actulizado correctamente')
            })
        }
    }
    return (
        <Grid container spacing={2}>
            {feature.map((values, i) => (
                <Grid item xs={4} key={i}>
                    <Card>
                        <>
                            <Avatar
                                size="large"
                                src={values.icon}
                                alt="Imagen de ejemplo"
                            />
                            <Input
                                name="title"
                                onChange={(e: any) => onChange(e, i)}
                                placeholder="Título de la caracteristica"
                                defalutValue={values.title}
                                label="Título"
                                bordered
                                fluid
                            />
                            <Textarea
                                name="description"
                                //onChange={onChange}
                                fluid
                                label="Texto descriptivo"
                                placeholder="Ingrese un texto que describa su servicio mencionado"
                                defaultValue={values.description}
                            >
                            </Textarea>
                            <br />
                            <Button
                                primary
                                fluid
                                round
                                onClick={() => onSubmit(values._id, i)}
                            >
                                Actualizar
                            </Button>
                        </>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default Features;