import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "./Rating"
function capitalizeAfterSpace(str) {
  let words = str.split(" ")
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
  }
  return words.join(" ")
}
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded h3" style={{ height: "400px", width: "350px" }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" style={{ width: "200px", height: "160px" }} />
      </Link>

      <Card.Body>
        <Link style={{ color: "black" }} to={`/product/${product._id}`}>
          <Card.Title as="div" className="cardTitle">
            <strong>{capitalizeAfterSpace(product.name)}</strong>
          </Card.Title>
        </Link>
        <Card as="div">
          <Rating className="rating" value={product.rating} text={`${product.numReviews} reviews`} />
        </Card>
        <Card.Text as="h3">
          <strong>${product.price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
