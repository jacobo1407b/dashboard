import {useEffect} from 'react';
import {HashRouter} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {isAuthenticate} from 'api'
import {userInitial} from 'redux/accion/actionCreators'
import Login from 'pages/Login';
import Layout from 'Layout';
import Modal from 'components/Modal';


function App(): JSX.Element {
  const userRedux:any = useSelector<any>(state => state.userReducer.user)
  const dispatch = useDispatch();
  
  useEffect(() => {
    (async ()=>{
      isAuthenticate().then((response)=>{
        const user = {
          email: response.user?.email,
          username: response.user?.username,
          _id: response.user?._id,
          logo:response.user?.logo,
          avatar:response.user?.avatar,
          namelogo:response.user?.namelogo,
          nameavatar:response.user?.nameavatar
        }
        const data:any = {
          autenticate:response.autenticate,
          user
        }
        dispatch(userInitial(data))
      })
    })()
  }, [dispatch]);

  return (
    <HashRouter>
      <Modal/>
      {!userRedux.autenticate?(
       <Login/>
      ):(
        <Layout/>
      )}
    </HashRouter>
  );
}

export default App;
//totalPages