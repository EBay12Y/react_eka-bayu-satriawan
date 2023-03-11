import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import CreateProductForm from './components/CreateProductForm';

function App() {
  return (
    <div>
      <AppHeader />
      <CreateProductForm />
      <AppFooter />
    </div>
  );
}

export default App;
