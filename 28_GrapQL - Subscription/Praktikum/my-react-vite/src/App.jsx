import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RootRouter from './RootRouter';
import store from './config/redux/store';
import { Provider } from 'react-redux';
import apolloClient from "./config/apollo";
import { ApolloProvider } from "@apollo/client";


function App() {

  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <RootRouter />
      </Provider>
    </ApolloProvider>
  )
}

export default App
