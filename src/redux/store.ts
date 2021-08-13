import { createStore } from 'redux';
import reducer from './reducer';
import {ModalAccion,ModalState,DispatchModal} from './myTypes';
import {Store} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

interface IStore {
    ModalState:ModalState,
    ModalAccion:ModalAccion
}


const store: Store<IStore> & {
    dispatch: DispatchModal
  } = createStore(
      reducer,
      composeWithDevTools()
      )

export default store;