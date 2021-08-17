import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from 'redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toast'


ReactDOM.render(
    <Provider store={store}>
        <App />
        <ToastContainer delay={3000} position="bottom-right" />
    </Provider>
    , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
