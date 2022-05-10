import NavBar from "../NavBar/NavBar"
import { Route, Routes } from 'react-router-dom';
import Home from "../../Pages/Home/Home";
import Checkout from "../../Pages/Checkout";

type Props = {
  handleOpen: (state: boolean) => void
}

const Navigation = ({ handleOpen }: Props) => {
  return (
    <>
      <NavBar handleOpen={ handleOpen }/>
   
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
  
    </>
  )
}

export default Navigation