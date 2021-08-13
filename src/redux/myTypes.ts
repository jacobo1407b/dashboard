
export interface IModal {
    title: string,
    children: JSX.Element | null,
    open: boolean
}

export type ModalState = {
    modal: IModal
}

export type ModalAccion = {
    type: string,
    modal: IModal
}

export type DispatchModal = (args: ModalAccion) => ModalAccion

