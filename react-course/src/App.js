import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import GeneralContent from './components/GeneralContent/GeneralContent';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet/>
    </div>    
  );
}

export default App;
