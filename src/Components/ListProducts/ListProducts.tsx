import useFetch from "../../hooks/useFetch"
import { ProductItem } from "../../types/typeApp";
import Product from "./Product/Product";

const ListProducts = () => {

  const { products, isLoading } = useFetch();

  const handleAddToCart = (product: ProductItem) => {
    console.log('Agregando')
  }

  return (
    <>
      {
        products.map(product => (
          <Product 
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart} />
        ))
      }
    </>
  )
}

export default ListProducts
