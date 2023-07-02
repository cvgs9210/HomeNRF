import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import Signup from './componentes/Signup';
// import UserList from './componentes/UserList';
import Login from './componentes/Login';
import Dispositivos from './componentes/Dispositivos/Dispositivos';

function App() {
  return (
    // <Signup/>
    // <Login/>
    // <Home/>
    // <Dispositivos/>
    // <UserList/>

    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dispositivos" element={<Dispositivos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
