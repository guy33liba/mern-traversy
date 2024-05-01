import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "./Rating"
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded h3" style={{ height: "320px", width: "350px" }}>
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.image} variant="top" style={{ width: "150px", height: "130px" }} />
      </Link>

      <Card.Body>
        <Link style={{ color: "black" }} to={`/product/${product.id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card as="div">
          <Rating
            className="rating"
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card>
        <Card.Text as="h3">
          <strong>${product.price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
