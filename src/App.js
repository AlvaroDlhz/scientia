import './App.css';
import { Router, Routes, BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './screens/landingPage';
import Header from '../src/components/header'

function App() {
  return (
    <div className='App'>
      <BrowserRouter class="bg-black">
        <Header/>

        <Routes>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
