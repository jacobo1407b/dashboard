import { useEffect, useState } from 'react';
import { userPage } from 'config/titles';
import { useSelector, useDispatch } from 'react-redux';
import { userInitial } from 'redux/accion/actionCreators'
import { updateUsername } from 'api'
import { toast } from "react-toast"
import { updateEmail as actualizarEmail, updatePassword } from 'api'
import CachedIcon from '@material-ui/icons/Cached';
import Card from "components/Card"
import Input from "components/Input"
import Grid from '@material-ui/core/Grid';
import Avatar from "components/Avatar";
import Button from "components/Button";
import BtnInput from 'components/Input/BtnInput';

const User = (): JSX.Element => {
    const dispatch = useDispatch()

    const user: any = useSelector<any>(state => state.userReducer.user)
    const [loadUsername, setloadUsername] = useState<boolean>(false);
    const [loadEmail, setLoadEmail] = useState<boolean>(false);
    const [loadPassword, setloadPassword] = useState<boolean>(false)
    const [formUser, setFormUser] = useState(user.user);

    useEffect(() => {
        document.title = userPage
    }, []);


    function handlerChange(e: any) {
        const { value, name } = e.target
        setFormUser({
            ...formUser,
            [name]: value
        })
    }

    async function onUpdate() {
        setloadUsername(true)
        updateUsername(formUser.username, formUser._id).then((res) => {
            setloadUsername(false)
            dispatch(userInitial({
                autenticate: true,
                user: {
                    _id: res.id,
                    email: res.email,
                    username: res.username,
                    logo: res.logo,
                    avatar: res.avatar
                }
            }))
            toast.success('Username actualizado')
        })
    }
    async function editPassword() {
        if (!formUser.password) {
            toast.warn('Ingresa una contraseña')
        } else {
            setloadPassword(true)
            updatePassword(formUser._id, formUser.password).then((res) => {
                setloadPassword(false)
                if(res){
                    toast('Contraseña actualizada')
                }else{
                    toast.error('Error al actualizar contraseña')
                }
            })
        }
    }
    async function updateEmail() {
        if (!formUser.email) {
            toast.warn('Completa este campo')
        } else {
            setLoadEmail(true)
            actualizarEmail(formUser._id, formUser.email).then((res) => {
                console.log(user)
                setLoadEmail(false);

                dispatch(userInitial({
                    autenticate: true,
                    user: {
                        _id: res.id,
                        email: res.email,
                        username: res.username,
                        logo: res.logo,
                        avatar: res.avatar
                    }
                }))
                toast.success('Correo actualizado')
            })
        }
    }
    return (
        <Grid spacing={2}>
            <Card title="Credenciales de acceso">
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Avatar
                            src={formUser.avatar ? formUser.avatar : "http://daisyui.com/tailwind-css-component-profile-1@94w.png"}
                            size="large"
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <Input
                            onChange={handlerChange}
                            buton={<BtnInput onClick={updateEmail} loading={loadEmail} ><CachedIcon /></BtnInput>}
                            name="email"
                            placeholder="Email"
                            type="email"
                            bordered
                            fluid
                            label="Email"
                            defalutValue={formUser?.email}
                        />
                        <Input
                            name="password"
                            onChange={handlerChange}
                            buton={<BtnInput onClick={editPassword} loading={loadPassword} ><CachedIcon /></BtnInput>}
                            placeholder="Password"
                            type="password"
                            bordered
                            fluid
                            defalutValue="************"
                            label="password"
                        />
                    </Grid>
                </Grid>
            </Card>
            <br />
            <Card title="Informacion y Logo">
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Avatar
                            src={formUser.logo ? formUser.logo : "http://daisyui.com/tailwind-css-component-profile-1@94w.png"}
                            size="large"
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <Input
                            onChange={handlerChange}
                            name="username"
                            placeholder="Username"
                            bordered
                            fluid
                            label="Nombre de usuario"
                            defalutValue={formUser.username}
                        />
                        <Button
                            primary
                            fluid
                            onClick={onUpdate}
                            loading={loadUsername}
                        >
                            Actualizar username
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default User

