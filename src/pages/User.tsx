import {useEffect} from 'react';
import {userPage} from 'config/titles'
import Card from "components/Card"
import Input from "components/Input"
import Grid from '@material-ui/core/Grid';
import Avatar from "components/Avatar";
import Button from "components/Button";

const User = ():JSX.Element => {
    useEffect(() => {
        document.title = userPage
    }, []);
    return (
        <Grid spacing={2}>
            <Card title="Credenciales de acceso">
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Avatar src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" size="large" />
                    </Grid>
                    <Grid item xs={10}>
                        <Input placeholder="Email" bordered fluid label="Email" />
                        <Input placeholder="Password" bordered fluid defalutValue="************" label="password" />
                        <Button primary fluid>
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </Card>
            <br/>
            <Card title="Informacion y Logo">
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Avatar src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" size="large" />
                    </Grid>
                    <Grid item xs={10}>
                        <Input placeholder="Username" bordered fluid label="Nombre de usuario"/>
                        <Button primary fluid>
                            Update username
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default User

/**
 * <Grid>
            <Grid xs={3} spacing={2}>
                <Card title="Access user">
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <Avatar src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" size="large"/>
                        </Grid>
                        <Grid item xs={8}>
                            <Input placeholder="Email" />
                            <Input placeholder="Password" defalutValue="************" />
                            <Button primary fluid>
                                Update
                            </Button>
                        </Grid>
                    </Grid>
                </Card>

            </Grid>

        </Grid>
 */
