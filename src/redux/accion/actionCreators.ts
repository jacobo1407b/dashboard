import * as actionTypes from '../acctionType';
import {IModal,ModalAccion} from '../myTypes';

export function openModal(modal:IModal): ModalAccion{
    const action : ModalAccion = {
        type: actionTypes.OPEN_MODAL,
        modal
    };

    return action;
};