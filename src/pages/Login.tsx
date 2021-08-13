import  {useState} from 'react'
import Form from 'components/Form';
import Input from 'components/Input';
import Button from 'components/Button';


interface dataLogin  {
    email:string,
    password:string
}


const Login = (): JSX.Element => {
    const [formData, setFormData] = useState<dataLogin>({email:"",password:""});
    const [loading, setloading] = useState<boolean>(false);

    const onChange = (e:any)=>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    };

    const onSubmit = ()=>{
        if(!formData.email || ! formData.password){
            
        }else{
            setloading(true)
        }
        
        console.log(formData)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="text-center hero-content">
                <div className="max-w-md">
                    <div className="card shadow-xl image-full">
                        <figure>
                            <img src="https://picsum.photos/id/1005/400/250" alt="inits"/>
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