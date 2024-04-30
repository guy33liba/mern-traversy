import React, { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
const HomeScreen = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/products`)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])
  return (
    <div>
      <h1>Lastest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default HomeScreen
