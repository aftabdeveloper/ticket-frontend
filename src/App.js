import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './component/home'
import Login from './component/login'
import Register from './component/register'
import NotFound from "./component/not-found"
import ForgotPassword from './component/forgot-password'

const App = ()=>{
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />        
          <Route path="/register" element={<Register />} />        
          <Route path="/login" element={<Login />} />    
          <Route path='/forgot-password' element={<ForgotPassword />}/>    
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App