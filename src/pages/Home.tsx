import {useEffect} from 'react'
import {homePage} from 'config/titles';

const Home = () => {

    useEffect(() => {
        document.title = homePage;
    }, []);
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home