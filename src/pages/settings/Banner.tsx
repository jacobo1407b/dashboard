import { useEffect, useState } from 'react'
import { banePage } from 'config/titles';
import { useSelector,useDispatch} from 'react-redux';
import {bannerStorage} from 'redux/accion/actionCreators';
import {toast} from 'react-toast'
import { IBanner } from 'redux/myTypes'
import {editBanner} from 'api'
import Input from "components/Input"
import Grid from '@material-ui/core/Grid';
import Card from "components/Card"
import Button from "components/Button";
import Textarea from "components/Textarea";

const Carousel = (): JSX.Element => {
    const dispatch = useDispatch()

    const state: any = useSelector<any>(state => state.bannerReducer)
    const banner: IBanner = state.banner

    const [defaultBanner, setDefaultBanner] = useState<IBanner>(banner);
    const [loading, setloading] = useState<boolean>(false);

    useEffect(() => {
        document.title = banePage
    }, []);

    function handlerChange(e: any) {
        const { value, name } = e.target
        setDefaultBanner({
            ...defaultBanner,
            [name]: value
        })
    }

    async function onEdit() {
        setloading(true)
        editBanner(defaultBanner).then((res)=>{
            setloading(false)
            dispatch(bannerStorage({
                label:res.label,
                discount:res.discount,
                text:res.text,
                title:res.title
            }))
            toast.success('Información actualizada')
        })
    }

    return (
        <Grid spacing={2}>
            <Card title="Configuracion de Pagina principal">
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Input
                            onChange={handlerChange}
                            placeholder="Descuento"
                            label="Descuento"
                            bordered
                            fluid
                            name="discount"
                            defalutValue={defaultBanner.discount}
                        />
                        <Input
                            onChange={handlerChange}
                            placeholder="Ingrese un label"
                            label="Label principal"
                            bordered
                            fluid
                            name="label"
                            defalutValue={defaultBanner.label}
                        />
                        <Input
                            onChange={handlerChange}
                            placeholder="Ingrese un titulo con gran impacto"
                            label="Titulo principal"
                            bordered
                            defalutValue={defaultBanner.title}
                            name="title"
                            fluid
                        />
                        <Textarea
                            onChange={handlerChange}
                            fluid
                            name="text"
                            label="Texto de pagina principal"
                            placeholder="Agrege un texto acorde al titulo"
                            defaultValue={defaultBanner.text}
                        >
                        </Textarea>
                        <br />
                        <Button
                            primary
                            fluid
                            round
                            onClick={onEdit}
                            loading={loading}
                        >
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default Carousel