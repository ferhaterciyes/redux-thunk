import './App.css'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import BasketPage from './pages/BasketPage';
function App() {

  return (
  <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/basket' element={<BasketPage/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
