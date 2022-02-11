import './App.css';
import { Routes, Route } from 'react-router-dom';
import TokenProvider from './contexts/TokenContext';
import { CookiesProvider } from 'react-cookie';
import OtherComponents from './components/OtherComponents';
import Counter from './components/Counter';
import ListView from './components/ListView';
import DetailView from './components/DetailView';
import Login from './components/Login';
import NewUser from './components/NewUser';
import VerySecret from './components/VerySecret';
import Navigation from './components/Navigation';
import Protected from './components/Protected';
import CreateAnimal from './components/CreateAnimal';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimalProvider from './contexts/AnimalContext';

function App() {
  
  return (
  <AnimalProvider>
  <CookiesProvider>
  <TokenProvider>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route path="/" element={<Counter />}/>
          <Route path="other" element={<OtherComponents />}/>
          <Route path="/list" element={<ListView />} />
          <Route path="/detail/:id" element={<DetailView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newuser" element={<NewUser />} />  
          <Route 
          path="secret" 
          element={
            <Protected>
          <VerySecret />
          </Protected>
          } 
          />
          <Route path="/create" element={
            <Protected>
          <CreateAnimal/>
            </Protected>
          }/>
        </Routes>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
      </TokenProvider>
      </CookiesProvider>
    </AnimalProvider>
  );
}

export default App;