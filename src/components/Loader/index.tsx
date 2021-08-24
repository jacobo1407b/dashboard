import { FunctionComponent } from 'react';
import ICOLOAD from 'assets/loading.svg';

interface ILOADER {
    loading?: boolean
}
const Loader: FunctionComponent<ILOADER> = ({ loading }) => {
    return (
        <>
            {loading && (<div className="page-loader">
                <img
                    src={ICOLOAD}
                    alt="loader"
                />
            </div>)}
        </>

    )
}

Loader.defaultProps={
    loading:false
}

export default Loader
