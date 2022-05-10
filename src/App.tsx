import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import { useState } from "react";

const AppCommerce = () => {

  const [show, setShow] = useState(false);

  return (
    <BrowserRouter>
      <Navigation handleOpen={ setShow } />
      { show && <SideBar handleClose={ setShow } />}
    </BrowserRouter>
  )
}

export default AppCommerce;
