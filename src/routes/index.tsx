import {Switch,Route} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import {routerType} from 'typesreact';
import Home from "pages/Home";
import Messages from "pages/Messages";
import Carousel from 'pages/Carousel';
import Gallery from 'pages/Gallery';
import News from 'pages/News';
import User from 'pages/User';

const routerMap: routerType[] = [
    {
        id:1,
        path:"/",
        exact:true,
        components:<Home/>
    },
    {
        id:2,
        path:"/messages",
        exact:true,
        components: <Messages/>
    },
    {
        id:3,
        path:"/banner",
        exact:true,
        components:<Carousel/>
    },
    {
        id:4,
        path:"/gallery",
        exact:true,
        components:<Gallery/>
    },
    {
        id:5,
        path:"/news",
        exact:true,
        components:<News/>
    },
    {
        id:6,
        path:"/profile",
        exact:true,
        components:<User/>
    },
]

const Routes = ():JSX.Element=>{
    return (
        <Container fixed>
            <Switch>
                {routerMap.map((routes:routerType):JSX.Element=>(
                    <Route key={routes.id} exact={routes.exact} path={routes.path}>
                        {routes.components}
                    </Route>
                ))}
            </Switch>
        </Container>
    )
}

export default Routes