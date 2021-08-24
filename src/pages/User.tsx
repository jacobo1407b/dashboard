import { useEffect, useState, useCallback } from 'react';
import { userPage } from 'config/titles';
import { useDropzone } from 'react-dropzone';
import { useSelector, useDispatch } from 'react-redux';
import { userInitial } from 'redux/accion/actionCreators';
import { updateUsername } from 'api';
import { toast } from "react-toast";
import { updateEmail as actualizarEmail, updatePassword } from 'api';
import { updateAvatar, updateLogo } from 'api';
import CachedIcon from '@material-ui/icons/Cached';
import Imgloader from 'assets/loader.gif';
import Card from "components/Card";
import Input from "components/Input";
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
    const [loadingLogo, setLoadingLogo] = useState<boolean>(false)
    const [loadingAvatar, setLoadingAvatar] = useState<boolean>(false)

    useEffect(() => {
        document.title = userPage
    }, []);

    const onDropAvatar = useCallback(acceptedFiles => {
        let fileReader = new FileReader();
        const file = acceptedFiles[0];
        fileReader.readAsDataURL(file)
        fileReader.onload = function () {
            setLoadingAvatar(true)
            updateAvatar(formUser._id, formUser.nameavatar, fileReader.result).then((res) => {
                dispatch(userInitial({
                    autenticate: true,
                    user: {
                        _id: res.id,
                        email: res.email,
                        username: res.username,
                        logo: res.logo,
                        avatar: res.avatar,
                        nameavatar: res.nameavatar,
                        namelogo: res.namelogo
                    }
                }))
                setFormUser({
                    ...formUser,
                    avatar: res.avatar,
                })
                setLoadingAvatar(false)
                toast('Imagen actualizada')
            })
        };
    }, [formUser, dispatch])

    const onDropLogo = useCallback(acceptedFiles => {

        let fileReader = new FileReader();
        const file = acceptedFiles[0];
        fileReader.readAsDataURL(file)
        fileReader.onload = function () {
            setLoadingLogo(true)
            updateLogo(formUser._id, formUser.namelogo, fileReader.result).then((res) => {
                dispatch(userInitial({
                    autenticate: true,
                    user: {
                        _id: res.id,
                        email: res.email,
                        username: res.username,
                        logo: res.logo,
                        avatar: res.avatar,
                        nameavatar: res.nameavatar,
                        namelogo: res.namelogo
                    }
                }))
                setFormUser({
                    ...formUser,
                    logo: res.logo,
                })
                setLoadingLogo(false)
                toast('Logo actualizado')
            })
        };
    }, [formUser, dispatch])

    const logoprops = useDropzone({
        accept: "image/jpeg, image/png, image/svg+xml",
        noKeyboard: true,
        onDrop: onDropLogo,
    });

    const avatarprops = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop: onDropAvatar,
    });


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
                if (res) {
                    localStorage.setItem('password', formUser.password);
                    toast('Contraseña actualizada')
                } else {
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
                setLoadEmail(false);
                localStorage.setItem('email', formUser.email);
                dispatch(userInitial({
                    autenticate: true,
                    user: {
                        _id: res.id,
                        email: res.email,
                        username: res.username,
                        logo: res.logo,
                        avatar: res.avatar,
                        nameavatar: res.nameavatar,
                        namelogo: res.namelogo
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
                            {...avatarprops.getRootProps()}
                            src={loadingAvatar ? Imgloader : formUser.avatar}
                            alt={formUser.nameavatar}
                            size="large"
                        />
                        <input {...avatarprops.getInputProps()} />
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
                            {...logoprops.getRootProps()}
                            src={loadingLogo ? Imgloader : formUser.logo}
                            alt={formUser.namelogo}
                            size="large"
                        />
                        <input {...logoprops.getInputProps()} />
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

