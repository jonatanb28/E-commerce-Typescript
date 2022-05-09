import { Container } from "react-bootstrap";
import ListProducts from "../../Components/ListProducts/ListProducts";
import './styless.css'

const Home = () => {
  return (
    <Container className="mt-3 home">
      <ListProducts />
    </Container>
  )
}

export default Home;
