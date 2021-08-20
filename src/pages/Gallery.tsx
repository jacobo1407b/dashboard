import { useEffect, useState } from 'react'
import { gallPage } from 'config/titles';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from 'redux/accion/actionCreators'
import { IGallery } from 'redux/myTypes'
import { Carousel } from 'react-responsive-carousel';
import DeleteGallery from 'Custom/DeleteGallery';
import EditGalleri from 'Custom/EditGalleri';
import AddGallery from 'Custom/AddGallery';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton, Badge } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Button from "components/Button";

const Gallery = (): JSX.Element => {
    const dispatch = useDispatch()
    const carouselGallery: any = useSelector<any>(state => state.carouselGallery);

    const [galleryArray, setGalleryArray] = useState<IGallery[]>(carouselGallery.gallery)

    useEffect(() => {
        document.title = gallPage;
    }, []);

    function editar(i: number, params: IGallery) {
        dispatch(openModal({
            open: true,
            title: "Editar información",
            children: <EditGalleri
                index={i}
                params={params}
                arrayParams={galleryArray}
                setGalleryArray={setGalleryArray}
            />
        }))
    }

    function eliminar(i: number, name: string, id?: string) {
        dispatch(openModal({
            open: true,
            title: "Eliminar información",
            children: <DeleteGallery
                arrayParams={galleryArray}
                setGalleryArray={setGalleryArray}
                nameImage={name}
                id={id}
                keyParam={i}
            />
        }))
    }

    function agregar() {
        dispatch(openModal({
            open: true,
            title: "Agregar Imagen",
            children: <AddGallery
                setGalleryArray={setGalleryArray}
                arrayParams={galleryArray}
            />
        }))
    }

    return (
        <div>
            <Grid spacing={2}>
                <Grid container spacing={4}>
                    <Grid item xs={2}>
                        <Button
                            fluid
                            round
                            primary
                            onClick={agregar}
                        >
                            Agregar
                        </Button>
                    </Grid>
                    <Grid item xs={10}>
                        <Carousel>
                            {galleryArray.map((value, i) => (
                                <div key={value._id} >
                                    <img src={value.url} style={{ backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "40%", width: "50%" }} className="images-carrusel" alt={value.nameImage} />
                                    <p className="legend">{value.name}</p>
                                    <IconButton
                                        color="inherit"
                                        onClick={() => eliminar(i, value.nameImage, value._id)}
                                    >
                                        <Badge color="secondary"
                                        >
                                            <DeleteIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton
                                        color="inherit"
                                        onClick={() => editar(i, value)}
                                    >
                                        <Badge color="secondary">
                                            <EditIcon />
                                        </Badge>
                                    </IconButton>
                                </div>

                            ))}
                        </Carousel>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Gallery;
