import { FunctionComponent } from 'react';

interface IModal {
    open?: boolean
    children: JSX.Element,
    actions?: JSX.Element
}

const Modal: FunctionComponent<IModal> = ({ open, children, actions }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-2" className="modal-toggle" checked={open} />
            <div className="modal">
                <div className="modal-box">
                    {children}
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

Modal.defaultProps = {
    open: true
}
export default Modal;