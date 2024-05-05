import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
import Loader from "../components/Loader"
import { useGetProductsQuery } from "../slices/productsApiSlice"
const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <h1>Lastest Products</h1>
          <Row>
            {products.map((product, i) => {
              return (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product key={i} product={product} />
                </Col>
              )
            })}
          </Row>
        </>
      )}
    </div>
  )
}

export default HomeScreen
