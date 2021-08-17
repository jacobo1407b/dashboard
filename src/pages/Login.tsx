import { useState, useEffect } from 'react';
import { logiPage } from 'config/titles';
import { dataLogin } from 'typesreact'
import { toast } from 'react-toast'
import { login } from 'api'
//redux
import { useDispatch } from 'react-redux';
import { userInitial } from 'redux/accion/actionCreators'
//components
import Form from 'components/Form';
import Input from 'components/Input';
import Button from 'components/Button';


const Login = (): JSX.Element => {
    const [formData, setFormData] = useState<dataLogin>({ email: "", password: "" });
    const [loading, setloading] = useState<boolean>(false);

    const dispatch = useDispatch()

    useEffect(() => {
        document.title = logiPage
    }, []);

    const onChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const onSubmit = () => {
        if (!formData.email || !formData.password) {
            toast.error('Compelete todos los campos!')
        } else {
            setloading(true)
            login(formData.email, formData.password).then((res: any) => {
                setloading(false);
                if (!res.login) {
                    toast.error(res.msg)
                } else {
                    dispatch(userInitial({
                        autenticate: res.login,
                        user: {
                            email: res.user?.email,
                            username: res.user?.username,
                            _id: res.user?.id,
                            logo: res.user?.logo,
                            avatar: res.user?.avatar
                        }
                    }))
                    toast('Login successfully')
                }
            })
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="text-center hero-content">
                <div className="max-w-md">
                    <div className="card shadow-xl image-full">
                        <figure>
                            <img src="https://picsum.photos/id/1005/400/250" alt="inits" />
                        </figure>
                        <div className="justify-end card-body">
                            <h2 className="card-title">Login</h2>
                            <Form
                                onSubmit={onSubmit}
                                onChange={onChange}
                            >
                                <div>
                                    <Input
                                        label="Email"
                                        placeholder="example@example.com"
                                        name="email"
                                    />
                                    <Input
                                        label="Password"
                                        placeholder="**********"
                                        type="password"
                                        name="password"
                                    />
                                    <Button
                                        primary
                                        fluid
                                        round
                                        loading={loading}
                                    >
                                        Ingresar
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;