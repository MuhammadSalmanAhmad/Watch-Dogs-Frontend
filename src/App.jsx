import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
//import HoemFeed from './home/home';
import HomeFeed from './home/home';
// import SignUp from './authscreens/SignUp';
import OnBoarding from './authscreens/onboarding';
import Wallet from './authscreens/wallet';
import WelcomeScreen from './home/WelcomeScreen';
import Signup from './Signup';

// import Signup from './authscreens/Signup';
// import SignUp from './authscreens/Signup';



function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/WelcomeScreen" element={<HomeFeed />} />
        <Route path="/signUp" element={<Signup></Signup>} />
        <Route path='/onboarding' element={<OnBoarding></OnBoarding>}></Route>
        <Route path='/wallet' element={<Wallet></Wallet>}></Route>
        <Route path='/' element={<WelcomeScreen></WelcomeScreen>}></Route>
       
      </Routes>
      
     
    </Router>
  )
}

export default App
