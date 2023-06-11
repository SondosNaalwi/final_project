import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import HeroLivingRoom from './Components/HeroLivingRoom';
import LivingRoom from './Components/LivingRoom';

function App() {
  return (
    <>

      <Routes>
        <Route  path='/' element={<HomePage />}/>
        <Route  path='/Category' element={<LivingRoom />}/>  
        {/* // <Route  path='' element={LivingRoomPage}/>
        // <Route  path='' element=''/>
        // <Route  path='' element=''/> */}
      </Routes>
    </>
    
  );
}

export default App;
