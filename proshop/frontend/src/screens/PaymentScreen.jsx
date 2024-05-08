import React, { useState } from "react"
import { Form, Button, Col } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import CheckoutSteps from "../components/CheckoutSteps"

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("Pay Pal")
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
                value="PayPal"
                checked={paymentMethod === "PayPal"}
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
