import {useState} from 'react';
import {HashRouter} from 'react-router-dom'
import Login from 'pages/Login';
import Layout from 'Layout';
function App(): JSX.Element {
  const [user] = useState(true);
  return (
    <HashRouter>
      {!user?(
        <Login/>
      ):(
        <Layout/>
      )}
    </HashRouter>
  );
}

export default App;
//totalPages