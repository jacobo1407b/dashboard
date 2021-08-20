import { useState, useEffect } from 'react'
import { newsPage } from 'config/titles';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from 'redux/accion/actionCreators'
import { INews } from 'redux/myTypes';
import AddIcon from '@material-ui/icons/Add';
import AddNews from 'Custom/AddNews';
import EditNews from 'Custom/EditNews';
import DeleteNews from 'Custom/DeleteNews';
import Grid from '@material-ui/core/Grid';
import ImageNews from 'assets/new-image.png'
import Button from 'components/Button';


const News = (): JSX.Element => {
    const dispatch = useDispatch()
    const newsReduce: any = useSelector<any>(state => state.newsReducer)
    const [news, setLength] = useState<number>(newsReduce?.news?.length);
    const [newsArray] = useState<INews[]>(newsReduce.news)

    useEffect(() => {
        document.title = newsPage
    }, []);

    /*console.log(newsReduce?.news?.length)
    console.log(news)*/
    function onEdit(value: INews, keyId: number) {
        const { _id, title, excerpt } = value
        dispatch(openModal({
            open: true,
            title: "",
            children: <EditNews _id={_id} title={title} excerpt={excerpt} keyId={keyId} arregloNews={newsArray} />
        }))
    }

    function onDelete(id: string | undefined, key: number) {
        dispatch(openModal({
            open: true,
            title: "",
            children: <DeleteNews 
            id={id} 
            keyId={key} 
            setLength={setLength}
            newsArray2={newsArray} 
            />
        }))
    }

    function agregarNoticia() {
        dispatch(openModal({
            open: true,
            title: "",
            children: <AddNews setLength={setLength} />
        }))
    }
    return (
        <div>
            <Button
                round
                disabled={news === 4 ? true : false}
                primary
                onClick={agregarNoticia}
            >
                <AddIcon />
            </Button>
            {news > 0 ? (
                <Grid container spacing={2}>
                    {newsArray.map((values, i) => (
                        <Grid item xs={6} key={values._id}>
                            <div className="flex items-center w-full px-2 py-1 bg-cover card bg-base-200" >
                                <div className="card glass lg:card-side text-neutral-content">
                                    <div className="max-w-md card-body">
                                        <h2 className="card-title">{values.title}</h2>
                                        <p>{values.excerpt}</p>
                                        <div className="card-actions">
                                            <Button
                                                info
                                                round
                                                onClick={() => onEdit(values, i)}
                                            >
                                                Editar
                                            </Button>
                                            <Button
                                                error
                                                onClick={() => onDelete(values._id, i)}
                                                round
                                            >
                                                Eliminar
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Grid spacing={2}>

                    <div className="flex items-center w-full px-4 py-10 bg-cover card bg-base-200" >
                        <div className="card glass lg:card-side text-neutral-content">
                            <figure className="p-6">
                                <img src={ImageNews} className="rounded-lg shadow-lg" alt="Sección noticias" style={{ width: "300px", height: "300px" }} />
                            </figure>
                            <div className="max-w-md card-body">
                                <h2 className="card-title">Sección de noticias</h2>
                                <p>¡Aún no hay noticias agregadas !, presione el siguiente botón para agregar una nueva noticia a su sitio web</p>
                                <div className="card-actions">
                                    <Button
                                        onClick={agregarNoticia}
                                        glass
                                        round
                                    >
                                        Agregar noticia
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Grid>
            )}
        </div>
    )
}

export default News