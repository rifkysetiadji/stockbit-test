import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import Movie from 'views/Movie'
import Loading from 'components/Loading'
import Modal from 'components/Modal'
function App() {
  return (
    <Provider store={store}>
      <Loading/>
      <Modal/>
      <Movie/> 
    </Provider>
    
  );
}

export default App;
