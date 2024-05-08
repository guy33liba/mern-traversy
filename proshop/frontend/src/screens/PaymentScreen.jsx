import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Form, Button, Col } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import CheckoutSteps from "../components/CheckoutSteps"
import { savePaymentMethod } from "../slices/cartSlice"

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal")
  // const handleCheckBox = (newValue) => {
  //   setPaymentMethod("PayPal")
  //   if (newValue === "PayPal") {
  //     newValue = ""
  //     setPaymentMethod(newValue)
  //   } else {
  //     newValue = "PayPal"
  //     setPaymentMethod(newValue)
  //   }
  // }

  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form>
          <Form.Group controlId="paymentMethod">
            <Form.Label>Payment Method</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="PayPal or Credit Card"
                id="PayPal"
                name="paymentMethod"
                value={paymentMethod}
                checked={paymentMethod === "PayPal"}
                // onClick={(e) => handleCheckBox(e.target.value)}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Button type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </div>
  )
}

export default PaymentScreen
