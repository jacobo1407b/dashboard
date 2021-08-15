import { Carousel } from 'react-responsive-carousel';
import { ejemploDataCarousel } from 'utils';
import { IconButton, Badge } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Carrusel = (): JSX.Element => {
    
    return (
        <Carousel>
            {ejemploDataCarousel.map((value) => (
                <div key={value._id}>
                    <img src={value.url} className="images-carrusel" alt={value.nameImage} />
                    <p className="legend">{value.name ? value.name : value.text}</p>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge color="secondary">
                            <DeleteIcon />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge color="secondary">
                            <EditIcon />
                        </Badge>
                    </IconButton>
                </div>

            ))}

        </Carousel>
    )
}

export default Carrusel

/**
 * <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
 */