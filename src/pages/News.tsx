import { useState,useEffect } from 'react'
import {newsPage} from 'config/titles';
import Grid from '@material-ui/core/Grid';
import ImageNews from 'assets/new-image.png'
import Button from 'components/Button';

const itemEjemplo = [
    {
        id:1,
        title:"titulo 1",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum ex eveniet consectetur nisi odit officia ea expedita voluptas, dolorem beatae hic atque nemo voluptate eum sapiente quas eaque praesentium porro?"
    },
    {
        id:2,
        title:"titulo 2",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum ex eveniet consectetur nisi odit officia ea expedita voluptas, dolorem beatae hic atque nemo voluptate eum sapiente quas eaque praesentium porro?"
    },
    {
        id:3,
        title:"titulo 3",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum ex eveniet consectetur nisi odit officia ea expedita voluptas, dolorem beatae hic atque nemo voluptate eum sapiente quas eaque praesentium porro?"
    },
    {
        id:4,
        title:"titulo 4",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum ex eveniet consectetur nisi odit officia ea expedita voluptas, dolorem beatae hic atque nemo voluptate eum sapiente quas eaque praesentium porro?"
    }
]

const News = (): JSX.Element => {

    useEffect(() => {
        document.title = newsPage
    }, []);

    const [news] = useState<boolean>(false);
    return (
        <div>
            {news ? (
                <Grid container spacing={2}>
                    {itemEjemplo.map((values)=>(
                        <Grid item xs={6} key={values.id}>
                        <div className="flex items-center w-full px-2 py-1 bg-cover card bg-base-200" >
                            <div className="card glass lg:card-side text-neutral-content">
                                <div className="max-w-md card-body">
                                    <h2 className="card-title">{values.title}</h2>
                                    <p>{values.text}</p>
                                    <div className="card-actions">
                                        <Button info round>
                                           Editar
                                        </Button>
                                        <Button error round>
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
                                    <Button glass round>
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