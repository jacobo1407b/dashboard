import { useState, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { openModal, galleryStorage } from 'redux/accion/actionCreators';
import { IGallery } from 'redux/myTypes';
import { deleteGallery } from 'api';
import { toast } from 'react-toast'
import Button from 'components/Button';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface IDG {
    id?: string,
    nameImage: string,
    keyParam: number,
    arrayParams: any,
    setGalleryArray: any
}

const DeleteGallery: FunctionComponent<IDG> = ({
    id,
    nameImage,
    keyParam,
    arrayParams,
    setGalleryArray
}) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState<boolean>(false);

    function onCancel() {
        dispatch(openModal({ open: false, title: "", children: null, params: {} }));
    }

    function onDelete() {
        setLoading(true)
        deleteGallery(id, nameImage).then(() => {
            const temporalArray: IGallery[] = arrayParams;
            temporalArray.splice(keyParam, 1);
            dispatch(galleryStorage(temporalArray));
            setGalleryArray(temporalArray);
            toast.success('Imagen eliminada')
            setLoading(false)
            onCancel()
        }).catch(() => {
            toast.error('Error: intenta otra vez');
            setLoading(false)
        })
    }
    return (
        <div>
            <Container fixed>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="h2">
                            ¿Estas seguro de eliminar esta imagen?
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            fluid
                            round
                            primary
                            onClick={onCancel}
                        >
                            Cancelar
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            onClick={onDelete}
                            loading={loading}
                            fluid
                            round
                            error
                        >
                            Eliminar
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default DeleteGallery
