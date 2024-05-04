import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"
import Rating from "../components/Rating"
import { useState } from "react"
import axios from "axios"
const ProductScreen = () => {
  const { id: productId } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`)
      setProduct(data)
    }
    fetchProduct()
  }, [productId])
  console.log(product.image)
  return (
    <div>
      <Link className="btn btn-light my3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>{product.image && <Image src={`../${product.image}`} fluid />}</Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>status:</Col>
                  <Col>
                    <strong>${product.count_in_stock > 0 ? "In Stock" : "Out Of Stock"}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn-block" type="button" disabled={product.count_in_stock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
