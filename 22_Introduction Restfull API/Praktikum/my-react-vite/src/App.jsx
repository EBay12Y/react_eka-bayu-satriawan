import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RootRouter from './RootRouter';
import store from './config/redux/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  )
}

export default App
