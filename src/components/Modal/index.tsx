import { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from 'redux/accion/actionCreators';
import { IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';


interface IModal {
    actions?: JSX.Element
}

const Modal: FunctionComponent<IModal> = ({ actions }) => {
    const dispatch = useDispatch()
    const state: any = useSelector<any>(state => state.modalReducer.modal)

    function closeModal() {
        dispatch(openModal({
            open: false,
            title: "",
            children: null,
            params:{}
        }))
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-2" className="modal-toggle" checked={state.open} />
            <div className="modal">
                <div className="modal-box">
                    <IconButton color="inherit" onClick={closeModal}>
                        <CancelIcon />
                    </IconButton>

                    <br />
                    {state.children}
                    {actions ? (
                        <div className="modal-action">
                            {actions}
                        </div>
                    ) : null}

                </div>
            </div>
        </div>
    )
}

export default Modal;