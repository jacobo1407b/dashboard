import {useEffect} from 'react'
import {homePage} from 'config/titles';
import {useSelector} from 'react-redux'

const Home = () => {

    const state = useSelector(state => state)
    console.log(state)
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