import { Offcanvas } from 'react-bootstrap'

type Props = {
    handleClose: (state: boolean) => void
}

const SideBar = ({ handleClose }: Props) => {
  return (
    <Offcanvas 
        show={true} 
        onHide={() => handleClose(false)}
        placement='end'
        scroll={ true }>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Tu carrito de compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           Ahre
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default SideBar
