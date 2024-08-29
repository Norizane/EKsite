import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Events from './pages/Events';
import AboutUs from './pages/AboutUs';
import Members from './pages/Members';
import AboutMembers from './pages/AboutMembers';
import LogIn from './pages/LogIn'


// import ErrorPage from './pages/ErrorPage';
// import LogIn from './pages/LogIn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/Events' element={<Events/>} />
      <Route path='/Members' element={<Members/>} />
      <Route path='/AboutUs' element={<AboutUs/>} />
      <Route path='/AboutMembers' element={<AboutMembers/>}/>
      <Route path='/LogIn' element={<LogIn/>} />
    </Routes>
  );
}

export default App;
