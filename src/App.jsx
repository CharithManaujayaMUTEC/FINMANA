
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Profile from './Pages/Profile.jsx';
import Login from './Pages/Login.jsx';
import Income from './Pages/income.jsx';
import Expenditure from './Pages/expenditure.jsx';
import Bankbalance from './Pages/Bankbalance.jsx';
import Footer from './Pages/Footer.jsx';



const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
      
      
      <NavBar/>
      <Routes>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/income' element = {<Income/>}/>
        <Route path='/expenditure' element = {<Expenditure/>}/>
        <Route path='/bankbalance' element = {<Bankbalance/>}/>
      </Routes>

      <Footer />
      
      
    </div>
    </BrowserRouter>
  )
}

export default App
