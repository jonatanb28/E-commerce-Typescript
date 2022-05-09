import NavBar from "../NavBar/NavBar"
import { Route, Routes } from 'react-router-dom';
import Home from "../../Pages/Home/Home";
import Checkout from "../../Pages/Checkout";

const Navigation = () => {
  return (
    <>
      <NavBar />
   
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
  
    </>
  )
}

export default Navigation