import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap"
import CheckoutSteps from "../components/CheckoutSteps"
import { toast } from "react-toastify"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { useCreateOrderMutations } from "../slices/orderApiSlice"
import { clearCartItems } from "../slices/cartSlice"
//
const PlaceOrderScreens = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/placeorder")
    } else if (!cart.paymentMethod) {
      navigate("/payment")
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate])
  return (
    <>
      <CheckoutSteps step2 step3 step4>
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Shipping</h2>
                <p>
                  <strong>Address:</strong>
                  {cart.shippingAddress.address},{cart.shippingAddress.city}
                  {cart.shippingAddress.postalCode}
                  {cart.shippingAddress.country}
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Shipping</h2>
                <p>
                  <strong>Payment Method:</strong>
                  {cart.paymentMethod}
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Order Items</h2>
                <strong>Payment Method:</strong>
                {cart.cartItems.length === 0 ? (
                  <Message>Your Cart is Empty</Message>
                ) : (
                  <ListGroup variant="flush">
                    {cart.cartItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col>
                            <Image src={item.image} fluid rounded />
                          </Col>
                          <Col md={4}>
                            <Link to={`/products/${item.product}`}>{item.name}</Link>
                          </Col>
                          <Col md={4}>
                            {item.qty} x {item.price} = ${item.qty * item.price}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </CheckoutSteps>
    </>
  )
}

export default PlaceOrderScreens
