import useFetch from "../../hooks/useFetch"
import Product from "./Product/Product";

const ListProducts = () => {

  const { products, isLoading } = useFetch();

  return (
    <>
      {
        products.map(product => (
          <Product key={product.id} />
        ))
      }
    </>
  )
}

export default ListProducts
