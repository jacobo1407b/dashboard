import {Switch,Route} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import {msgRouter,banerRouter} from 'utils';
import {galleryRouter,newsRouter,profileRouter,socialRoutes} from 'utils'
import {aboutRouter,featureRouter,carouselRouter} from 'utils'
import {routerType} from 'typesreact';
import Banner from 'pages/settings/Banner';
import About from 'pages/settings/About';
import CarouselMain from 'pages/settings/CarouselMain';
import Features from 'pages/settings/Features';
//import Home from "pages/Home";
import Messages from "pages/Messages";
import Gallery from 'pages/Gallery';
import News from 'pages/News';
import User from 'pages/User';
import Social from 'pages/Social';

const routerMap: routerType[] = [
    /*{
        id:1,
        path:mainRouter,
        exact:true,
        components:<Home/>
    },*/
    {
        id:2,
        path:msgRouter,
        exact:true,
        components: <Messages/>
    },
    {
        id:3,
        path:banerRouter,
        exact:true,
        components:<Banner/>
    },
    {
        id:4,
        path:galleryRouter,
        exact:true,
        components:<Gallery/>
    },
    {
        id:5,
        path:newsRouter,
        exact:true,
        components:<News/>
    },
    {
        id:6,
        path:profileRouter,
        exact:true,
        components:<User/>
    },
    {
        id:7,
        path:aboutRouter,
        exact:true,
        components:<About/>
    },
    {
        id:8,
        path:featureRouter,
        exact:true,
        components:<Features/>
    },
    {
        id:9,
        path:carouselRouter,
        exact:true,
        components:<CarouselMain/>
    },
    {
        id:10,
        path:socialRoutes,
        exact:true,
        components:<Social/>
    }
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